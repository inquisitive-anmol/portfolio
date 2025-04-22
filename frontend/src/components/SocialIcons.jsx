import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "motion/react";
import AnimatedHeading from "../ui/AnimatedHeading";

const SocialIcons = () => {
  return (
    <div className="fixed z-[300] bottom-5 left-5 flex flex-col gap-4 sm:flex sm:gap-2 lg:gap-3.5 sm:flex-row items-center justify-between text-black">
      <motion.a
        className="w-fit h-fit cursor-pointer"
        whileHover={{ scale: 1.3, color: "#00d4ff" }}
        href="https://instagram.com/inquisitive_anmol?igshid=ZDdkNTZiNTM="
        target="_blank"
      >
        <InstagramIcon className="!text-3xl xl:!text-5xl stroke-cyan-400" />
      </motion.a>
      <motion.a
        className="w-fit h-fit cursor-pointer"
        whileHover={{ scale: 1.3, color: "#00d4ff" }}
        href="https://x.com/inquisitive_anm?t=TN36EuGRe0g3fJBQYo4CJA&s=08"
        target="_blank"
      >
        <XIcon className="!text-3xl xl:!text-5xl stroke-cyan-400" />
      </motion.a>
      <motion.a
        className="w-fit h-fit cursor-pointer"
        whileHover={{ scale: 1.3, color: "#00d4ff" }}
        href="https://www.linkedin.com/in/anmol-patel-17a293268/"
        target="_blank"
      >
        <LinkedInIcon className="!text-3xl xl:!text-5xl stroke-cyan-400" />
      </motion.a>
      <motion.a
        className="w-fit h-fit cursor-pointer"
        whileHover={{ scale: 1.3, color: "#00d4ff" }}
        href="https://github.com/inquisitive-anmol"
        target="_blank"
      >
        <GitHubIcon className="!text-3xl xl:!text-5xl stroke-cyan-400" />
      </motion.a>
    </div>
  );
};

export default SocialIcons;
