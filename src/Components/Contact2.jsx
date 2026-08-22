import React, { useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

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

const EMAIL = "Zgyro905@gmail.com";

const Contact = () => {
    const sectionRef = useRef();
    const [copied, setCopied] = useState(false);

    useGSAP(() => {
        gsap.from(".contact-reveal", {
            opacity: 0,
            y: 24,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "restart none restart none",
            }
        });
    }, { scope: sectionRef });

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
            ref={sectionRef}
            className="relative border-t border-amber-400/64 bg-gradient-to-b from-amber-400/10 to-black pt-20 md:pt-28 pb-10 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
{/*             <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                }}
            /> */}

            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
                <div className="contact-reveal">
                    <p className="font-mono text-xs md:text-sm text-white/40">
                        <span className="text-amber-400">$</span> contact --init
                    </p>
                    <h2 className="mt-3 font-mono text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white">
                        Let's build{" "}
                        <span className="whitespace-nowrap">
                            something
                            <span className="inline-block w-[0.35ch] h-[0.8em] ml-2 align-middle bg-amber-400 animate-pulse" />
                        </span>
                    </h2>
                </div>

                <img
                    src="pfp.webp"
                    alt="Ryan"
                    className="contact-reveal h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-amber-400/60 shadow-[0_0_40px_-12px_rgba(245,166,35,0.45)]"
                />

                <button
                    onClick={handleCopyEmail}
                    className="contact-reveal group inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/[0.06] px-5 py-2.5 font-mono text-xs md:text-sm text-amber-300 hover:bg-amber-400/10 hover:border-amber-400/50 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                    </svg>
                    {EMAIL}
                    <span className="text-white/30 group-hover:text-amber-300 transition-colors">
                        {copied ? "· copied" : "· click to copy"}
                    </span>
                </button>

                <div className="contact-reveal flex gap-3">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            className="rounded-lg border border-white/10 p-2.5 text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                {s.icon}
                            </svg>
                        </a>
                    ))}
                </div>

                <p className="contact-reveal font-mono text-xs text-white/30 mt-6">
                    <span className="text-white/20">export default</span> Ryan<span className="text-white/20">;</span>
                </p>
            </div>
        </footer>
    );
}

export default Contact;
