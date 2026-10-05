// Runs the donut.c-style torus rotation + lighting computation and draws
// directly onto an OffscreenCanvas transferred from the main thread. This
// file runs entirely in a worker thread — none of this competes with
// Motion's animations (drag, scroll-velocity, whileInView) for main-thread
// time, which is the whole point.

const RAMP = ".,-~:;=!*#$@";
const CELL_W = 9;
const CELL_H = 16;
const R1 = 1;
const R2 = 2;
const K2 = 5;
const thetaSpacing = 0.1;
const phiSpacing = 0.04;
const aspectCorrection = CELL_W / CELL_H;
const targetFrameMs = 1000 / 30;

let ctx = null;
let cols = 0;
let rows = 0;
let K1 = 0;
let A = 1;
let B = 1;
let output = [];
let zbuffer = [];
let reduceMotion = false;
let timerId = null;

function configure(width, height) {
    cols = Math.ceil(width / CELL_W);
    rows = Math.ceil(height / CELL_H);
    K1 = (cols * K2 * 3) / (8 * (R1 + R2));
    output = new Array(cols * rows).fill(" ");
    zbuffer = new Array(cols * rows).fill(0);
}

function renderFrame() {
    output.fill(" ");
    zbuffer.fill(0);

    const cosA = Math.cos(A), sinA = Math.sin(A);
    const cosB = Math.cos(B), sinB = Math.sin(B);

    for (let theta = 0; theta < 2 * Math.PI; theta += thetaSpacing) {
        const costheta = Math.cos(theta), sintheta = Math.sin(theta);
        for (let phi = 0; phi < 2 * Math.PI; phi += phiSpacing) {
            const cosphi = Math.cos(phi), sinphi = Math.sin(phi);

            const circlex = R2 + R1 * costheta;
            const circley = R1 * sintheta;

            const x = circlex * (cosB * cosphi + sinA * sinB * sinphi) - circley * cosA * sinB;
            const y = circlex * (sinB * cosphi - sinA * cosB * sinphi) + circley * cosA * cosB;
            const z = K2 + cosA * circlex * sinphi + circley * sinA;
            const ooz = 1 / z;

            const xp = Math.floor(cols / 2 + K1 * ooz * x);
            const yp = Math.floor(rows / 2 - K1 * aspectCorrection * ooz * y);

            const L =
                cosphi * costheta * sinB -
                cosA * costheta * sinphi -
                sinA * sintheta +
                cosB * (cosA * sintheta - costheta * sinA * sinphi);

            if (xp >= 0 && xp < cols && yp >= 0 && yp < rows) {
                const idx = yp * cols + xp;
                if (ooz > zbuffer[idx]) {
                    zbuffer[idx] = ooz;
                    const luminanceIndex = Math.max(0, Math.min(RAMP.length - 1, Math.floor(L * 8)));
                    output[idx] = RAMP[luminanceIndex];
                }
            }
        }
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.font = `bold ${CELL_H - 2}px monospace`;
    ctx.textBaseline = "top";

    const dimColor = "rgba(168, 153, 132, 0.9)"; // gruvbox fg4 — shaded side
    const brightColor = "rgba(254, 128, 25, 1)"; // gruvbox orange — lit side

    for (let row = 0; row < rows; row++) {
        let dimLine = "";
        let brightLine = "";
        for (let col = 0; col < cols; col++) {
            const ch = output[row * cols + col];
            const isBright = "!*#$@".includes(ch);
            dimLine += isBright ? " " : ch;
            brightLine += isBright ? ch : " ";
        }
        ctx.fillStyle = dimColor;
        ctx.fillText(dimLine, 0, row * CELL_H);
        ctx.fillStyle = brightColor;
        ctx.fillText(brightLine, 0, row * CELL_H);
    }

    if (!reduceMotion) {
        A += 0.018;
        B += 0.009;
    }
}

self.onmessage = (e) => {
    const { type } = e.data;

    if (type === "init") {
        const { canvas, width, height, dpr, reducedMotion } = e.data;
        ctx = canvas.getContext("2d");
        reduceMotion = reducedMotion;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        configure(width, height);

        renderFrame();
        if (!reduceMotion) {
            timerId = setInterval(renderFrame, targetFrameMs);
        }
    }

    if (type === "resize") {
        const { width, height, dpr } = e.data;
        ctx.canvas.width = width * dpr;
        ctx.canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        configure(width, height);
    }

    if (type === "visibility") {
        const { hidden } = e.data;
        if (hidden && timerId) {
            clearInterval(timerId);
            timerId = null;
        } else if (!hidden && !timerId && !reduceMotion) {
            timerId = setInterval(renderFrame, targetFrameMs);
        }
    }
};
