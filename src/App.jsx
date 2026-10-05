import React  from "react";
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Hero from './Components/Hero';
import Hero2 from './Components/Hero2';
import Hero_gruv from './Components/Hero_gruv';
import Carousel from "./Components/Carousel";
import Carousel2 from "./Components/Carousel2";
import Carousel3 from "./Components/Carousel3";
import Carousel3_1 from "./Components/Carousel3_1";
import About from "./Components/About";
import About2 from "./Components/About2";
import Projects from "./Components/Projects";
import Projects2 from "./Components/Projects2";
import Projects_gruv from "./Components/Projects_gruv";
import Experience from "./Components/Experience";
import Experience2 from "./Components/Experience2";
import Contact from "./Components/Contact";
import Contact2 from "./Components/Contact2";
import AsciiDonutBackground from "./Components/AsciiDonutBackground";

const App = () => {
  return (
    <main>
      <AsciiDonutBackground/>
      <Navbar2/>
      <Hero_gruv/>
      <Carousel3_1/>
      <Projects_gruv/>
      <Experience2/>
      <About2/>
      <Contact2/>
    </main>
  )
}

export default App;
