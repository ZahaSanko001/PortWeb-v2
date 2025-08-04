import React, {useRef} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);



const Projects = () => {
    const texth = useRef();
    const contentRef = useRef();
    
    const projectData = [
        {
            id: 1,
            icon: <a href=""><img className="h-full w-full object-cover rounded-2xl" src="Margarita.webp" alt="" /></a>,
            title: "Margarita Ville",
            text: "A concept project for a Margarita Ville style bar (Will deploy soon)"
        },
        {
            id: 2,
            icon: <img className="h-full w-full object-cover rounded-2xl" src="notFound.webp" alt="" />,
            title: "Vigener Cypher",
            text: "A vigener table and cypher generator for encryption and passphase use (Currently building the front)"
        },
        {
            id: 3,
            icon: <img className="h-full w-full object-cover rounded-2xl" src="notFound.webp" alt="" />,
            title: "Concept Website",
            text: "(Currently building the front)"
        },
    ];

    useGSAP(() => {
        gsap.from(texth.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                end: "30% bottom",
                scrub: true,
                stagger: 0.9,
            }
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card-wrapper",
                start: "15% top",
                end: "bottom top",
                pin: true,
                scrub: 1,
                ease: "linear",
            }
        })


        tl.to(".card", {
            height: 130,
            stagger: 0.5,
        })
    })


    return (
        <section id="projects">
            <div ref={contentRef} className="card-wrapper h-[200vh] flex flex-col gap-5 md:gap-12 items-center pt-16 md:mt-12  rounded-t-4xl md:rounded-t-[6rem] ">
                
                <h1 ref={texth} className="text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r md:bg-gradient-to-t from-amber-500 via-amber-300 to-amber-200 md:from-white md:via-gray-300 md:to-gray-500">Projects</h1>
                <div className="min-h-screen w-full md:w-[90%] md:px-16 rounded-4xl md:rounded-[6rem] overflow-hidden border-2 border-blue-200/30 bg-gradient-to-b md:from-black md:via-blue-300 md:to-black from-black via-amber-500 to-black">
                    {projectData.map((card) => {
                        return (
                            <div className="card p-6 border-b rounded-4xl border-white/25 overflow-hidden" key={card.id}>
                                <div className="flex gap-4 items-center h-32">
                                    <h1 className="text-lg md:text-xl -translate-y-4 opacity-80">{card.id}</h1>
                                    <h1 className="text-lg md:text-3xl">{card.title}</h1>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <p className="w-full md:w-[450px] opacity-70">{card.text}</p>
                                    <div className="w-28 h-28 md:w-56 md:h-56">
                                    {card.icon}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;