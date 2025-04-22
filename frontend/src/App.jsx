import React from "react";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";
import Hero from "./components/Hero/Hero";
import SocialIcons from "./components/SocialIcons";
import Header from "./components/Header/Header";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

/* Locomotive scroll instance */

const App = () => {
  // const scrollRef = useLocomotiveScroll()
  const scrollRef = React.useRef(null);

  const scroll = new LocomotiveScroll();
  const target = scrollRef.current;

  scroll.scrollTo(target);

  React.useEffect(() => {
    scroll.init();
    return () => scroll.destroy();
  }, [scroll]);

  return (
    <>
      <SocialIcons />
      <div ref={scrollRef} data-scroll-container className="w-full">
        <div data-scroll-section>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blog" element={<Hero />} />
        </Routes>
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
