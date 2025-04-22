import { easeInOut, motion } from "framer-motion";
import React from "react";
import SecHeading from "../ui/SecHeading";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const About = () => {
  const [visible, setVisible] = React.useState(-1);

  const handleOnClick = () => {
    setVisible(!visible);
  };
  const initial = { height: "3.5rem" };
  const animate = { height: "12rem" };
  return (
    <section
      className="bg-red-600 min-h-screen flex flex-col gap-3 p-3 sm:p-4 md:px-6 lg:p-8 items-center sm:items-start"
      id="about"
    >
      <SecHeading text="who am I!" />
      <div className="bg-amber-300 w-full flex flex-col sm:flex-row-reverse gap-3 p-2 lg:py-4">
        <div className="w-full sm:w-[40%] h-[70vmax] bg-pink-600 rounded-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full rounded-lg overflow-hidden"
          >
            <img
              src="https://res.cloudinary.com/dqhhryg7n/image/upload/v1744824614/WhatsApp_Image_2025-04-16_at_22.54.16_138d98f9_ckobsw.jpg"
              alt="face"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </motion.div>
        </div>
        <div className="sm:w-[60%] w-full flex flex-col gap-3 sm:gap-4">
          <p className="text-left text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis suscipit fugiat vero atque amet eveniet ipsam enim,
            tempore ea distinctio sed cum at debitis soluta quasi aspernatur
            quia consectetur tempora quod eligendi magnam! Atque? Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Laborum, laboriosam,
            unde voluptatibus aliquam quis expedita totam iusto dignissimos
            commodi provident sint earum aspernatur.
          </p>
          <div className="bg-slate-500">
            {[
              "Frontend Development",
              "Backend Development",
              "React Native Dev.",
              "Android Dev.",
              "Cross Plateform Dev.",
            ].map((item, index) => (
              <motion.div
                initial={initial}
                animate={visible === index ? animate : initial}
                transition={{ duration: 1, ease: easeInOut }}
                className="flex flex-col border border-pink-500 h-12 overflow-hidden"
              >
                <div
                  onClick={() => setVisible(index)}
                  className="flex justify-between items-center w-full h-fit bg-teal-400 px-3 py-4"
                >
                  <p key={index}>{item}</p>
                  <p>{visible == index ?  <RemoveIcon /> : <AddIcon />}</p>
                </div>
                <div className="px-3">content</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
