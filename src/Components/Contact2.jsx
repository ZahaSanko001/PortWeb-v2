import React, { useState } from "react";
import { motion } from "motion/react";

const socials = [
    {
        href: "https://github.com/ZahaSanko001",
        label: "GitHub",
        icon: (
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        ),
    },
    {
        href: "https://www.linkedin.com/in/raiyan-karim-226254296",
        label: "LinkedIn",
        icon: (
            <>
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </>
        ),
    },
    {
        href: "https://x.com/raiyan_k",
        label: "X / Twitter",
        icon: (
            <>
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </>
        ),
    },
];

const EMAIL = "raiyankarim2003@gmail.com";

// power2.out as a cubic-bezier, same curve used across the other
// Motion-converted sections for consistency.
const easeOut = [0.25, 0.46, 0.45, 0.94];

// All five revealed elements are direct children of the same wrapper,
// so a single-level staggerChildren group is a clean fit — no nested
// depth trade-offs here, unlike About/Experience/Hero.
const groupVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOut } },
};

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard API unavailable — mailto link still works as a fallback
        }
    };

    return (
        <footer
            id="contact"
            className="relative border-t border-gruvbox-orange/60 bg-gradient-to-b from-gruvbox-orange/10 to-gruvbox-bg0 pt-20 md:pt-28 pb-10 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
            <motion.div
                className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={groupVariants}
            >
                <motion.div variants={itemVariants}>
                    <p className="font-mono text-xs md:text-sm text-gruvbox-gray">
                        <span className="text-gruvbox-orange">$</span> contact --init
                    </p>
                    <h2 className="mt-3 font-mono text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gruvbox-fg1">
                        Let's build{" "}
                        <span className="whitespace-nowrap">
                            something
                            <span className="inline-block w-[0.35ch] h-[0.8em] ml-2 align-middle bg-gruvbox-orange animate-pulse" />
                        </span>
                    </h2>
                </motion.div>

                <motion.img
                    variants={itemVariants}
                    src="pfp.jpg"
                    alt="Ryan"
                    className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-gruvbox-orange/60 shadow-lg shadow-gruvbox-orange/20"
                />

                <motion.button
                    variants={itemVariants}
                    onClick={handleCopyEmail}
                    className="group inline-flex items-center gap-2 rounded-full border border-gruvbox-orange/30 bg-gruvbox-orange/10 px-5 py-2.5 font-mono text-xs md:text-sm text-gruvbox-yellow hover:bg-gruvbox-orange/15 hover:border-gruvbox-orange/50 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                    </svg>
                    {EMAIL}
                    <span className="text-gruvbox-gray/70 group-hover:text-gruvbox-yellow transition-colors">
                        {copied ? "· copied" : "· click to copy"}
                    </span>
                </motion.button>

                <motion.div variants={itemVariants} className="flex gap-3">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            className="rounded-lg border border-gruvbox-bg3/70 p-2.5 text-gruvbox-fg4 hover:text-gruvbox-orange hover:border-gruvbox-orange/40 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                {s.icon}
                            </svg>
                        </a>
                    ))}
                </motion.div>

                <motion.p variants={itemVariants} className="font-mono text-xs text-gruvbox-gray/70 mt-6">
                    <span className="text-gruvbox-gray/50">export default</span> Ryan<span className="text-gruvbox-gray/50">;</span>
                </motion.p>
            </motion.div>
        </footer>
    );
}

export default Contact;