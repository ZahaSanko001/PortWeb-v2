import React, { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const socials = [
    {
        href: "https://x.com/raiyan_k",
        label: "X / Twitter",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
        ),
    },
    {
        href: "https://github.com/ZahaSanko001",
        label: "GitHub",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
        ),
    },
    {
        href: "https://www.linkedin.com/in/raiyan-karim-226254296",
        label: "LinkedIn",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
        ),
    },
];

const Hero = () => {
    // Parallax effect for image
    const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const nx = (x / rect.width) * 2 - 1;
        const ny = (y / rect.height) * 2 - 1;
        const maxMoveX = 20;
        const maxMoveY = 10;
        setImgPos({ x: nx * maxMoveX, y: ny * maxMoveY });
    };

    const handleMouseLeave = () => {
        setImgPos({ x: 0, y: 0 });
    };

    useGSAP(() => {
        // Boot-sequence reveal on load — the hero is visible immediately,
        // so this runs once on mount rather than on scroll.
        gsap.from(".boot-line", {
            opacity: 0,
            y: 16,
            duration: 0.9,
            stagger: 0.18,
            ease: "power2.out",
            delay: 0.2,
        });
    }, { scope: containerRef });

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden pt-24 md:pt-0">
            {/* faint grid backdrop, matches the rest of the site */}
{/*             <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
            /> */}

            <div
                ref={containerRef}
                className="relative max-w-4xl w-full flex flex-col items-center text-center gap-5 md:gap-6"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <p className="boot-line font-mono text-xs md:text-sm text-white/40">
                    <span className="text-amber-400">$</span> whoami
                </p>

                <div className="boot-line relative">
                    <img
                        src="pfp.jpg"
                        alt="Ryan"
                        className="w-32 h-32 md:w-56 md:h-56 rounded-full border-4 border-amber-400/60 shadow-[0_0_50px_-12px_rgba(245,166,35,0.45)] object-cover"
                        style={{
                            transform: `translate(${imgPos.x}px, ${imgPos.y}px)`,
                            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                    />
                    <span className="absolute bottom-1 right-1 flex h-4 w-4 md:h-5 md:w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-full w-full rounded-full bg-emerald-400 border-2 border-[#0B0E14]" />
                    </span>
                </div>

                <h1 className="boot-line font-mono whitespace-nowrap text-4xl sm:text-5xl md:text-[clamp(3.5rem,9vw,8rem)] leading-none tracking-tight text-white">
                    Hi! I'm Ryan
                    <span className="inline-block w-[0.4ch] h-[0.8em] ml-2 align-middle bg-amber-400 animate-pulse" />
                </h1>

                <p className="boot-line font-mono text-sm md:text-base text-white/50 max-w-xl">
                    <span className="text-amber-400">&gt;</span> Full-stack developer building responsive, robust SaaS apps with .NET, Spring Boot, Express &amp; React.
                </p>

                <div className="boot-line flex gap-3">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            className="rounded-lg border border-white/10 p-2.5 text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#projects"
                    className="boot-line group mt-2 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/[0.06] px-6 py-3 font-mono text-sm text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/50 transition-colors"
                >
                    cd ./projects
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
            </div>
        </section>
    );
}

export default Hero;
