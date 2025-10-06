import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../../ui/AnimatedButton";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      data-scroll
      data-scroll-speed="1"
      className="hero-section w-full relative flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center space-y-4 py-10 px-4 "
      >
        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden xl:w-40 xl:h-40"
        >
          <img
            src="https://res.cloudinary.com/dqhhryg7n/image/upload/v1744824614/WhatsApp_Image_2025-04-16_at_22.54.16_138d98f9_ckobsw.jpg"
            alt="face"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
            },
          }}
          className="text-3xl sm:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text leading-tight mt-3"
        >
          Hello! I'm Anmol.
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-xl sm:text-xl xl:text-3xl font-medium text-gray-300 leading-snug"
        >
          MERN Stack Developer.
        </motion.h2>

        {/* Animated Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-base sm:text-lg xl:text-xl text-gray-400 leading-relaxed max-w-xs sm:max-w-md mt-2"
        >
          Turning Ideas into Scalable Web Solutions with Modern Tech.
        </motion.p>

        {/* Animated CTA Button */}
        <AnimatedButton
          text="Let's talk!"
          svgTrue={true}
          className="gap-0.5 px-5 sm:px-6 xl:px-8 py-2.5 sm:py-3 xl:py-4 text-base sm:text-lg xl:text-2xl font-semibold 
                    rounded-full  border border-[#E0E0E0]"
          divClassName="mt-10 xl:mt-12"
          spanClassName="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent animate-gradient"
          handleOnClick={() => navigate("/contact")}
        />
      </motion.div>
    </div>
  );
};

export default Hero;

