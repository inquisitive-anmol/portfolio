import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";



const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 01",
      description: 'A full-featured e-commerce solution with product management, cart, and checkout.',
      name: 'E-Commerce Platform',
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      githubUrl: 'https://github.com/inquisitive-anmol/MERNStackEcommerce',
      liveUrl: 'https://shoocart.in',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    },

    {
      id: 2,
      title: 'Project 02',
      name: 'Vize',
      description: 'Vize connects entrepreneurs with industry experts for 1:1 business advice',
      imageUrl: '/prj2.png',
      githubUrl: 'https://github.com',
      liveUrl: 'https://vize.co.in',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'TailwindCss'],
    },
    {
      id: 3,
      title: 'Project 03',
      name: "Spotify Clone",
      description: 'Spotify Clone that I created as part of my learning journey. It is designed to mimic the popular music streaming app, Spotify.', imageUrl: 'https://via.placeholder.com/150',
      technologies: ['HTML5', 'VANILLA CSS', 'JavaScript'],
      imageUrl: 'https://images.unsplash.com/photo-1643208589896-07b8feb4dffa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      githubUrl: 'https://github.com/inquisitive-anmol/Spotify-clone?tab=readme-ov-file',
      liveUrl: 'https://inquisitive-anmol.github.io/Spotify-clone/',
    },

  ]
  return (
    <section
      className="mt-10 lg:mt-30 min-h-screen p-5 md:px-8 lg:px-16 flex flex-col items-start space-y-4"
      id="projects"
    >
      <h2 className="text-3xl lg:text-6xl font-semibold mb-8 w-full text-center">My ProjectS.</h2>
      <div className="cards grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        {
          projects.map((project, index) => (
            <motion.div
              key={index} className="card rounded-2xl p-4 w-full bg-gray-900 flex flex-col space-y-3 transition-all duration-300 hover:-translate-y-1">
              <img
                src={project.imageUrl}
                alt=""
                className="object-center object-cover w-full rounded-xl hover:-scale-[1.1] transition-all duration-500 min-h-[34vh]"
              />
              <div className="text-white flex flex-col justify-between items-start w-full">
                <div>
                  <h2 className="text-lg font-medium">{project.name}</h2>
                  <p className="text-white/80 text-wrap">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-full flex items-center justify-between text-lg">
                  <p className="text-lg">{project.title}</p>{" "}
                  <a className="" href="#">
                    <span>visit</span> <OpenInNewIcon fontSize="small" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
};


export default Projects;
