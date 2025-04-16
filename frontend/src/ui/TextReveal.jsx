import { easeInOut, motion } from "framer-motion";
import React from "react";

const TextReveal = ({ text = "Hover Me!" }) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      className="relative w-36 h-12 overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative w-full h-full top-0 left-0">
        <motion.p
          initial={{ opacity: 1, y: "0%" }}
          animate={
            isHover ? { opacity: 0, y: "-100%" } : { opacity: 1, y: "0%" }
          }
          transition={{ duration: 0.2, ease: easeInOut }}
          className=" absolute top-0 left-0 w-full text-left"
        >
          {text}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          animate={
            isHover ? { opacity: 1, y: "0%" } : { opacity: 0, y: "100%" }
          }
          transition={{ duration: 0.2, ease: easeInOut }}
          className=" absolute top-0 left-0 w-full text-left"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default TextReveal;
