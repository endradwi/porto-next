"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  const ej = <Image src="/assets/ejourney.png" alt="ej" width={400} height={200} className="w-full h-full object-cover" priority />
  const bidan = <Image src="/assets/bidan.png" alt="bidan" width={400} height={200} className="w-full h-full object-cover" priority />
  const ppay = <Image src="/assets/ppay.png" alt="ppay" width={400} height={200} className="w-full h-full object-cover" priority />
  const tiket = <Image src="/assets/tiket.png" alt="tiket" width={400} height={200} className="w-full h-full object-cover" priority />

  const projects = [
    {
      title: "Modern Learning Menegement System Platform",
      description: "A modern learning management system platform built with Nuxt.js, featuring a user-friendly interface, course management, interactive learning features, and now this platform new build with Next.js. application build by team 3 members and i'm Frontend Developer at this project.",
      technologies: ["Vue.js", "Nuxt.js", "React.js","Next.js", "Tailwind CSS", "Notion", "Figma", "Git"],
      baseTech: ["Vue.js", "Nuxt.js", "Next.js", "React"],
      image: ej,
      liveUrl: "https://ejourney.id",
      githubUrl: "#",
    },
    {
      title: "Registeration System for Klinik Bidan Isti",
      description: "A registeration system for Klinik Bidan Isti, built with Nuxt.js, and Golang, featuring a user-friendly interface, and secure authentication. This application was designed by myself as a fullstack developer.",
      technologies: ["Vue.js", "Nuxt.js","Tailwind CSS", "Golang", "PostgreSQL", "Docker"],
      baseTech: ["Vue.js", "Nuxt.js", "Golang"],
      image: bidan,
      liveUrl: "https://praktekbidanisti.icu",
      githubUrl: "#",
    },
    {
      title: "P-pay E-wallet",
      description: "A p-pay e-wallet application built with React.js, and Golang, featuring a user-friendly interface, and secure authentication, application build by team 5 members and i'm Frontend Developer at this project.",
      technologies: ["React", "Jotai", "Tailwind CSS", "Golang", "PostgreSQL", "Docker", "Git", "GitHub", "Figma", "Trello"],
      baseTech: ["React", "Golang"],
      image: ppay,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "MY Film Tiket",
      description: "A film tiket application built with React.js, and Golang, featuring a user-friendly interface, and secure authentication, application build by team 3 members and i'm Frontend Developer at this project.",
      technologies: ["React.js"],
      baseTech: ["React", "Golang"],
      image: tiket,
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  // Get all unique technologies for filter buttons
  const allBaseTech = ["All", ...Array.from(new Set(projects.flatMap(project => project.baseTech)))].sort();

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === "All") return true;
    return project.baseTech.some(tech => 
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to first page when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#03C988] mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-[#03C988] mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allBaseTech.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => handleFilterChange(tech)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tech
                    ? "bg-[#03C988] text-[#161179] shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="group relative bg-[#1C82AD] rounded-xl shadow-lg  overflow-hidden border border-[#03C988] hover:shadow-xl transition-all duration-300"
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
                <h3 className="text-xl font-bold text-[#13005A] mb-4">
                  {project.title}
                </h3>

                <p className="text-white mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.sort().map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#13005A] text-[#03C988] px-2 py-1 rounded-full border border-[#03C988] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-[#13005A] text-[#03C988] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0C0950] transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 border border-[#03C988] text-[#13005A] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            {/* Previous Button */}
            <motion.button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#FBE4D6] text-[#161179] hover:bg-white"
              }`}
            >
              <ChevronLeft size={16} />
              Previous
            </motion.button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  onClick={() => goToPage(page)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    currentPage === page
                      ? "bg-[#FBE4D6] text-[#161179]"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#FBE4D6] text-[#161179] hover:bg-white"
              }`}
            >
              Next
              <ChevronRight size={16} />
            </motion.button>
          </motion.div>
        )}
        
        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[#FBE4D6] text-lg">
              No projects found for &quot;{activeFilter}&quot;. Try selecting a different filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects; 