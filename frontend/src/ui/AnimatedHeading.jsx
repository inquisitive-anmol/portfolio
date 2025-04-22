import { motion } from "framer-motion";

const AnimatedHeading = ({text="Anmol", className}) => {
  // const text = "Anmol."; // Change this to your name

  const letterVariants = {
    hidden: { opacity: 1, y: "-100%" }, // Start above and hidden
    visible: (i) => ({
      opacity: 1,
      y: "0", // Falls into place
      transition: {
        delay: i * 0.1, // Delay each letter
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <h1 className={`w-fit overflow-hidden ${className}`}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;
