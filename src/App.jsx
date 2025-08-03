import React  from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Projects from "./Components/Projects";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Carousel/>
      <About/>
      <Projects/>
      <div className="h-screen"></div>
    </main>
  )
}

export default App;