import React,  { useRef, useState }  from "react";

const Hero = () => {
    // Parallax effect for image
    const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Normalize to -1 to 1
        const nx = (x / rect.width) * 2 - 1;
        const ny = (y / rect.height) * 2 - 1;
        // Max movement in px
        const maxMoveX = 20;
        const maxMoveY = 10;
        setImgPos({ x: nx * maxMoveX, y: ny * maxMoveY });
    };

    const handleMouseLeave = () => {
        setImgPos({ x: 0, y: 0 });
    };

    return(
        <section className="h-screen mt-20">
            <div className="relative flex flex-col gap-2 md:gap-0 justify-center items-center mx-10">
                <h1 className="text-9xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 md:from-blue-200 md:via-violet-300 md:to-blue-950">Hi! I'm Ryan</h1>

                <img src="pfp.jpg" alt="" className="md:absolute w-40 h-40 md:w-100 md:h-100 top-28 rounded-full shadow-lg border-4 border-amber-600 md:border-violet-300" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
                    transform: `translate(${imgPos.x}px, ${imgPos.y}px)`,
                    transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)'
                }}/>

                <div className="md:absolute w-full flex flex-col md:flex-row justify-between items-center top-60">
                    <p className="hidden md:block w-sm text-2xl">A WEB DEVELOPER PASSIONATE ABOUT CRAFTING BOLD AND MEMORABLE PROJECTS</p>

                    <button className="hidden md:block relative px-6 py-2 bg-gradient-to-tr border-2 border-b-gray-500 from-blue-950 via-violet-900 to-blue-200 text-white font-bold rounded-3xl overflow-hidden group cursor-pointer hover:scale-105 duration-300">
                        <span className="absolute inset-0 bg-white opacity-50 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-500"></span>
                        <span className="relative z-10">CONTACT ME</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;