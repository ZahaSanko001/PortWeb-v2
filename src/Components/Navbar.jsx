import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import  gsap  from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Navbar = () => {

    useGSAP(() => {
    const navTween = gsap.timeline({
        scrollTrigger: {
            trigger: 'nav',
            start: "bottom top",
        }
    });

    navTween.fromTo('nav', { backgroundColor: "transparent" }, 
      { 
        backgroundColor: "#00000050", 
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut"
      }
    );

    });

    return(
        <nav id="nav" className="fixed top-0 left-0 right-0 flex flex-center justify-around m-2">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <button className="bg-amber-500 px-2 rounded">Contact</button>
        </nav>
    )
};

export default Navbar;