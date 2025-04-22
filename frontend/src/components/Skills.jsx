
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const tech = [
    "JavaScript", "Node.js", "Express.js", "MongoDB", "React",
    "Nginx", "VPS Hosting", "Tailwind CSS", "BootStrap", "Vanilla CSS",
    "NextJs", "React Native", "Electron.js", "MySQL", "Java",
    "Python", "TypeScript", "Kotlin", "Git & GitHub"
  ];

  return (
    <div className="w-full overflow-hidden py-10 bg-black mt-8 -rotate-x-12 rotate-y-12">
      {/* first */}
      <motion.div
        className="flex space-x-4 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      >
        {[...tech, ...tech, ...tech, ...tech].map((item, index) => (
          <span
            key={index}
            className="text-white text-4xl md:text-8xl font-normal flex items-center justify-center gap-1"
          >
            <div className="w-3 h-3 rounded-full bg-white"></div>{item}
          </span>
        ))}
      </motion.div>
      {/* second */}
      <motion.div
        className="flex space-x-4 whitespace-nowrap"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      >
        {[...tech, ...tech, ...tech, ...tech].map((item, index) => (
          <span
            key={index}
            className="text-white text-4xl md:text-8xl font-normal flex items-center justify-center gap-1"
          >
            <div className="w-3 h-3 rounded-full bg-white"></div>{item}
          </span>
        ))}
      </motion.div>
      {/* third */}
      <motion.div
        className="flex space-x-4 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      >
        {[...tech, ...tech, ...tech, ...tech].map((item, index) => (
          <span
            key={index}
            className="text-white text-4xl md:text-8xl font-normal flex items-center justify-center gap-1"
          >
            <div className="w-3 h-3 rounded-full bg-white"></div>{item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
