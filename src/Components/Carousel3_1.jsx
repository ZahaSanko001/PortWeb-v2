import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    useReducedMotion,
} from "motion/react";
import {
    SiReact,
    SiTailwindcss,
    SiExpress,
    SiDotnet,
    SiSpringboot,
    SiFastapi,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiRust,
    SiTauri
} from "react-icons/si";

const packages = [
    { name: "react", version: "19.2.8", Icon: SiReact, color: "#61DAFB" },
    { name: "tailwindcss", version: "4.3.3", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "express", version: "5.2.1", Icon: SiExpress, color: "#E5E7EB" },
    { name: "asp.net-core", version: "10.0.10", Icon: SiDotnet, color: "#8B6FF0" },
    { name: "spring-boot", version: "4.1.0", Icon: SiSpringboot, color: "#6DB33F" },
    { name: "fastApi", version: "0.141.1", Icon: SiFastapi, color: "#14B8A6" },
    { name: "rust", version: "1.98.1", Icon: SiRust, color: "#796a6a" },
    { name: "tauri", version: "2.12.0", Icon: SiTauri, color: "#24C8D8" },
    { name: "postgres", version: "9.7", Icon: SiPostgresql, color: "#336791" },
    { name: "mysql", version: "9.7", Icon: SiMysql, color: "#f29111" },
    // { name: "SQLserver", version: "17.0.5005.3", Icon: SiMicrosoftsqlserver, color: "#C92027" },
    { name: "docker", version: "29.7.1", Icon: SiDocker, color: "#2496ED" },
];

// Wraps v into [min, max) so the loop is seamless.
const wrap = (min, max, v) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
};

const PackageItem = ({ pkg, outlined }) => (
    <span className="inline-flex items-baseline gap-3 md:gap-5 pr-10 md:pr-20 whitespace-nowrap">
        <pkg.Icon
            className="self-center h-[0.8em] w-[0.8em] shrink-0"
            style={{ color: pkg.color }}
            aria-hidden="true"
        />
        <span
            className={
                outlined
                    ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]"
                    : "text-white/80"
            }
        >
            {pkg.name}
        </span>
        <span className="text-amber-400/70 text-[0.32em] [-webkit-text-stroke:0]">
            {pkg.version}
        </span>
    </span>
);

// One full-width band. It drifts at baseVelocity (% of its own width per
// second), speeds up with scroll speed, and reverses when you scroll up.
const VelocityRow = ({ items, baseVelocity, velocityFactor, skewX, outlined }) => {
    const baseX = useMotionValue(0);
    const direction = useRef(1);
    const reduceMotion = useReducedMotion();

    useAnimationFrame((_, delta) => {
        if (reduceMotion) return;
        let moveBy = direction.current * baseVelocity * (delta / 1000);
        const factor = velocityFactor.get();
        if (factor < 0) direction.current = -1;
        else if (factor > 0) direction.current = 1;
        moveBy += direction.current * moveBy * factor;
        baseX.set(baseX.get() + moveBy);
    });

    // Two identical halves, so sliding -50% -> 0% loops with no visible seam.
    const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

    return (
        <motion.div
            style={{ x, skewX }}
            className="flex w-max will-change-transform font-mono font-bold leading-none text-4xl sm:text-6xl md:text-8xl"
        >
            {[...items, ...items].map((pkg, i) => (
                <PackageItem key={`${pkg.name}-${i}`} pkg={pkg} outlined={outlined} />
            ))}
        </motion.div>
    );
};

const Carousel = () => {
    const sectionRef = useRef(null);

    // Page-level scroll speed drives the marquee speed, direction and skew.
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
    const skewX = useTransform(smoothVelocity, [-2000, 2000], [5, -5]);

    // Section-level progress drives the full-width build bar + final status.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 85%", "end 35%"],
    });
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
    const statusOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
    const statusY = useTransform(scrollYProgress, [0.75, 0.95], [8, 0]);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden py-16 md:py-24">
            {/* edge fades so the bands dissolve into the page instead of hard-cutting */}
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" /> */}

            <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 mb-6 md:mb-10 font-mono text-xs md:text-sm text-white/40">
                <p>
                    <span className="text-amber-400">$</span> npm install @ryan/skillset
                </p>
                <p className="hidden sm:block">
                    added <span className="text-white/70">{packages.length} packages</span> in 3.1y
                </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
                <VelocityRow
                    items={packages}
                    baseVelocity={-3}
                    velocityFactor={velocityFactor}
                    skewX={skewX}
                    outlined
                />
                <VelocityRow
                    items={[...packages].reverse()}
                    baseVelocity={3}
                    velocityFactor={velocityFactor}
                    skewX={skewX}
                />
            </div>

            <div className="mt-10 md:mt-16">
                <p className="px-4 sm:px-6 md:px-10 mb-3 font-mono text-xs md:text-sm text-white/40">
                    <span className="text-amber-400">$</span> npm run build
                </p>

                {/* edge to edge, fills as you scroll through the section */}
                <div className="h-[3px] w-full bg-white/10">
                    <motion.div
                        style={{ scaleX: progress }}
                        className="h-full w-full origin-left bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400"
                    />
                </div>

                <motion.p
                    style={{ opacity: statusOpacity, y: statusY }}
                    className="px-4 sm:px-6 md:px-10 mt-4 font-mono text-xs md:text-sm text-emerald-400"
                >
                    ✓ build succeeded — 0 errors, 1 developer ready to ship
                </motion.p>
            </div>
        </section>
    );
};

export default Carousel;