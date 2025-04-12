import React from "react";
import { motion } from "framer-motion";

const Text = () => {
  const [hover, setHover] = React.useState(false);
  const text = "Let's talk!";

  const letterVariantsUpFromNormal = {
    normal: { opacity: 1, y: "0" }, // Start above and hidden
    normalRev: { opacity: 0, y: "-100%" }, // Start above and hidden
    fallsIntoPlace: (i) => ({
      opacity: 0,
      y: "-100%", // Falls into place
      transition: {
        delay: i * 0.04, // Delay each letter
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    fallsIntoPlaceRev: (i) => ({
      opacity: 1,
      y: "0", // Falls into place
      transition: {
        delay: i * 0.04, // Delay each letter
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };
  const letterVariantsUpFromDown = {
    normal: { opacity: 0, y: "100%" },
    normalRev: { opacity: 1, y: "0" }, // Start above and hidden
    fallsIntoPlace: (i) => ({
      opacity: 1,
      y: "0", // Falls into place
      transition: {
        delay: i * 0.04, // Delay each letter
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    fallsIntoPlaceRev: (i) => ({
      opacity: 0,
      y: "100%", // Falls into place
      transition: {
        delay: i * 0.04, // Delay each letter
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const handleHoverStart = (event) => {
    setHover(true);
    console.log("Hovering");
  };

  const handleHoverEnd = (event) => {
    setHover(false);
    console.log("Not Hovering");
  };

  return (
    <div className="relative bg-amber-300">
      <motion.h1
        className="absolute w-fit overflow-hidden text-4xl xl:text-5xl font-extrabold top-4 left-4 cursor-pointer flex"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariantsUpFromNormal}
            initial={hover ? "normal" : "normalRev"}
            animate={hover ? "fallsIntoPlace" : "fallsIntoPlaceRev"}
            className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h1
        className="absolute w-fit overflow-hidden text-4xl xl:text-5xl font-extrabold top-4 left-4 cursor-pointer flex"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariantsUpFromDown}
            initial={hover ? "normal" : "normalRev"}
            animate={hover ? "fallsIntoPlace" : "fallsIntoPlaceRev"}
            className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default Text;
