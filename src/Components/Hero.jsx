import React,  { useRef, useState }  from "react";

const Hero = () => {
    // Parallax effect for image
    const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // going -1 to 1, gotta remember for future stuff
        const nx = (x / rect.width) * 2 - 1;
        const ny = (y / rect.height) * 2 - 1;
        // max px
        const maxMoveX = 15;
        const maxMoveY = 5;
        setImgPos({ x: nx * maxMoveX, y: ny * maxMoveY });
    };

    const handleMouseLeave = () => {
        setImgPos({ x: 0, y: 0 });
    };

    return(
        <section id="hero" className="h-screen mt-20">
            <div className="relative flex flex-col gap-2 md:gap-0 justify-center items-center mx-16" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <h1 className="text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r md:bg-gradient-to-t from-amber-500 via-amber-300 to-amber-200 md:from-white md:via-gray-300 md:to-gray-500">Hi! I'm Ryan</h1>

                <img src="pfp.webp" alt="" className="md:absolute w-40 h-40 md:w-120 md:h-120 top-24 rounded-full shadow-lg border-4 border-amber-300 md:border-gray-400" style={{
                    transform: `translate(${imgPos.x}px, ${imgPos.y}px)`,
                    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                }}/>

                <div className="md:absolute w-full flex flex-col md:flex-row justify-between items-center top-60 mx-10">
                    <div>
                        <p className="hidden md:block w-sm text-lg text-transparent bg-clip-text bg-gradient-to-t from-gray-200 via-gray-300 to-gray-400">A SOFTWARE DEVELOPER PASSIONATE ABOUT CRAFTING BOLD AND MEMORABLE PROJECTS WORKING WITH NEW TECH EVERYDAY</p>
                        <div className="flex p-4 gap-4 ">
                            <a className="hover:text-blue-200" href="https://x.com/raiyan_k"><svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></a>

                            <a className="hover:text-blue-200" href="https://github.com/ZahaSanko001"><svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></a>

                            <a className="hover:text-blue-200" href="https://www.linkedin.com/in/raiyan-karim-226254296"><svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg></a>
                        </div>
                    </div>
                    
                    <a href="#contact">
                        <button className="hidden md:block relative px-8 py-3 bg-gradient-to-t border-[3px] border-gray-900 hover:border-blue-200 from-blue-300 via-gray-700 to-blue-300 text-white rounded-4xl overflow-hidden group cursor-pointer hover:-rotate-6 duration-300">
                            <span className="absolute inset-0 bg-white opacity-50 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-500"></span>
                            <span className="relative z-10">GET IN TOUCH</span>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;