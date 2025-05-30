import React from "react";
import AnimatedHeading from "../../ui/AnimatedHeading";
import AnimatedButton from "../../ui/AnimatedButton";
import { motion } from "framer-motion";
import MenuLinks from "./MenuLinks";

const Header = () => {
  const [click, setClick] = React.useState(false);
  const handleOnClick = (index) => {
    // Handle button click event here
    index === 0 ? setClick(false) : setClick(true); // Updated to setClick(true) for index 1
  };

  const handleClickOnLink = () => {
    setClick(false);
  };

  const innerWidth = window.innerWidth;
  const width = innerWidth > 460 ? "450px" : "370px";
  const initial = { width: 0, height: 0, position: "absolute" };
  const animate = { width: width, height: "700px", position: "absolute" };

  return (
    <div className="w-full relative min-h-20 p-4 md:px-6 lg:px-8 lg:py-6 flex items-center justify-between">
      <div className="w-full h-auto">
        <AnimatedHeading className="text-4xl xl:text-5xl font-extrabold" />
      </div>
      <motion.div
        initial={initial}
        animate={click ? animate : initial}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute flex items-start justify-end top-0 right-0 sm:top-0 sm:right-0 rounded-xl bg-[#00d4ff]/95 zindex"
      >
        <motion.div
          initial={{ display: "none", opacity: 0 }}
          animate={
            click
              ? { display: "block", opacity: 1 }
              : { display: "none", opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
          className="absolute left-0 top-0 flex flex-col items-center justify-center rounded-lg w-[75%] h-full"
        >
          <MenuLinks handleClickOnLink={handleClickOnLink} />
        </motion.div>
        <motion.div
          initial={{ display: "block", opacity: 1 }}
          animate={
            click
              ? { display: "none", opacity: 0 }
              : { display: "block", opacity: 1 }
          }
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.5 }}
          className="bg-amber-300 top-0 right-0 sm:top-6 sm:right-6 absolute"
        >
          <AnimatedButton
            text="Menu"
            spanClassName="text-white font-medium"
            divClassName={`sm:right-10 sm:top-4 right-14 top-10`}
            className="border-2 border-white py-2 px-3 rounded-full"
            handleOnClick={handleOnClick}
            index={1}
          />
        </motion.div>
        <motion.div
          initial={{ display: "none", opacity: 0 }}
          animate={
            click
              ? { display: "block", opacity: 1 }
              : { display: "none", opacity: 0 }
          }
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.5 }}
        >
          <AnimatedButton
            text="Close"
            spanClassName="text-white font-medium"
            divClassName={`right-14 top-10`}
            className="border-2 border-white py-2 px-3 rounded-full"
            handleOnClick={handleOnClick}
            index={0}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
