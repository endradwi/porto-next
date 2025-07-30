"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Galaxy from "./ui/Galaxy";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative w-full h-screen flex items-center justify-center overflow-hidden"
>
      <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.2}
        glowIntensity={0.3}
        saturation={0}
        hueShift={0}
        speed={0.8}
        twinkleIntensity={0.2}
        rotationSpeed={0.05}
        className="absolute z-10 w-full h-full bg-cover"
      />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-64 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-2"
            >
              Hi, I&apos;m{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Endra Dwi Jamaludin
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    "Software Developer",
                    1000,
                    "Front-end Developer",
                    1000,
                    "Back-end Developer",
                    1000,
                    "Fullstack Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-[#1C82AD] font-semibold text-xl md:text-2xl lg:text-5xl"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8 border-2 border-[#261FB3] bg-[#00337C] text-center text-white px-8 py-3 rounded-full font-semibold hover:bg-none hover:text-white transition-all duration-200"
            >
                <a href="/assets/CV Endra.pdf" download>
                    Download Resume
                </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-between"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#00337C] flex-1 text-center bg-[#00337C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-none hover:text-white transition-all duration-200"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#00337C] flex-1 text-center text-white px-8 py-3 rounded-lg font-semibold hover:bg-gradient-to-l from-[#161179] to-[#261FB3] hover:text-white transition-all duration-200"
              >
                About Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#261FB3] shadow-2xl">
                <Image 
                  src="/assets/profile.png" 
                  alt="Endra Dwi Jamaludin" 
                  width={384} 
                  height={384} 
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
