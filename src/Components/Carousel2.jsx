import React from "react";

const skills = [
    {
        name: "React",
        icon: <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />,
    },
    {
        name: "Tailwind CSS",
        icon: <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />,
    },
    {
        name: "Express.js",
        icon: <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033zM14 8h-4v8h4M10 12h2.5" />,
    },
    {
        name: "JavaScript",
        icon: <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />,
    },
    {
        name: ".NET",
        icon: <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" stroke="none">.NET</text>,
    },
    {
        name: "DBMS",
        icon: <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0M4 6v6a8 3 0 0 0 16 0v-6M4 12v6a8 3 0 0 0 16 0v-6" />,
    },
    {
        name: "SQL",
        icon: <path d="M14 3v4a1 1 0 0 0 1 1h4M5 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4M18 15v6h2M13 15a2 2 0 0 1 2 2v2a2 2 0 1 1 -4 0v-2a2 2 0 0 1 2 -2zM14 20l1.5 1.5" />,
    },
    {
        name: "MySQL",
        icon: <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3M9 7h.01" />,
    },
    {
        name: "Docker",
        icon: <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46zM5 10h3v3h-3zM8 10h3v3h-3zM11 10h3v3h-3zM8 7h3v3h-3zM11 7h3v3h-3zM11 4h3v3h-3zM4.571 18c1.5 0 2.047 -.074 2.958 -.78M10 16l0 .01" />,
    },
    {
        name: "C#",
        icon: <path d="M5 9l14 0M5 15l14 0M11 4l-4 16M17 4l-4 16" />,
    },
    {
        name: "Python",
        icon: <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4M11 6l0 .01M13 18l0 .01" />,
    },
    {
        name: "Machine Learning",
        icon: <path d="M8 16v-6a2 2 0 1 1 4 0v6M8 13h4M16 8v8" />,
    },
];

const sceneImages = ["1", "2", "4", "5", "6", "8", "9", "10", "11", "12", "13", "14", "15"];

const SkillPill = ({ name, icon }) => (
    <div className="flex items-center gap-2 shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs md:text-sm text-white/70">
        <svg className="w-4 h-4 md:w-5 md:h-5 text-amber-400 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {icon}
        </svg>
        {name}
    </div>
);

const Carousel = () => {
    // Duplicate the content once so translateX(-50%) loops seamlessly.
    const skillsLoop = [...skills, ...skills];
    const skillsLoopReverse = [...skills].reverse().concat([...skills].reverse());
    const imagesLoop = [...sceneImages, ...sceneImages];

    return (
        <div className="relative overflow-hidden py-16 md:py-24 flex flex-col gap-6 md:gap-8">
            <style>{`
                @keyframes marquee-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
            `}</style>

            {/* fade edges so the loop point isn't visible */}
{/*             <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" /> */}

            {/* tech pills, two rows moving opposite directions */}
            <div className="flex flex-nowrap w-max gap-3 animate-[marquee-left_40s_linear_infinite] hover:[animation-play-state:paused]">
                {skillsLoop.map((s, i) => (
                    <SkillPill key={`${s.name}-${i}`} name={s.name} icon={s.icon} />
                ))}
            </div>

            <div className="flex flex-nowrap w-max gap-3 animate-[marquee-right_40s_linear_infinite] hover:[animation-play-state:paused]">
                {skillsLoopReverse.map((s, i) => (
                    <SkillPill key={`${s.name}-rev-${i}`} name={s.name} icon={s.icon} />
                ))}
            </div>

            {/* image strips, two rows moving opposite directions */}
{/*             <div className="flex flex-nowrap w-max gap-3 mt-4 animate-[marquee-left_55s_linear_infinite] hover:[animation-play-state:paused]">
                {imagesLoop.map((n, i) => (
                    <img
                        key={`scene-a-${n}-${i}`}
                        src={`scene1/${n}.webp`}
                        alt=""
                        className="h-40 w-40 md:h-56 md:w-56 object-cover rounded-2xl border border-white/10 shrink-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                    />
                ))}
            </div>

            <div className="flex flex-nowrap w-max gap-3 animate-[marquee-right_55s_linear_infinite] hover:[animation-play-state:paused]">
                {imagesLoop.map((n, i) => (
                    <img
                        key={`scene-b-${n}-${i}`}
                        src={`scene1/${n}.webp`}
                        alt=""
                        className="h-40 w-40 md:h-56 md:w-56 object-cover rounded-2xl border border-white/10 shrink-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                    />
                ))}
            </div> */}
        </div>
    );
};

export default Carousel;
