import React from "react";
import { motion } from "motion/react";

const experienceData = [
    {
        hash: "a3f9c1e",
        current: true,
        period: "Jan 2026 - July 2026",
        role: "Full-Stack SaaS Developer",
        organization: (
            <a href="https://californiumcore.com" target="_blank" rel="noreferrer" className="text-gruvbox-orange hover:underline">
                Californium Core Carbosilion LTD
            </a>
        ),
        description: "Developed SaaS applications across the full stack using ASP.NET Core, Razor Pages, and .NET MAUI.",
        skills: [".NET", "ASP.NET Core", "SQL Server", "Razor Pages", "MAUI"],
    },
    {
        hash: "e7b4d08",
        current: false,
        period: "Feb 2025 — Dec 2025",
        role: "Backend Developer",
        organization: <span className="text-gruvbox-orange">Team81</span>,
        description: "Collaborating on Express and MySQL projects, with a focus on database management, backend structure, and connecting application features to persistent data.",
        skills: ["Express.js", "MySQL", "DBMS", "Teamwork"],
    },
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

// Stagger group for the commit entries — 0.2s apart, same as the
// original GSAP stagger.
const entryGroupVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const entryVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

const Experience = () => {
    return (
        <section
            id="experience"
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
                    // experience
                </span>
                <h2 className="mt-3 font-mono text-4xl sm:text-5xl md:text-7xl font-semibold text-gruvbox-fg1">
                    Experience
                    <span className="inline-block w-[0.4ch] h-[0.85em] ml-2 align-middle bg-gruvbox-orange animate-pulse" />
                </h2>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
                <motion.div
                    className="rounded-xl border border-gruvbox-orange/40 shadow-lg shadow-gruvbox-orange/15 bg-gruvbox-bg1 overflow-hidden"
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
                            experience.log
                        </span>
                    </div>

                    <div className="p-5 md:p-8">
                        <p className="font-mono text-xs md:text-sm text-gruvbox-gray mb-6">
                            <span className="text-gruvbox-orange">$</span> git log --reverse --stat
                        </p>

                        <motion.div
                            className="relative space-y-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                            variants={entryGroupVariants}
                        >
                            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gruvbox-orange/60 via-gruvbox-bg3/60 to-transparent" />

                            {experienceData.map((item) => (
                                <motion.div
                                    key={item.hash}
                                    variants={entryVariants}
                                    className="relative pl-8"
                                >
                                    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gruvbox-bg0 bg-gruvbox-orange ring-2 ring-gruvbox-orange/20" />

                                    <p className="font-mono text-xs text-gruvbox-gray">
                                        commit <span className="text-gruvbox-fg4">{item.hash}</span>
                                        {item.current && (
                                            <span className="ml-2 text-gruvbox-green">(HEAD -&gt; main)</span>
                                        )}
                                    </p>
                                    <p className="font-mono text-xs text-gruvbox-gray">
                                        Date: {item.period}
                                    </p>

                                    <h3 className="mt-3 font-mono text-lg md:text-xl text-gruvbox-fg1 leading-snug">
                                        {item.role}
                                    </h3>
                                    <p className="font-mono text-xs md:text-sm text-gruvbox-fg4/80 mt-1">
                                        @ {item.organization}
                                    </p>
                                    <p className="mt-3 text-sm text-gruvbox-fg4 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="font-mono text-[11px] px-2 py-1 rounded border border-gruvbox-orange/25 bg-gruvbox-orange/10 text-gruvbox-yellow/80"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;