import React, {useRef} from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const About = () => {
    const texth = useRef();
    const leftImg = useRef();
    const rightImg = useRef();
    const leftImgb = useRef();
    const rightImgb = useRef();
    const contentRef = useRef();

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
        gsap.from(leftImg.current, {
            x: -200, // from left off-screen
            opacity: 0,
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                end: "30% 50%",
                scrub: true,
            }
        });
        gsap.from(rightImg.current, {
            x: 200, // from right off-screen
            opacity: 0,
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                end: "30% 50%",
                scrub: true,
            }
        });
        gsap.from(leftImgb.current, {
            x: -200, // from left off-screen
            opacity: 0,
            scrollTrigger: {
                trigger: contentRef.current,
                start: "50% bottom",
                end: "bottom bottom",
                scrub: true,
            }
        });
        gsap.from(rightImgb.current, {
            x: 200, // from right off-screen
            opacity: 0,
            scrollTrigger: {
                trigger: contentRef.current,
                start: "50% bottom",
                end: "bottom bottom",
                scrub: true,
            }
        });
    }, []);



    return (
    <section id="about">
       <div className="h-screen mb-20 flex flex-row items-center justify-between relative">
            <div className="hidden md:flex md:flex-col md:space-y-40">
                <img src="masks/12.png" alt="" className="h-64 w-64 object-contain" ref={leftImg}/>
                <img src="masks/hero-left-leaf.png" alt="" className="h-64 w-64 object-contain" ref={leftImgb}/>
            </div>
            
            <div ref={contentRef} className="flex flex-col gap-2 md:gap-[6rem] items-center h-full">
                <h1 ref={texth} className="border-white text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r md:bg-gradient-to-t from-amber-500 via-amber-300 to-amber-200 md:from-white md:via-gray-300 md:to-gray-500"  >ABOUT ME</h1>
                <ul className="md:block gap-2 md:space-y-4">
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> Hello! I'm Raiyan or Ryan </span> </li>
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> I'm a compSci. student at <a className="text-amber-400" href="https://cse.stamforduniversity.edu.bd/"> Stamford University </a> </span> </li>
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> I've worked on real SaaS products for various clients </span></li>
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> I like dabbling in different techs but mostly focusing on backend development </span></li>
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> I've made many projects with good System design, Software Architecture 'SOLID' code practices </span></li>
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> Currently working part-time at <a className="text-amber-400" href="https://californiumcore.com"> Californium Core </a> </span></li>
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> I've worked with many techs such as Spring Boot, ExpressJS, ASP Net Core, React </span></li>
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> Currently working mostly on .NET Projects </span></li>
                    <li className="flex items-center gap-1 text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> <span> I'm always learning and imporving, keeping up with industry practices and the latest trends </span></li>
                </ul>
{/*                 <a href="#contact">
                    <button className="md:block relative px-8 py-3 bg-gradient-to-t border-2 md:border-3 md:border-gray-900 border-amber-900 md:hover:border-blue-200 md:from-blue-300 md:via-gray-700 md:to-blue-300 from-amber-300 via-amber-700 to-amber-300 text-white rounded-4xl overflow-hidden group cursor-pointer">
                        <span className="absolute inset-0 bg-white opacity-50 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-500"></span>
                        <span className="relative z-10">Contact Me</span>
                    </button>
                </a> */}
                
            </div>
            <div className="hidden md:flex md:flex-col md:space-y-40" >
                <img src="masks/10.png" alt="" className="h-64 w-64 object-contain" ref={rightImg}/>
                <img src="masks/hero-right-leaf.png" alt="" className="h-64 w-64 object-contain" ref={rightImgb}/>
            </div>
       </div>
    </section>
    );
}

export default About;