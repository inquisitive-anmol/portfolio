import React from "react";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";
import Hero from "./components/Hero/Hero";
import SocialIcons from "./components/SocialIcons";
import Header from "./components/Header/Header";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import ContactForm from "./components/Contact/ContactForm";

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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

      </div>
    </>
  );
};

export default App;
