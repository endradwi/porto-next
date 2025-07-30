"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const skills = [
    {
      name: "ReactJS",
      logo: <FaReact />,
      color: "border border-blue-500 text-blue-500"
    },
    {
      name: "NextJS",
      logo: <SiNextdotjs />,
      color: "border border-black"
    },
    {
      name: "VueJS",
      logo: <FaVuejs />,
      color: "text-green-500 border border-green-500"
    },
    {
      name: "NuxtJS",
      logo: <SiNuxtdotjs />,
      color: "text-green-500 border border-green-500"
    },
    {
      name: "Tailwind CSS",
      logo: <RiTailwindCssFill />,
      color: "text-blue-500 border border-blue-500"
    },
    {
      name: "Redux",
      logo: <SiRedux />,
      color: "border border-purple-500 text-purple-500"
    },
    
    {
      name: "Golang",
      logo: <FaGolang />,
      color: "text-blue-500 border border-blue-500"
    }
  ];

  // Infinite scroll velocity animations
  const x = useTransform(scrollYProgress, [0, 1], [0, -1200]); // Increased for infinite effect
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section id="skills" className="py-52 relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#03C988] mb-6">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-[#03C988] mx-auto mb-4"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Trusted by Several Leading Technologies and Frameworks
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Automatic infinite scroll container */}
          <div className="overflow-hidden">
            <motion.div
              style={{ x, opacity, scale }}
              className="flex gap-8 lg:gap-12 w-max"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Multiple duplicates for infinite scroll effect */}
              {[...skills, ...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 80
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative flex-shrink-0"
                >
                  <div className="bg-white rounded-xl border-b-10 border-b-[#03C988] shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 min-w-[140px]">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {skill.logo}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 