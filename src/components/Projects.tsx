"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ej = <Image src="/assets/ejourney.png" alt="ej" width={400} height={200} className="w-full h-full object-cover" priority />
  const bidan = <Image src="/assets/bidan.png" alt="bidan" width={400} height={200} className="w-full h-full object-cover" priority />
  const ppay = <Image src="/assets/ppay.png" alt="ppay" width={400} height={200} className="w-full h-full object-cover" priority />
  const tiket = <Image src="/assets/tiket.png" alt="tiket" width={400} height={200} className="w-full h-full object-cover" priority />

  const projects = [
    {
      title: "Modern E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring product catalog, shopping cart, user authentication, and payment integration with Stripe.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Stripe"],
      image: ej,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management Dashboard",
      description: "A comprehensive task management application with drag-and-drop functionality, team collaboration features, and real-time updates using Vue.js and Nest.js.",
      technologies: ["Vue.js", "Nest.js", "WebSockets"],
      image: bidan,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application that provides real-time weather conditions and 7-day forecasts with beautiful animations and geolocation support.",
      technologies: ["React", "OpenWeather API", "Geolocation"],
      image: ppay,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Interactive Portfolio",
      description: "An interactive portfolio website with 3D animations, smooth scrolling, and interactive elements built with Three.js and modern web technologies.",
      technologies: ["Three.js", "React.js", "Framer Motion"],
      image: tiket,
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#FBE4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                {typeof project.image === 'string' ? (
                  <span className="text-6xl">{project.image}</span>
                ) : (
                  project.image
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 