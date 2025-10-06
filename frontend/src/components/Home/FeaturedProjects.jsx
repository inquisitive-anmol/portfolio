import React, { useState } from 'react'
import Card from '../common/Card';
import { ArrowRight, Code, Palette, Server, Monitor, Github, ExternalLink } from 'lucide-react';
import Heading from '../common/Heading';
import AnimatedButton from '../../ui/AnimatedButton';
import { useNavigate } from 'react-router-dom';

const FeaturedProjects = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce solution with product management, cart, and checkout.',
            content: '',
            slug: 'e-commerce-platform',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
            imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            githubUrl: 'https://github.com/inquisitive-anmol/MERNStackEcommerce',
            liveUrl: 'https://shoocart.in',
            featured: true,
            order: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: '1',
            title: 'Vize',
            description: 'Vize connects entrepreneurs with industry experts for 1:1 business advice',
            content: '',
            slug: 'e-commerce-platform',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'TailwindCss'],
            imageUrl: '/prj2.png',
            githubUrl: 'https://github.com',
            liveUrl: 'https://vize.co.in',
            featured: true,
            order: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: '1',
            title: 'Sptify Clone',
            description: 'Spotify Clone that I created as part of my learning journey. It is designed to mimic the popular music streaming app, Spotify.',
            content: '',
            slug: 'Spotify Clone',
            technologies: ['HTML5', 'VANILLA CSS', 'JavaScript'],
            imageUrl: 'https://images.unsplash.com/photo-1643208589896-07b8feb4dffa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            githubUrl: 'https://github.com/inquisitive-anmol/Spotify-clone?tab=readme-ov-file',
            liveUrl: 'https://inquisitive-anmol.github.io/Spotify-clone/',
            featured: true,
            order: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
    ]);

    return (
        <section
            title="About me"
            subtitle="A brief intro about me"
            className="py-10 px-8 mt-10"
        >
            {loading ? (
                <div className="h-64 flex items-center justify-center">
                    <div className="animate-pulse w-full max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2].map((item) => (
                                <div key={item} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64"></div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Heading text="Featured Projects" className="mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {projects?.slice(0, 4).map((project) => (
                            <Card
                                key={project.id}
                                hoverable
                                padding="none"
                                className="overflow-hidden"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-3">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 flex items-center transition-colors"
                                            >
                                                <Github className="w-5 h-5 mr-1" />
                                                <span>Code</span>
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 flex items-center transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5 mr-1" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* <div className="text-center">
                        <Button
                            size="lg"
                            rightIcon={<ArrowRight />}
                            onClick={() => navigate('/projects')}
                        >
                            View All Projects
                        </Button>
                    </div> */}
                    <div className='w-full flex justify-center itemc-center'>
                        <AnimatedButton
                            text="View All Projects"
                            svgTrue={true}
                            className="gap-0.5 px-5 sm:px-6 xl:px-8 py-2.5 sm:py-3 xl:py-4 text-base sm:text-lg xl:text-2xl font-semibold 
                    rounded-full  border border-[#E0E0E0]"
                            divClassName="mt-10 xl:mt-12"
                            spanClassName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
                            handleOnClick={() => navigate("/projects")}
                        />

                    </div>

                </>
            )}
        </section>
    )
}

export default FeaturedProjects
