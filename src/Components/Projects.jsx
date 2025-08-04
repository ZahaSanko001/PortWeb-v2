import React from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);



const Projects = () => {
    
    const projectData = [
        {
            id: 1,
            icon: "masks/6.png",
            title: "proj1",
            text: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            icon: <img src="masks/7.png" alt="" />,
            title: "proj2",
            text: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            icon: <img src="masks/8.png" alt="" />,
            title: "proj3",
            text: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card-wrapper",
                start: "top top",
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
        <>
            <div className="h-screen flex flex-col gap-5 md:gap-12 items-center pt-16 md:mt-12  rounded-4xl md:rounded-t-[6rem]">
                
                <h1 className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r md:bg-gradient-to-t from-amber-500 via-amber-300 to-amber-200 md:from-white md:via-gray-300 md:to-gray-500">Projects</h1>
                <div className="card-wrapper min-h-screen w-full md:w-[90%] p-8 md:px-16 rounded-t-[6rem] overflow-hidden bg-gradient-to-b from-blue-200 via-gray-800 to-black">
                    {projectData.map((card) => {
                        return (
                            <div className="card p-6 border-b border-white/25 overflow-hidden" key={card.id}>
                                <div className="flex gap-4 items-center h-32">
                                    <h1 className="text-lg md:text-xl -translate-y-4 opacity-80">{card.id}</h1>
                                    <h1 className="text-lg md:text-3xl">{card.title}</h1>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <p className="w-full md:w-[450px] opacity-70">{card.text}</p>
                                    <div className="w-28 h-28 md:w-56 md:h-56">
                                        <img className="h-full w-full object-cover" src="{card.icon}" alt="" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Projects;