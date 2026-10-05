import React, { useRef, useState, useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const socials = [
    {
        href: "https://x.com/raiyan_k",
        label: "X / Twitter",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
        ),
    },
    {
        href: "https://www.linkedin.com/in/raiyan-karim-226254296",
        label: "LinkedIn",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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

const roles = [
    "Full-Stack Developer",
    ".NET Specialist",
    "SaaS Builder",
    "Clean Architecture Advocate",
];

// Small, dependency-free typewriter — types a role, pauses, deletes,
// moves to the next. Respects prefers-reduced-motion by just showing
// the first role statically.
const useTypewriter = (words, { typingMs = 65, deletingMs = 35, pauseMs = 1400 } = {}) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
    }, []);

    useEffect(() => {
        if (reduced) return;

        if (!deleting && subIndex === words[index].length) {
            const t = setTimeout(() => setDeleting(true), pauseMs);
            return () => clearTimeout(t);
        }
        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
            return;
        }
        const t = setTimeout(() => {
            setSubIndex((s) => s + (deleting ? -1 : 1));
        }, deleting ? deletingMs : typingMs);
        return () => clearTimeout(t);
    }, [subIndex, deleting, index, words, reduced, typingMs, deletingMs, pauseMs]);

    return reduced ? words[0] : words[index].substring(0, subIndex);
};

const Hero = () => {
    const containerRef = useRef(null);
    const typed = useTypewriter(roles);

    useGSAP(() => {
        gsap.from(".boot-line", {
            opacity: 0,
            y: 14,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            delay: 0.15,
        });
    }, { scope: containerRef });

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-24 pt-28 md:pt-24"
        >
            <div
                ref={containerRef}
                className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center"
            >
                {/* text column */}
                <div className="flex flex-col gap-5 md:gap-6 text-left">
                    <p className="boot-line font-mono text-xs md:text-sm text-white/40">
                        CS @ Stamford University · Bangladesh
                    </p>

                    <h1 className="boot-line font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white">
                        Hi, I'm Raiyan.
                        <br />
                        I build{" "}
                        <span className="text-amber-400">full-stack SaaS</span>{" "}
                        products that ship.
                    </h1>

                    <p className="boot-line font-mono text-sm md:text-base text-white/50 max-w-lg min-h-[1.5em]">
                        <span className="text-amber-400">&gt;</span> {typed}
                        <span className="inline-block w-[0.5ch] h-[0.9em] ml-1 align-middle bg-amber-400 animate-pulse" />
                    </p>

                    <div className="boot-line flex flex-wrap items-center gap-3 mt-2">
                        <a
                            href="#projects"
                            className="rounded-full bg-amber-400 text-[#0B0E14] font-medium text-sm px-6 py-3 hover:bg-amber-300 transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-white/15 text-white/70 font-medium text-sm px-6 py-3 hover:border-amber-400/40 hover:text-amber-400 transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>

                    <div className="boot-line flex items-center gap-4 mt-1">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={s.label}
                                title={s.label}
                                className="text-white/35 hover:text-amber-400 transition-colors"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* photo column */}
                <div className="boot-line hidden md:flex justify-center">
                    <div className="group relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="pfp.jpg"
                            alt="Ryan"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;