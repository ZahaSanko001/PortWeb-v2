import React, { useState } from "react";

const navLinks = [
    { href: "#hero", label: "~/" },
    { href: "#about", label: "~/about" },
    { href: "#projects", label: "~/projects" },
    { href: "#experience", label: "~/experience" },
    { href: "#contact", label: "~/contact" },
];

const dotColors = ["bg-gruvbox-red/70", "bg-gruvbox-yellow/70", "bg-gruvbox-green/70"];

const Navbar = ({ theme, onToggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            {/* desktop */}
            <div className="hidden md:flex fixed top-0 left-4 justify-center py-4 z-40">
                <div className="nav-surface flex items-center gap-1 rounded-full border border-gruvbox-bg3/70 bg-gruvbox-bg0/90 px-2 py-2 backdrop-blur-[10px]">
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
                                className="font-mono text-xs lg:text-sm text-gruvbox-fg4 hover:text-gruvbox-orange transition-colors px-3 py-1.5 rounded-full hover:bg-gruvbox-bg2/60"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="ml-1 font-mono text-xs lg:text-sm text-gruvbox-yellow border border-gruvbox-orange/30 bg-gruvbox-orange/10 hover:bg-gruvbox-orange/20 hover:border-gruvbox-orange/50 transition-colors px-4 py-1.5 rounded-full"
                    >
                        ~/contact
                    </a>
                </div>
            </div>

            <button
                type="button"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                aria-pressed={theme === "light"}
                className="fixed top-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-gruvbox-bg3/70 bg-gruvbox-bg1/90 px-3 py-2 font-mono text-xs text-gruvbox-fg1 shadow-lg backdrop-blur transition-colors hover:border-gruvbox-orange/60 hover:text-gruvbox-orange"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    {theme === "dark" ? (
                        <>
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                        </>
                    ) : (
                        <path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z" />
                    )}
                </svg>
                
            </button>

            {/* mobile trigger */}
            <div className="md:hidden fixed top-4 left-4 z-40">
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                    className={`nav-surface rounded-lg border border-gruvbox-bg3/70 bg-gruvbox-bg0/90 p-2.5 text-gruvbox-orange backdrop-blur-[10px] transition-opacity ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
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
                <div className="md:hidden fixed top-4 left-4 right-4 z-50 rounded-2xl border border-gruvbox-bg3/70 bg-gruvbox-bg0/95 backdrop-blur-[10px] shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gruvbox-bg3/70">
                        {dotColors.map((c, i) => (
                            <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                        ))}
                        <span className="ml-3 font-mono text-xs text-gruvbox-gray truncate">
                            menu.sh
                        </span>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="ml-auto text-gruvbox-gray hover:text-gruvbox-orange transition-colors"
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
                                className="font-mono text-base text-gruvbox-fg1 hover:text-gruvbox-orange transition-colors py-2"
                            >
                                <span className="text-gruvbox-orange/80">cd</span> {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
