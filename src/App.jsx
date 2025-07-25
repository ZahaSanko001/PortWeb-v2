import React  from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './Components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  )
}

export default App;