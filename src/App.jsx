import React  from "react";
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Hero2 from './Components/Hero2';
import Carousel from "./Components/Carousel";
import Carousel2 from "./Components/Carousel2";
import About from "./Components/About";
import About2 from "./Components/About2";
import Projects from "./Components/Projects";
import Projects2 from "./Components/Projects2";
import Experience from "./Components/Experience";
import Experience2 from "./Components/Experience2";
import Contact from "./Components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
    <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
            backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
        }}
    />
      <Navbar/>
      <Hero2/>
      <Carousel2/>
      <Projects2/>
      <Experience2/>
      <About2/>
      <Contact/>
    </main>
  )
}

export default App;
