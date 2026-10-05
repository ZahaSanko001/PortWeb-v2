import React from "react";
import { motion } from "motion/react";

// Gruvbox colors are defined globally in src/index.css.
const gb = {
    bg0: "var(--gruvbox-bg0)",
    bg1: "var(--gruvbox-bg1)",
    bg2: "var(--gruvbox-bg2)",
    bg3: "var(--gruvbox-bg3)",
    fg1: "var(--gruvbox-fg1)",
    fg4: "var(--gruvbox-fg4)",
    gray: "var(--gruvbox-gray)",
    red: "var(--gruvbox-red)",
    green: "var(--gruvbox-green)",
    yellow: "var(--gruvbox-yellow)",
    blue: "var(--gruvbox-blue)",
    purple: "var(--gruvbox-purple)",
    aqua: "var(--gruvbox-aqua)",
    orange: "var(--gruvbox-orange)",
};

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

// Static neofetch-style info block — no cycling, just real info.
const sysInfo = [
    { label: "role", value: "Full-Stack Developer" },
    { label: "stack", value: "express · Asp.Net-Core · springboot" },
    { label: "skills", value: "System design, Software Architecture, Backend Architecture" },
    { label: "status", value: "Open for hire" },
];

// Decorative shell-prompt bar (starship/oh-my-posh style), gruvbox-dark
// colors — matches the command-line language used across the rest of
// the site (whoami, cd, git log, npm install) better than IDE chrome would.
const ShellPrompt = () => (
    <div
        className="hidden sm:flex items-stretch h-7 text-[11px] font-mono overflow-hidden rounded-sm border"
        style={{ borderColor: gb.bg3 }}
    >
        <div
            className="flex items-center px-3 pr-6 font-semibold"
            style={{
                backgroundColor: gb.green,
                color: gb.bg0,
                clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)",
            }}
        >
            raiyan
        </div>
        <div
            className="flex items-center px-3 pr-6 -ml-3"
            style={{
                backgroundColor: gb.bg2,
                color: gb.fg1,
                clipPath: "polygon(10% 0, 100% 0, 88% 100%, 0% 100%)",
            }}
        >
            ~/portfolio
        </div>
        <div
            className="flex items-center px-3 -ml-3 font-semibold"
            style={{
                backgroundColor: gb.purple,
                color: gb.bg0,
                clipPath: "polygon(10% 0, 100% 0, 88% 100%, 0% 100%)",
            }}
        >
            git: main
        </div>
        <div className="flex-1" style={{ backgroundColor: gb.bg2 }} />
        <div
            className="flex items-center px-3 -ml-3"
            style={{
                backgroundColor: gb.bg2,
                color: gb.fg4,
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
        >
            128ms
        </div>
    </div>
);

// Same math as the old GSAP tween: duration 0.8, stagger 0.12, delay 0.15,
// ease power2.out (closest cubic-bezier equivalent). Explicit per-item
// index rather than parent-driven staggerChildren, since the 7 pieces
// span two different nesting depths (text column vs. photo column) and
// a nested stagger group would change their relative timing.
const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 + i * 0.12 },
    }),
};

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-24 pt-28 md:pt-24"
        >
            <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">
                {/* text column */}
                <div className="flex flex-col gap-5 md:gap-6 text-left">
                    {/* compact photo, mobile only — desktop gets its own
                        larger version in the side column below */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex md:hidden justify-center"
                    >
                        <div className="relative">
                            <div
                                className="absolute inset-0 translate-x-2 translate-y-2 -z-10 rounded-sm"
                                style={{ backgroundColor: gb.aqua }}
                            />
                            <div className="w-32 sm:w-40">
                                <div
                                    className="flex items-center gap-2 px-2.5 py-1 text-[10px] font-mono rounded-t-sm border border-b-0"
                                    style={{ backgroundColor: gb.bg2, borderColor: gb.bg3, color: gb.fg4 }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: gb.orange }} />
                                    raiyan.webp
                                </div>
                                <div
                                    className="w-full aspect-square overflow-hidden border"
                                    style={{ borderColor: gb.bg3 }}
                                >
                                    <img
                                        src="pfp.jpg"
                                        alt="Ryan"
                                        className="w-full h-full object-cover"
                                        style={{ filter: "sepia(0.25) saturate(0.8)" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
                        <ShellPrompt />
                    </motion.div>

                    <motion.h1
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight"
                        style={{ color: gb.fg1 }}
                    >
                        Hi, I'm Raiyan.
                        <br />
                        I build{" "}
                        <span style={{ color: gb.orange }}>full-stack SaaS</span>{" "}
                        products that ship.
                    </motion.h1>

                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="font-mono text-xs md:text-sm max-w-sm"
                        style={{ color: gb.fg4 }}
                    >
                        <p className="font-bold" style={{ color: gb.orange }}>
                            ryan@portfolio
                        </p>
                        <p style={{ color: gb.bg3 }}>──────────────────</p>
                        {sysInfo.map((row) => (
                            <p key={row.label}>
                                <span style={{ color: gb.green }}>{row.label}</span>
                                <span style={{ color: gb.fg4 }}>: </span>
                                <span style={{ color: gb.fg1 }}>{row.value}</span>
                            </p>
                        ))}
                        <span className="animate-pulse font-bold" style={{ color: gb.orange }}>__</span>
                    </motion.div>

                    <motion.div
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-wrap items-center gap-3 mt-2"
                    >
                        <a
                            href="#projects"
                            className="rounded-sm font-mono font-medium text-sm px-6 py-3 transition-colors"
                            style={{ backgroundColor: gb.orange, color: gb.bg0 }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = gb.yellow)}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = gb.orange)}
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-sm border font-mono font-medium text-sm px-6 py-3 transition-colors"
                            style={{ borderColor: gb.bg3, color: gb.fg4 }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = gb.orange;
                                e.currentTarget.style.color = gb.orange;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = gb.bg3;
                                e.currentTarget.style.color = gb.fg4;
                            }}
                        >
                            Get in Touch
                        </a>
                    </motion.div>

                    <motion.div
                        custom={5}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex items-center gap-4 mt-1"
                    >
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={s.label}
                                title={s.label}
                                className="transition-colors"
                                style={{ color: gb.gray }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = gb.orange)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = gb.gray)}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </motion.div>

                    {/* palette strip — a small, hard-to-fake signature for anyone who recognizes it */}
                    <motion.div
                        custom={6}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="hidden sm:flex items-center gap-1.5 mt-3"
                    >
                        {[gb.red, gb.green, gb.yellow, gb.blue, gb.purple, gb.aqua, gb.orange].map((c) => (
                            <span
                                key={c}
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: c }}
                            />
                        ))}
                        <span className="font-mono text-[10px] ml-2" style={{ color: gb.gray }}>
                            colorscheme gruvbox
                        </span>
                    </motion.div>
                </div>

                {/* photo column */}
                <motion.div
                    custom={7}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="hidden md:flex justify-center"
                >
                    <div className="relative">
                        {/* offset block for depth — sized to match the tab+image
                            stack automatically, since it fills its relative parent */}
                        <div
                            className="absolute inset-0 translate-x-3 translate-y-3 -z-10 rounded-sm"
                            style={{ backgroundColor: gb.aqua }}
                        />

                        <div className="w-56 lg:w-72">
                            {/* mini buffer tab, matching the Statusline above */}
                            <div
                                className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono rounded-t-sm border border-b-0"
                                style={{ backgroundColor: gb.bg2, borderColor: gb.bg3, color: gb.fg4 }}
                            >
                                <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: gb.orange }}
                                />
                                raiyan.webp
                            </div>

                            <div
                                className="w-full aspect-square overflow-hidden border rounded-b-sm"
                                style={{ borderColor: gb.bg3 }}
                            >
                                <img
                                    src="pfp.jpg"
                                    alt="Ryan"
                                    className="w-full h-full object-cover"
                                    style={{ filter: "sepia(0.25) saturate(0.8)" }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;