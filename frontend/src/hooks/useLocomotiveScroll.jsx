import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return scrollRef;
};

export default useLocomotiveScroll;
