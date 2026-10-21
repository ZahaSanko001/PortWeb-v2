import React, { useEffect, useState } from "react";
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
  const [hasThemePreference, setHasThemePreference] = useState(() => {
    try { return localStorage.getItem("portfolio-theme-preference") !== null; }
    catch { return false; }
  });
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme-preference");
      if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    } catch { /* storage may be unavailable */ }
    return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    const systemTheme = window.matchMedia?.("(prefers-color-scheme: light)");
    if (!systemTheme || hasThemePreference) return;

    const syncTheme = (event) => setTheme(event.matches ? "light" : "dark");
    systemTheme.addEventListener("change", syncTheme);
    return () => systemTheme.removeEventListener("change", syncTheme);
  }, [hasThemePreference]);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === "dark" ? "light" : "dark";
      try { localStorage.setItem("portfolio-theme-preference", nextTheme); }
      catch { /* storage may be unavailable */ }
      return nextTheme;
    });
    setHasThemePreference(true);
  };

  return (
    <main data-theme={theme}>
      <AsciiDonutBackground/>
      <Navbar2 theme={theme} onToggleTheme={toggleTheme}/>
      <Hero_gruv theme={theme}/>
      <Carousel3_1/>
      <Projects_gruv/>
      <Experience2/>
      <About2/>
      <Contact2/>
    </main>
  )
}

export default App;
