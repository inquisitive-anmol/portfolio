import React from "react";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";
import Hero from "./components/Hero/Hero";
import Section2 from "./components/section2/Section2";
import SocialIcons from "./components/SocialIcons";
import Header from "./components/Header/Header";
import LocomotiveScroll from "locomotive-scroll";

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
