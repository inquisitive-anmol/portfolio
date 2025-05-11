
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
    <div id="skills" className="w-full overflow-hidden py-10 mt-8 lg:mt-20 opacity-80">
      {/* first */}
      <motion.div
        className="flex space-x-4 whitespace-nowrap h-18"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...tech, ...tech, ...tech, ...tech].map((item, index) => (
          <span
            key={index}
            className="text-gradient text-3xl md:text-5xl font-normal flex items-center justify-center gap-1"
          >
            <div className="w-3 h-3 rounded-full bg-white"></div>{item}
          </span>
        ))}
      </motion.div>
      {/* second */}
      <motion.div
        className="flex space-x-4 whitespace-nowrap h-18"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...tech, ...tech, ...tech, ...tech].map((item, index) => (
          <span
            key={index}
            className="text-gradient text-3xl md:text-5xl font-normal flex items-center justify-center gap-1"
          >
            <div className="w-3 h-3 rounded-full bg-white"></div>{item}
          </span>
        ))}
      </motion.div>
      {/* third */}
      {/* <motion.div
        className="flex space-x-4 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...tech, ...tech, ...tech, ...tech].map((item, index) => (
          <span
            key={index}
            className="text-white text-2xl md:text-4xl font-normal flex items-center justify-center gap-1"
          >
            <div className="w-3 h-3 rounded-full bg-white"></div>{item}
          </span>
        ))}
      </motion.div> */}
    </div>
  );
};

export default Skills;
