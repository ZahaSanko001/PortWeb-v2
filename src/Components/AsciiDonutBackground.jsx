import React, { useEffect, useRef } from "react";

// All the actual donut math/drawing now lives in donutWorker.js, running
// on a separate thread via OffscreenCanvas. This component just hands the
// canvas off once and relays resize/visibility — it does no per-frame
// work itself, so it can't compete with Motion's animations for
// main-thread time the way the previous all-on-main-thread version did.
//
// Mount this once near the root of the app (e.g. in App.jsx, as the
// first child, before your sections).

const AsciiDonutBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // A transferred canvas cannot be transferred again. Create a fresh
        // element for every effect setup, including StrictMode's extra cycle.
        const canvas = document.createElement("canvas");
        canvas.setAttribute("aria-hidden", "true");
        canvas.className = "fixed inset-0 pointer-events-none";
        canvas.style.zIndex = "-1";
        canvas.style.opacity = "0.4";

        // Decorative background — if the browser can't transfer the canvas
        // to a worker, skip rendering entirely rather than falling back to
        // a main-thread version that would reintroduce the exact jank
        // this component exists to avoid.
        if (!canvas.transferControlToOffscreen || typeof Worker === "undefined") {
            return;
        }

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

        const offscreen = canvas.transferControlToOffscreen();
        const worker = new Worker(new URL("./donutWorker.js", import.meta.url));

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        container.appendChild(canvas);

        worker.postMessage(
            {
                type: "init",
                canvas: offscreen,
                width: window.innerWidth,
                height: window.innerHeight,
                dpr,
                reducedMotion,
            },
            [offscreen]
        );

        const handleResize = () => {
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            worker.postMessage({
                type: "resize",
                width: window.innerWidth,
                height: window.innerHeight,
                dpr,
            });
        };

        const handleVisibility = () => {
            worker.postMessage({ type: "visibility", hidden: document.hidden });
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibility);
            worker.terminate();
            canvas.remove();
        };
    }, []);

    return <div ref={containerRef} aria-hidden="true" />;
};

export default AsciiDonutBackground;
