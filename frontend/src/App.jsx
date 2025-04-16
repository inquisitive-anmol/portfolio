import React from "react";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";
import Hero from "./components/Hero/Hero";
import SocialIcons from "./components/SocialIcons";
import Header from "./components/Header/Header";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from "react-router-dom";
import Section2 from "./components/Section2";
import MenuLinks from "./components/Header/MenuLinks";
import TextReveal from "./ui/TextReveal";

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
          <Route path="/about" element={<Section2 />} />
          <Route path="/projects" element={<Section2 />} />
          <Route path="/contact" element={<Section2 />} />
          <Route path="/blog" element={<Section2 />} />
          <Route path="/resume" element={<Section2 />} />
          <Route path="/services" element={<Section2 />} />
          <Route path="/testimonials" element={<Section2 />} />
        </Routes>
        <div>
          <MenuLinks />
        </div>
      </div>
    </>
  );
};

export default App;
