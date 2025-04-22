import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  return (
    <section
      className="mt-10 lg:mt-30 min-h-screen p-5 md:px-8 lg:px-16 flex flex-col items-start space-y-4"
      id="projects"
    >
      <h2 className="text-3xl lg:text-6xl font-semibold">ProjectS.</h2>
      <div className="cards grid sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center">
        {
          [1, 2, 3, 5, 6].map((item, index) => (
            <div key={index} className="card rounded-2xl p-4 w-full h-[60dvh] bg-gray-900 flex flex-col space-y-3">
              <img
                src="/prj1.png"
                alt=""
                className="object-center object-cover w-full h-[32dvh] rounded-xl"
              />
              <div className="text-white flex flex-col justify-between items-start w-full h-[36%]">
                <div>
                  <h2 className="text-lg font-medium">Ochi website</h2>
                  <p className="text-white/80 text-wrap">
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.{" "}
                  </p>
                </div>
                <div className="w-full flex items-center justify-between text-lg">
                  <p className="text-lg">Project 01</p>{" "}
                  <a className="" href="#">
                    <span>visit</span> <OpenInNewIcon fontSize="small" />
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Projects;
