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
            <div id="navi" className="hidden fixed top-0 left-0 right-0 md:flex flex-center justify-around py-2">
                <a href="/home" className="hover:text-amber-200">Home</a>
                <a href="/about" className="hover:text-amber-200">About</a>
                <a href="/projects" className="hover:text-amber-200">Projects</a>
                <button className="bg-amber-500 px-2 rounded hover:bg-amber-300 font-bold">Contact</button>
            </div>

            <div className="md:hidden fixed top-0 left-0 right-0 flex items-center text-white">
                <button
                    className="m-2"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    Menu
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black text-white flex flex-col items-start gap-4 px-4 py-2 mx-3 fixed top-12 border-2 rounded-3xl border-amber-300 w-fit z-40">
                    <a href="/home" className="hover:text-amber-200" onClick={() => setIsOpen(false)}>
                        Home
                    </a>
                    <a href="/about" className="hover:text-amber-200" onClick={() => setIsOpen(false)}>
                        About
                    </a>
                    <a href="/projects" className="hover:text-amber-200" onClick={() => setIsOpen(false)}>
                        Projects
                    </a>
                </div>
            )}
                    
        </nav>
    )
};

export default Navbar;