import React from "react";

const Experience = () => {
    const experienceData = [
        {
            period: "Jan 2026 - Present",
            role: "Full-Stack SaaS Developer",
            organization: (
                <a href="https://californiumcore.com" target="_blank" rel="noreferrer" className="transition hover:text-amber-300">
                    Californium Core Carbosilion LTD
                </a>
            ),
            description: "Developed SaaS applications across the full stack using ASP.NET Core, Razor Pages, and .NET MAUI.",
            skills: [".NET", "ASP.NET Core", "Sql Server", "Razor Pages", "MAUI"],
        },
        {
            period: "Feb 2025 — Dec 2025",
            role: "Backend Developer",
            organization: "Team81",
            description: "Collaborating on Express and MySQL projects, with a focus on database management, backend structure, and connecting application features to persistent data.",
            skills: ["Express.js", "MySQL", "DBMS", "Teamwork"],
        },
    ];

    return (
        <section id="experience" className="px-4 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto md:max-w-6xl">
                <h1 className="text-center text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-300 to-amber-200 md:text-8xl md:bg-gradient-to-t md:from-white md:via-gray-300 md:to-gray-500">
                    EXPERIENCE
                </h1>

                <div className="relative mt-16 space-y-8 md:mt-24 md:space-y-10">
                    <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-amber-300 via-blue-200/60 to-transparent md:left-1/2" />

                    {experienceData.map((item, index) => (
                        <article
                            key={item.role}
                            className={`relative grid items-start gap-6 pl-10 md:grid-cols-2 md:gap-16 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                        >
                            <div className={index % 2 === 0 ? "md:pr-10" : "md:col-start-2 md:row-start-1 md:pl-10"}>
                                <p className="text-sm tracking-widest text-amber-300">{item.period}</p>
                                <h2 className="mt-2 text-2xl text-white md:text-3xl">{item.role}</h2>
                                <p className="mt-1 text-blue-200/80">{item.organization}</p>
                                <p className="mt-4 text-sm leading-7 text-gray-300 md:text-base">{item.description}</p>
                                <div className={`mt-5 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                    {item.skills.map((skill) => (
                                        <span key={skill} className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <span className="absolute left-0 top-0 h-7 w-7 rounded-full border-4 border-[#1A1A1A] bg-amber-300 md:left-1/2 md:-translate-x-1/2" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
