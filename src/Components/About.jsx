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
       <div className="h-screen mt-2 flex flex-row items-center justify-between relative">
            <div className="hidden md:flex md:flex-col md:space-y-40">
                <img src="masks/12.png" alt="" className="h-64 w-64 object-contain" ref={leftImg}/>
                <img src="masks/9.png" alt="" className="h-64 w-64 object-contain" ref={leftImgb}/>
            </div>
            
            <div ref={contentRef} className="flex flex-col gap-2 md:gap-[6rem] items-center h-full">
                <h1 ref={texth} className="border-white text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r md:bg-gradient-to-t from-amber-500 via-amber-300 to-amber-200 md:from-white md:via-gray-300 md:to-gray-500"  >ABOUT ME</h1>
                <ul className="hidden md:block md:space-y-4">
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> Hello! I'm Raiyan or (Ryan)</li>
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> I'm a compSci. student at Stamford</li>
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> I like dabbling in different techs</li>
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> Been learning about database management systems since early 2025</li>
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> Worked on Express and mySQL projects with the group Team81</li>
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> Currently working on frontend projects</li>
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> Been learning about animations with GSAP and threeJS</li>
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> I've also done a lot of projects with C++ and Python frameworks</li>
                    <li className="flex text-sm"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg> I'm currently working on some Java projects as well</li>
                </ul>
                <p className="text-sm px-2 md:hidden">Hello i'm Raiyan (or Ryan), I'm a CompSci. student at <a className="text-amber-400" href="">Stamford</a>, i've been learning about Database management systems since early 2025 and been working on the backend for projects with the group <a className="text-amber-400" href="">Team81</a>. Currently i'm working on frontend projects and have been exploring animations with threeJS and GSAP. I've also worked on projects with C++ and Python frameworks. Right now i'm working on some JAVA projects. If any of these tech seems useful, make sure to get in touch</p>
                <a href="#contact">
                    <button className="md:block relative px-8 py-3 bg-gradient-to-t border-4 border-gray-900 hover:border-blue-200 from-blue-300 via-gray-700 to-blue-300 text-white rounded-4xl overflow-hidden group cursor-pointer">
                        <span className="absolute inset-0 bg-white opacity-50 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-500"></span>
                        <span className="relative z-10">Contact Me</span>
                    </button>
                </a>
                
            </div>
            <div className="hidden md:flex md:flex-col md:space-y-40" >
                <img src="masks/10.png" alt="" className="h-64 w-64 object-contain" ref={rightImg}/>
                <img src="masks/11.png" alt="" className="h-64 w-64 object-contain" ref={rightImgb}/>
            </div>
       </div>
    </section>
    );
}

export default About;