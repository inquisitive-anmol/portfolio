// import { easeInOut, motion } from "framer-motion";
// import React from "react";
// import SecHeading from "../ui/SecHeading";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// const About = () => {
//   const [visible, setVisible] = React.useState(-1);

//   const handleOnClick = () => {
//     setVisible(!visible);
//   };
//   const initial = { height: "3.5rem" };
//   const animate = { height: "12rem" };
//   return (
//     <section
//       className="bg-red-600 min-h-screen flex flex-col gap-3 p-3 sm:p-4 md:px-6 lg:p-8 items-center sm:items-start"
//       id="about"
//     >
//       <SecHeading text="who am I!" />
//       <div className="bg-amber-300 w-full flex flex-col sm:flex-row-reverse gap-3 p-2 lg:py-4">
//         <div className="w-full sm:w-[40%] h-[70vmax] bg-pink-600 rounded-lg">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="w-full h-full rounded-lg overflow-hidden"
//           >
//             <img
//               src="https://res.cloudinary.com/dqhhryg7n/image/upload/v1744824614/WhatsApp_Image_2025-04-16_at_22.54.16_138d98f9_ckobsw.jpg"
//               alt="face"
//               className="w-full h-full object-cover object-center rounded-lg"
//             />
//           </motion.div>
//         </div>
//         <div className="sm:w-[60%] w-full flex flex-col gap-3 sm:gap-4">
//           <p className="text-left text-wrap">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Perspiciatis suscipit fugiat vero atque amet eveniet ipsam enim,
//             tempore ea distinctio sed cum at debitis soluta quasi aspernatur
//             quia consectetur tempora quod eligendi magnam! Atque? Lorem ipsum,
//             dolor sit amet consectetur adipisicing elit. Laborum, laboriosam,
//             unde voluptatibus aliquam quis expedita totam iusto dignissimos
//             commodi provident sint earum aspernatur.
//           </p>
//           <div className="bg-slate-500">
//             {[
//               "Frontend Development",
//               "Backend Development",
//               "React Native Dev.",
//               "Android Dev.",
//               "Cross Plateform Dev.",
//             ].map((item, index) => (
//               <motion.div
//                 initial={initial}
//                 animate={visible === index ? animate : initial}
//                 transition={{ duration: 1, ease: easeInOut }}
//                 className="flex flex-col border border-pink-500 h-12 overflow-hidden"
//               >
//                 <div
//                   onClick={() => setVisible(index)}
//                   className="flex justify-between items-center w-full h-fit bg-teal-400 px-3 py-4"
//                 >
//                   <p key={index}>{item}</p>
//                   <p>{visible == index ?  <RemoveIcon /> : <AddIcon />}</p>
//                 </div>
//                 <div className="px-3">content</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, Terminal, GitBranch } from 'lucide-react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL']
    },
    {
      category: 'Backend Development',
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'WebSocket', 'Microservices']
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Firebase']
    },
    {
      category: 'DevOps & Tools',
      icon: <Terminal className="w-6 h-6 text-gray-600 dark:text-gray-400" />,
      items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux', 'Nginx']
    },
    {
      category: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      items: ['JavaScript', 'TypeScript', 'Python', 'Kotlin', 'Java', 'SQL']
    },
    {
      category: 'Version Control & Collaboration',
      icon: <GitBranch className="w-6 h-6 text-red-600 dark:text-red-400" />,
      items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Confluence', 'Agile']
    }
  ];

  const experiences = [
    {
      title: 'Full Stack Developer(Native App Developer)',
      company: 'Vize Consultancy',
      period: '2024 - Present',
      description: 'Developing and maintaining their website as well as Native App with modern web technologies.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Shoocart Pvt. Ltd.',
      period: '2024',
      description: 'Developed and maintained multiple client projects using modern web technologies.'
    },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Creative Web Agency',
    //   period: '2016 - 2018',
    //   description: 'Created responsive and interactive user interfaces for various client websites.'
    // }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate full-stack developer with over 1 years of experience in building
            modern web applications. I specialize in creating scalable, user-friendly solutions
            that solve real-world problems.
          </motion.p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        title="Skills & Expertise"
        subtitle="A comprehensive overview of my technical skills and areas of expertise"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} hoverable className="h-full">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="text-sm px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        title="Professional Experience"
        subtitle="My journey in the tech industry"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className={`mb-6 ${index !== experiences.length - 1 ? 'border-l-4 border-teal-600' : ''}`}
            >
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                  {experience.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {experience.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {experience.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education & Certifications */}
      <Section
        title="Education & Certifications"
        subtitle="Academic background and professional certifications"
      >
        <div className="max-w-3xl mx-auto">
          <Card className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Bachelor of Computer Application
            </h3>
            <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
              GLA University, Mathura
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              2023 - present
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Focused on software engineering, algorithms, and web development.
            </p>
          </Card>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                AWS Certified Solutions Architect
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Amazon Web Services
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Professional Scrum Master I
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Scrum.org
              </p>
            </Card>
          </div> */}
        </div>
      </Section>
    </>
  );
};

export default About;