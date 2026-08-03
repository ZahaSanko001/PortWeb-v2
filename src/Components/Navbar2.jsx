import React, { useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { href: "#hero", label: "~/" },
    { href: "#about", label: "~/about" },
    { href: "#projects", label: "~/projects" },
    { href: "#experience", label: "~/experience" },
    { href: "#contact", label: "~/contact" },
];

const dotColors = ["bg-amber-400/70", "bg-sky-400/70", "bg-emerald-400/70"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        // Anchored to real page scroll (numeric start), not the fixed
        // nav's own bounding box — a fixed element's rect doesn't move
        // as the page scrolls, so using it as the trigger was unreliable.
        gsap.fromTo(
            ".nav-surface",
            { backgroundColor: "#00000050", backdropFilter: "blur(0px)" },
            {
                backgroundColor: "#00000050",
                backdropFilter: "blur(10px)",
                duration: 0.4,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: "body",
                    start: "60px top",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <nav>
            {/* desktop */}
            <div className="hidden md:flex fixed top-0 left-4 justify-center py-4 z-40">
                <div className="nav-surface flex items-center gap-1 rounded-full border border-white/10 px-2 py-2">
                    <div className="flex items-center gap-1.5 px-3">
                        {dotColors.map((c, i) => (
                            <span key={i} className={`w-1.5 h-1.5 rounded-full ${c}`} />
                        ))}
                    </div>

                    <div className="flex items-center gap-1">
                        {navLinks.slice(0, -1).map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-mono text-xs lg:text-sm text-white/60 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="ml-1 font-mono text-xs lg:text-sm text-amber-300 border border-amber-400/30 bg-amber-400/[0.08] hover:bg-amber-400/15 hover:border-amber-400/50 transition-colors px-4 py-1.5 rounded-full"
                    >
                        ~/contact
                    </a>
                </div>
            </div>

            {/* mobile trigger */}
            <div className="md:hidden fixed top-4 left-4 z-40">
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                    className={`nav-surface rounded-lg border border-white/10 p-2.5 text-amber-400 transition-opacity ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>
            </div>

            {/* mobile panel, styled like a terminal window */}
            {isOpen && (
                <div className="md:hidden fixed top-4 left-4 right-4 z-50 rounded-2xl border border-white/10 backdrop-blur-[10px] shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                        {dotColors.map((c, i) => (
                            <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                        ))}
                        <span className="ml-3 font-mono text-xs text-white/40 truncate">
                            menu.sh
                        </span>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="ml-auto text-white/40 hover:text-amber-400 transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="p-5 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-mono text-base text-white/80 hover:text-amber-400 transition-colors py-2"
                            >
                                <span className="text-amber-400/70">cd</span> {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
