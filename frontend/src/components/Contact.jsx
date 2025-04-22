import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AnimatedHeading from "../ui/AnimatedHeading";
import HomeIcon from "@mui/icons-material/Home";

const Contact = () => {
  return (
    <section className="p-6 lg:py-10 mt-10 lg:mt-30" id="contact">
      <div className="py-4 flex flex-col items-start lg:items-center justify-between space-y-5 lg:space-y-20">
        <div className="left flex flex-col justify-between items-start space-y-3 ">
          <h1 className="text-3xl lg:text-6xl font-semibold">
            <p className="m-0 p-0">Intrested in talking,</p>
            <p className="m-0 p-0">let's do it.</p>
          </h1>
          {/* <div className="bodyy">form.</div> */}
        </div>
        <div className="w-full lg:items-center flex flex-col items-start justify-between space-y-1">
          <h2 className="text-base lg:text-lg">Get in touch</h2>
          <div className="flex flex-col items-start justify-between space-y-1 lg:space-y-5">
            <a
              href="mailto:anmolxofficial457@gmail.com"
              className="text-xl flex gap-2 items-center "
            >
              <div className="p-1 lg:p-3 rounded-full bg-cyan-500">
                <EmailIcon />
              </div>
              <div className="flex w-full">
                <AnimatedHeading
                  text="anmolxofficial457@gmail.com"
                  className="text-xl font-bold lg:text-2xl"
                />
              </div>
              {/* <span>anmolxofficial457@gmail.com</span> */}
            </a>
            <a
              href="tel:+8001147700"
              className="text-xl flex gap-2 items-center justify-center"
            >
              <div className="p-1 lg:p-3 rounded-full bg-cyan-500">
                <PhoneInTalkIcon />
              </div>
              <div className="flex w-full">
                <AnimatedHeading
                  text="+91 8081147700"
                  className="text-xl lg:text-2xl font-bold"
                />
              </div>
            </a>
            <a
              href="#"
              className="text-xl flex gap-2 items-center justify-center"
            >
              <div className="p-1 lg:p-3 rounded-full bg-cyan-500">
                <HomeIcon />
              </div>
              <div className="flex w-full">
                <AnimatedHeading
                  text="Mathura, Uttar Pradesh, India"
                  className="text-xl lg:text-2xl font-bold"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
