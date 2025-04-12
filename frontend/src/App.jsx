import React from "react";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";
import Hero from "./components/Hero/Hero";
import Section2 from "./components/section2/Section2";
import SocialIcons from "./components/SocialIcons";
import Header from "./components/Header/Header";

const App = () => {
  const scrollRef = useLocomotiveScroll();
  return (
    <>
      <SocialIcons />
      <div ref={scrollRef} data-scroll-container className="w-full">
        <div data-scroll-section>
          <Header />
        </div>
        <div data-scroll-section>
          <Hero />
        </div>
        <div data-scroll-section>
          <Section2 />
        </div>
        <div data-scroll-section>
          <Section2 />
        </div>
        <div data-scroll-section>
          <Section2 />
        </div>
      </div>
    </>
  );
};

export default App;
