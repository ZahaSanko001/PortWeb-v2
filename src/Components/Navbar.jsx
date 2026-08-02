import {React, useState} from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import  gsap  from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
    const navTween = gsap.timeline({
        scrollTrigger: {
            trigger: '#navi',
            start: "bottom top",
        }
    });

    navTween.fromTo('#navi', { backgroundColor: "transparent" }, 
      { 
        backgroundColor: "#00000050", 
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut"
      }
    );

    });

    return(
        <nav>
            <div id="navi" className="hidden md:flex fixed top-0 left-0 right-0 flex-center justify-around py-2 z-10">
                <a href="#hero" className="hover:text-amber-400">Home</a>
                <a href="#about" className="hover:text-amber-400">About</a>
                <a href="#projects" className="hover:text-amber-400">Projects</a>
                <a href="#experience" className="hover:text-amber-400">Experience</a>
                {/* <button className="relative px-4 py-1 bg-gradient-to-r from-yellow-500 to-emerald-500 text-white font-bold rounded-md overflow-hidden group cursor-pointer hover:scale-105 duration-300">
                    <span className="absolute inset-0 bg-white opacity-50 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-500"></span>
                    <span className="relative z-10">Contact</span>
                </button> */}
                <a href="#contact" className="hover:text-amber-400">Contact</a>
            </div>

            {!isOpen && (
                <div id="navi" className="md:hidden fixed top-0 left-0 flex gap-4 px-4 py-2 m-2 w-fit rounded-4xl z-10">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="#FFCA28"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                    </button>
                </div>
            )}
            

            {isOpen && (
            <div
                id="navi"
                className="md:hidden fixed top-4 left-4 z-50 w-54 rounded-2xl border border-amber-400/30 bg-neutral backdrop-blur-md shadow-2xl p-5"
            >
                <div className="flex justify-end">
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-gray-400 hover:text-white transition-colors"
                >
                    ✕
                </button>
                </div>

                <nav className="mt-2 flex flex-col gap-4">
                <a
                    href="#projects"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white hover:text-amber-400 transition-colors"
                >
                    Projects
                </a>

                <a
                    href="#experience"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white hover:text-amber-400 transition-colors"
                >
                    Experience
                </a>

                <a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white hover:text-amber-400 transition-colors"
                >
                    About
                </a>
                </nav>
            </div>
            )}
                    
        </nav>
    )
};

export default Navbar;
