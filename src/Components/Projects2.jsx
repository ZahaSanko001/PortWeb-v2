import React, { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const projectData = [
    {
        id: 1,
        file: "versitium.cshtml",
        image: "Versitium.png",
        isLogo: false,
        link: "https://versitium.com",
        title: "Versitium",
        text: "A SaaS learning management application with complete SEO, marketing, analytics and payment gateway integration — student video/downloadable lessons and quizzes, tutor-side management and article publishing, and full admin/moderator controls.",
        techs: [".NET", "ASP.NET Core", "Razor Pages"],
    },
    {
        id: 2,
        file: "MetricForge.cs",
        image: "MetricForge.png",
        isLogo: false,
        link: "https://github.com/ZahaSanko001/MetricForge",
        title: "MetricForge",
        text: "A desktop tray application for monitoring CPU, RAM and network usage built with .NET and WPF, with a lightweight footprint.",
        techs: ["C#", "WPF", ".NET"],
    },
    {
        id: 3,
        file: "attendance-service.java",
        image: "github-icon.webp",
        isLogo: true,
        link: "https://github.com/ZahaSanko001/AttendanceSheetServer",
        title: "Facial Recognition Attendance System",
        text: "A facial recognition system for attendance tracking, with a Spring Boot service and a Python/FastAPI recognition pipeline.",
        techs: ["Spring Boot", "Java", "Python", "OpenCV", "FastAPI", "MySQL"],
    },
    {
        id: 4,
        file: "task-forge.cs",
        image: "github-icon.webp",
        isLogo: true,
        link: "https://github.com/ZahaSanko001/TaskForge",
        title: "Group Project Manager",
        text: "A project management system for teams to keep track of progress and deadlines.",
        techs: ["ASP.NET Core", "C#", "SQL Server"],
    },
];

const dotColors = ["bg-amber-400/70", "bg-sky-400/70", "bg-emerald-400/70"];

const Projects = () => {
    const sectionRef = useRef();
    const headerRef = useRef();

    useGSAP(() => {
        gsap.from(headerRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
            }
        });

        // Single, simple reveal — identical behavior at every breakpoint,
        // nothing pinned, nothing that depends on card height matching.
        gsap.utils.toArray(".project-card").forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 36,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    }, { scope: sectionRef });

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
            {/* faint grid backdrop */}
{/*             <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
            /> */}

            <div ref={headerRef} className="relative max-w-5xl mx-auto text-center mb-12 md:mb-20">
                <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-amber-400/80 uppercase">
                    // selected work
                </span>
                <h2 className="mt-3 font-mono text-4xl sm:text-5xl md:text-7xl font-semibold text-white">
                    Projects
                    <span className="inline-block w-[0.4ch] h-[0.85em] ml-2 align-middle bg-amber-400 animate-pulse" />
                </h2>
            </div>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                {projectData.map((p) => (
                    <a
                        key={p.id}
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card group relative flex flex-col rounded-xl border border-white/10 bg-[#1A1A1A] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_20px_40px_-20px_rgba(245,166,35,0.25)]"
                    >
                        {/* editor tab bar */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                            {dotColors.map((c, i) => (
                                <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                            ))}
                            <span className="ml-3 font-mono text-xs text-white/40 truncate">
                                {p.file}
                            </span>
                        </div>

                        {/* preview */}
                        <div className={`relative aspect-video overflow-hidden bg-black ${p.isLogo ? "flex items-center justify-center p-10 bg-white/[0.03]" : ""}`}>
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
                            <h3 className="font-mono text-lg md:text-xl text-white mb-2 leading-snug">
                                {p.title}
                            </h3>
                            <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">
                                {p.text}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-[11px] px-2 py-1 rounded border border-amber-400/20 bg-amber-400/[0.06] text-amber-300/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <span className="font-mono text-xs text-white/40 group-hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                                view_project()
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Projects;
