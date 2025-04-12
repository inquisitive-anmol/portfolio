import React from "react";
import { motion } from "framer-motion";
import Text from "../Text";

const Section2 = () => {
  return (
    <section
      id="section2"
      // style={{ height: "100vh", width: "100vw", background: "#000" }}
      data-scroll
      data-scroll-speed="1"
    >
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <Text />
        </div>
      </div>
    </section>
  );
};

export default Section2;
