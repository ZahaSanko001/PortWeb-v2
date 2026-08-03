import React, { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const packages = [
    { name: "react", version: "19.0.0" },
    { name: "tailwindcss", version: "4.0.0" },
    { name: "express", version: "4.21.0" },
    { name: "asp.net-core", version: "9.0.1" },
    { name: "spring-boot", version: "4.1.0" },
    { name: "fastApi", version: "0.141.1" },
    { name: "sql-server", version: "2022.1" },
    { name: "docker", version: "27.3.1" },
];

const dotColors = ["bg-amber-400/70", "bg-sky-400/70", "bg-emerald-400/70"];

const Carousel = () => {
    const sectionRef = useRef();
    const terminalRef = useRef();
    const progressBarRef = useRef();
    const buildStatusRef = useRef();

    useGSAP(() => {
        // Packages "install" one by one as they scroll into view — plain
        // stagger reveal, replays if you scroll back up and down again.
        gsap.from(".skill-line", {
            opacity: 0,
            x: -16,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: terminalRef.current,
                start: "top 80%",
                toggleActions: "restart none restart none",
            }
        });

        gsap.from(".install-summary", {
            opacity: 0,
            y: 10,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: terminalRef.current,
                start: "top 55%",
                toggleActions: "restart none restart none",
            }
        });

        // The only scroll-linked (scrubbed) animation: a single bar filling
        // 0 -> 1 across this section's own height. Percentage-based, so it
        // holds up at any viewport size with no pixel math to recompute.
        gsap.fromTo(
            progressBarRef.current,
            { scaleX: 0 },
            {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                    end: "bottom 70%",
                    scrub: 0.4,
                }
            }
        );

        gsap.from(buildStatusRef.current, {
            opacity: 0,
            y: 10,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom 85%",
                toggleActions: "restart none restart none",
            }
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative py-20 md:py-28 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
{/*             <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
            /> */}

            <div
                ref={terminalRef}
                className="relative max-w-2xl mx-auto rounded-xl border border-white/10 bg-[#1A1A1A] overflow-hidden"
            >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                    {dotColors.map((c, i) => (
                        <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                    <span className="ml-3 font-mono text-xs text-white/40 truncate">
                        install.sh
                    </span>
                </div>

                <div className="p-5 md:p-8">
                    <p className="font-mono text-xs md:text-sm text-white/40 mb-4">
                        <span className="text-amber-400">$</span> npm install @ryan/skillset
                    </p>

                    <ul className="space-y-2 mb-5">
                        {packages.map((pkg) => (
                            <li
                                key={pkg.name}
                                className="skill-line flex items-center justify-between font-mono text-xs md:text-sm text-white/60"
                            >
                                <span>
                                    <span className="text-emerald-400 mr-2">✓</span>
                                    {pkg.name}
                                </span>
                                <span className="text-white/30">{pkg.version}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="install-summary font-mono text-xs md:text-sm text-white/40 mb-8">
                        added <span className="text-white/70">{packages.length} packages</span> in 1.2s
                    </p>

                    <p className="font-mono text-xs md:text-sm text-white/40 mb-3">
                        <span className="text-amber-400">$</span> npm run build
                    </p>

                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                            ref={progressBarRef}
                            className="h-full w-full origin-left rounded-full bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400"
                            style={{ transform: "scaleX(0)" }}
                        />
                    </div>

                    <p
                        ref={buildStatusRef}
                        className="mt-4 font-mono text-xs md:text-sm text-emerald-400"
                    >
                        ✓ build succeeded — 0 errors, 1 developer ready to ship
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
