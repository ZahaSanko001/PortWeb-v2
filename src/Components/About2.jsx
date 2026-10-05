import React from "react";
import { motion } from "motion/react";

const aboutLines = [
    <>Hello! I'm Raiyan.</>,
    <>I'm a CS student at <a className="text-gruvbox-orange hover:underline" href="https://cse.stamforduniversity.edu.bd/">Stamford University</a>.</>,
    <>I've worked on real SaaS products for various clients.</>,
    <>I like dabbling in different techs, but mostly focus on backend development.</>,
    <>I build with good system design, software architecture, and 'SOLID' code practices.</>,
    <>Worked professionally with <a className="text-gruvbox-orange hover:underline" href="https://californiumcore.com">Californium Core</a> on SaaS projects.</>,
    <>I've worked with many stacks of Spring Boot, Express.js, ASP.NET Core</>,
    <>Currently focused mostly on database migration automation systems</>,
    <>Always learning — keeping up with industry practices and the latest trends.</>,
];

const dotColors = ["bg-gruvbox-red/70", "bg-gruvbox-yellow/70", "bg-gruvbox-green/70"];

// power2.out as a cubic-bezier, same curve used across the other
// Motion-converted sections for consistency.
const easeOut = [0.25, 0.46, 0.45, 0.94];

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: easeOut } },
};

const terminalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: easeOut } },
};

// Stagger group for the printed lines — 0.15s apart, same as the
// original GSAP stagger.
const lineGroupVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const lineVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const About = () => {
    return (
        <section
            id="about"
            className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
            <motion.div
                className="relative max-w-5xl mx-auto text-center mb-12 md:mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeUpVariants}
            >
                <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-gruvbox-orange/80 uppercase">
                    // about
                </span>
                <h2 className="mt-3 font-mono text-4xl sm:text-5xl md:text-7xl font-semibold text-gruvbox-fg1">
                    About Me
                    <span className="inline-block w-[0.4ch] h-[0.85em] ml-2 align-middle bg-gruvbox-orange animate-pulse" />
                </h2>
            </motion.div>

            <div className="relative max-w-5xl mx-auto flex items-center justify-center gap-8">
                {/* terminal window */}
                <motion.div
                    className="w-full max-w-2xl rounded-xl border border-gruvbox-orange/40 shadow-lg shadow-gruvbox-orange/15 bg-gruvbox-bg1 overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={terminalVariants}
                >
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gruvbox-bg3/50 bg-gruvbox-bg2/40">
                        {dotColors.map((c, i) => (
                            <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                        ))}
                        <span className="ml-3 font-mono text-xs text-gruvbox-gray truncate">
                            about.md
                        </span>
                    </div>

                    <div className="p-5 md:p-8">
                        <p className="font-mono text-xs md:text-sm text-gruvbox-gray mb-4">
                            <span className="text-gruvbox-orange">$</span> cat about.md
                        </p>
                        <motion.ul
                            className="space-y-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                            variants={lineGroupVariants}
                        >
                            {aboutLines.map((line, i) => (
                                <motion.li
                                    key={i}
                                    variants={lineVariants}
                                    className="flex items-start gap-2 font-mono text-xs md:text-sm text-gruvbox-fg1/85 leading-relaxed"
                                >
                                    <span className="text-gruvbox-orange shrink-0">›</span>
                                    <span>{line}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <p className="font-mono text-xs md:text-sm text-gruvbox-gray mt-5">
                            <span className="text-gruvbox-orange">$</span>
                            <span className="inline-block w-[0.6ch] h-[1em] ml-2 align-middle bg-gruvbox-fg4 animate-pulse" />
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;