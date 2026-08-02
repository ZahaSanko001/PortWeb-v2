import React, { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const experienceData = [
    {
        hash: "a3f9c1e",
        current: true,
        period: "Jan 2026 - Present",
        role: "Full-Stack SaaS Developer",
        organization: (
            <a href="https://californiumcore.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
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
        organization: <span className="text-amber-400">Team81</span>,
        description: "Collaborating on Express and MySQL projects, with a focus on database management, backend structure, and connecting application features to persistent data.",
        skills: ["Express.js", "MySQL", "DBMS", "Teamwork"],
    },
];

const dotColors = ["bg-amber-400/70", "bg-sky-400/70", "bg-emerald-400/70"];

const Experience = () => {
    const sectionRef = useRef();
    const headerRef = useRef();
    const terminalRef = useRef();

    useGSAP(() => {
        gsap.from(headerRef.current, {
            opacity: 0,
            y: 20,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                toggleActions: "restart none restart none",
            }
        });

        gsap.from(terminalRef.current, {
            opacity: 0,
            y: 30,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: terminalRef.current,
                start: "top 85%",
                toggleActions: "restart none restart none",
            }
        });

        // Each commit entry prints in after the terminal itself, in order —
        // no pin, no scrub, replays whenever the section is re-entered from
        // either direction.
        gsap.from(".experience-entry", {
            opacity: 0,
            x: -16,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: terminalRef.current,
                start: "top 75%",
                toggleActions: "restart none restart none",
            }
        });
    }, { scope: sectionRef });

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
            {/* faint grid backdrop, matches About / Projects */}
{/*             <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
            /> */}

            <div ref={headerRef} className="relative max-w-5xl mx-auto text-center mb-12 md:mb-16">
                <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-amber-400/80 uppercase">
                    // experience
                </span>
                <h2 className="mt-3 font-mono text-4xl sm:text-5xl md:text-7xl font-semibold text-white">
                    Experience
                    <span className="inline-block w-[0.4ch] h-[0.85em] ml-2 align-middle bg-amber-400 animate-pulse" />
                </h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
                <div
                    ref={terminalRef}
                    className="rounded-xl border border-white/10 bg-[#1A1A1A] overflow-hidden"
                >
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                        {dotColors.map((c, i) => (
                            <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                        ))}
                        <span className="ml-3 font-mono text-xs text-white/40 truncate">
                            experience.log
                        </span>
                    </div>

                    <div className="p-5 md:p-8">
                        <p className="font-mono text-xs md:text-sm text-white/40 mb-6">
                            <span className="text-amber-400">$</span> git log --reverse --stat
                        </p>

                        <div className="relative space-y-10">
                            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/60 via-white/10 to-transparent" />

                            {experienceData.map((item) => (
                                <div key={item.hash} className="experience-entry relative pl-8">
                                    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#12161F] bg-amber-400 ring-2 ring-amber-400/20" />

                                    <p className="font-mono text-xs text-white/40">
                                        commit <span className="text-white/60">{item.hash}</span>
                                        {item.current && (
                                            <span className="ml-2 text-emerald-400">(HEAD -&gt; main)</span>
                                        )}
                                    </p>
                                    <p className="font-mono text-xs text-white/40">
                                        Date: {item.period}
                                    </p>

                                    <h3 className="mt-3 font-mono text-lg md:text-xl text-white leading-snug">
                                        {item.role}
                                    </h3>
                                    <p className="font-mono text-xs md:text-sm text-white/50 mt-1">
                                        @ {item.organization}
                                    </p>
                                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="font-mono text-[11px] px-2 py-1 rounded border border-amber-400/20 bg-amber-400/[0.06] text-amber-300/80"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
