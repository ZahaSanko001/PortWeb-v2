import React from "react";
import { motion } from "motion/react";

const projectData = [
    {
        id: 1,
        file: "Tabulae.tsx",
        image: "Tabulae.png",
        isLogo: false,
        link: "https://github.com/ZahaSanko001/Tabulae",
        title: "Tabulae",
        text: "Tabulae is a database schema visualization tool. Connect it to a PostgreSQL, SQL Server, MySQL, or SQLite database and explore its tables, columns, primary keys, foreign keys, and relationships as an interactive diagram.",
        techs: ["ExpressJs", "TypeScript", "ReactFlow", "Dagre"],
    },
    {
        id: 2,
        file: "Denki.rs",
        image: "denki-library.png",
        isLogo: false,
        link: "https://github.com/ZahaSanko001/Denki",
        title: "でんき Denki",
        text: "Denki is a compact desktop music player for listening to local audio files. It pairs a minimal interface with a CAVA-inspired stereo spectrum visualizer",
        techs: ["Rust", "Tauri", "JavaScript"],
    },
    {
        id: 3,
        file: "versitium.cshtml",
        image: "Versitium.png",
        isLogo: false,
        link: "https://versitium.com",
        title: "Versitium",
        text: "A SaaS learning management application with complete SEO, marketing, analytics and payment gateway integration — student video/downloadable lessons and quizzes, tutor-side management and article publishing, and full admin/moderator controls.",
        techs: [".NET", "ASP.NET Core", "Razor Pages", "SQL Server", "Redis"],
    },
    {
        id: 4,
        file: "MetricForge.cs",
        image: "MetricForge.png",
        isLogo: false,
        link: "https://github.com/ZahaSanko001/MetricForge",
        title: "MetricForge",
        text: "A desktop tray application for monitoring CPU, RAM and network usage built with .NET and WPF, with a lightweight footprint.",
        techs: ["C#", "WPF", ".NET"],
    },
    {
        id: 5,
        file: "attendance-service.java",
        image: "github-icon.webp",
        isLogo: true,
        link: "https://github.com/ZahaSanko001/AttendanceSheetServer",
        title: "Facial Recognition Attendance System",
        text: "A facial recognition system for attendance tracking, with a Spring Boot service and a Python/FastAPI recognition pipeline.",
        techs: ["Spring Boot", "Java", "Python", "OpenCV", "FastAPI", "MySQL"],
    },
    {
        id: 6,
        file: "task-forge.cs",
        image: "github-icon.webp",
        isLogo: true,
        link: "https://github.com/ZahaSanko001/TaskForge",
        title: "Group Project Manager",
        text: "A project management system for teams to keep track of progress and deadlines.",
        techs: ["ASP.NET Core", "C#", "SQL Server"],
    },
];

const dotColors = ["bg-gruvbox-red/70", "bg-gruvbox-yellow/70", "bg-gruvbox-green/70"];

const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
            <motion.div
                className="relative max-w-5xl mx-auto text-center mb-12 md:mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                variants={headerVariants}
            >
                <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-gruvbox-orange/80 uppercase">
                    // selected work
                </span>
                <h2 className="mt-3 font-mono text-4xl sm:text-5xl md:text-7xl font-semibold text-gruvbox-fg1">
                    Projects
                    <span className="inline-block w-[0.4ch] h-[0.85em] ml-2 align-middle bg-gruvbox-orange animate-pulse" />
                </h2>
            </motion.div>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                {projectData.map((p) => (
                    <motion.a
                        key={p.id}
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex flex-col rounded-xl border border-gruvbox-bg3/60 bg-gruvbox-bg1 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-gruvbox-orange/40 hover:shadow-lg hover:shadow-gruvbox-orange/15"
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ y: -4 }}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        {/* editor tab bar */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gruvbox-bg3/50 bg-gruvbox-bg2/40">
                            {dotColors.map((c, i) => (
                                <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                            ))}
                            <span className="ml-3 font-mono text-xs text-gruvbox-gray truncate">
                                {p.file}
                            </span>
                        </div>

                        {/* preview */}
                        <div className={`relative aspect-video overflow-hidden bg-gruvbox-bg0 ${p.isLogo ? "flex items-center justify-center p-10 bg-gruvbox-bg2/40" : ""}`}>
                            <img
                                src={p.image}
                                alt={p.title}
                                className={
                                    p.isLogo
                                        ? "h-16 w-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                                        : "h-full w-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                }
                            />
                        </div>

                        {/* body */}
                        <div className="flex flex-col flex-1 p-5 md:p-6">
                            <h3 className="font-mono text-lg md:text-xl text-gruvbox-fg1 mb-2 leading-snug">
                                {p.title}
                            </h3>
                            <p className="text-sm text-gruvbox-fg4 leading-relaxed mb-4 flex-1">
                                {p.text}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-[11px] px-2 py-1 rounded border border-gruvbox-orange/25 bg-gruvbox-orange/10 text-gruvbox-yellow/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <span className="font-mono text-xs text-gruvbox-gray group-hover:text-gruvbox-orange transition-colors inline-flex items-center gap-1.5">
                                view_project()
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

export default Projects;