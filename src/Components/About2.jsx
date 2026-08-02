import React, { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const aboutLines = [
    <>Hello! I'm Raiyan, or Ryan.</>,
    <>I'm a CS student at <a className="text-amber-400 hover:underline" href="https://cse.stamforduniversity.edu.bd/">Stamford University</a>.</>,
    <>I've worked on real SaaS products for various clients.</>,
    <>I like dabbling in different techs, but mostly focus on backend development.</>,
    <>I build with good system design, software architecture, and SOLID practices.</>,
    <>Currently working part-time at <a className="text-amber-400 hover:underline" href="https://californiumcore.com">Californium Core</a>.</>,
    <>I've worked with Spring Boot, Express.js, ASP.NET Core, and React.</>,
    <>Currently focused mostly on .NET projects.</>,
    <>Always learning — keeping up with industry practices and the latest trends.</>,
];

const dotColors = ["bg-amber-400/70", "bg-sky-400/70", "bg-emerald-400/70"];

const About = () => {
    const sectionRef = useRef();
    const headerRef = useRef();
    const leftImg = useRef();
    const rightImg = useRef();
    const terminalRef = useRef();

    useGSAP(() => {
        // toggleActions: "restart none restart none" replays the animation
        // from the start every time the section is entered — whether
        // scrolling down into it or scrolling back up into it.
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

        gsap.from(leftImg.current, {
            x: -80,
            opacity: 0,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
                trigger: terminalRef.current,
                start: "top 85%",
                toggleActions: "restart none restart none",
            }
        });

        gsap.from(rightImg.current, {
            x: 80,
            opacity: 0,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
                trigger: terminalRef.current,
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

        // Lines print in one after another, same trigger as the terminal
        // itself — no pin, no scrub, works identically at every breakpoint.
        gsap.from(".about-line", {
            opacity: 0,
            x: -12,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: terminalRef.current,
                start: "top 80%",
                toggleActions: "restart none restart none",
            }
        });
    }, { scope: sectionRef });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
            {/* faint grid backdrop, matches Projects */}
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
                    // about
                </span>
                <h2 className="mt-3 font-mono text-4xl sm:text-5xl md:text-7xl font-semibold text-white">
                    About Me
                    <span className="inline-block w-[0.4ch] h-[0.85em] ml-2 align-middle bg-amber-400 animate-pulse" />
                </h2>
            </div>

            <div className="relative max-w-5xl mx-auto flex items-center justify-center gap-8">
{/*                 <div className="hidden md:block shrink-0" ref={leftImg}>
                    <img src="masks/12.png" alt="" className="h-56 w-56 object-contain opacity-90" />
                </div> */}

                {/* terminal window */}
                <div
                    ref={terminalRef}
                    className="w-full max-w-2xl rounded-xl border border-amber-400/40 shadow-[0_20px_40px_-20px_rgba(245,166,35,0.25)] bg-[#1A1A1A] overflow-hidden"
                >
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                        {dotColors.map((c, i) => (
                            <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                        ))}
                        <span className="ml-3 font-mono text-xs text-white/40 truncate">
                            about.md
                        </span>
                    </div>

                    <div className="p-5 md:p-8">
                        <p className="font-mono text-xs md:text-sm text-white/40 mb-4">
                            <span className="text-amber-400">$</span> cat about.md
                        </p>
                        <ul className="space-y-3">
                            {aboutLines.map((line, i) => (
                                <li
                                    key={i}
                                    className="about-line flex items-start gap-2 font-mono text-xs md:text-sm text-white/70 leading-relaxed"
                                >
                                    <span className="text-amber-400 shrink-0">›</span>
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="font-mono text-xs md:text-sm text-white/40 mt-5">
                            <span className="text-amber-400">$</span>
                            <span className="inline-block w-[0.6ch] h-[1em] ml-2 align-middle bg-white/40 animate-pulse" />
                        </p>
                    </div>
                </div>

{/*                 <div className="hidden md:block shrink-0" ref={rightImg}>
                    <img src="masks/10.png" alt="" className="h-56 w-56 object-contain opacity-90" />
                </div> */}
            </div>
        </section>
    );
}

export default About;
