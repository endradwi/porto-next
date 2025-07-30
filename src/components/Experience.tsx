"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Frontend Developer",
      company: "PT Primeskills Edukasi Indonesia",
      location: "Tanggerang, Indonesia",
      period: "Mar 2025 - Jul 2025  ",
      description: [
        "Develop, maintain, and enhance new features for web-based platforms.",
        "Collaborate with the dev lead, other developers, and the UI/UX team to achieve optimal design implementation.",
        "Design the front-end application schema and develop an effective deployment strategy.",
        "Participate in agile planning, time estimation, and task execution.",
        "Contribute to research and development (R&D) and enhance individual and team knowledge.",
        "Conduct testing, troubleshooting, and performance optimization to ensure application stability and security.",
        "Identify and implement the latest technologies to improve development efficiency, including the use of AI tools."
      ],
      technologies: ["React", "Vue.js","Next.js","Nuxt.js","JavaScript", "TypeScript", "Tailwind CSS", "Postman", "Git", "GitHub", "Figma", "Notion"],
      type: "Full-time",
      year: "2025",
      color: "bg-gradient-to-b from-amber-600 to-orange-500"
    },
    {
      title: "Voting Committee",
      company: "KPUD Kab Bekasi",
      location: "Bekasi, Indonesia",
      period: "Feb 2023 - Jan 2025",
      description: [
        "Create a simple application for quick counts at sub-district/village level using Excel.", 
        "Manage population data for election needs.",
        "Assist in every stage of elections held by the KPUD.", 
        "Carrying out problem solving with the community in making elections at the sub-district/village level a success"
      ],
      technologies: ["Microsoft Excel", "Microsoft Word", "Microsoft Powerpoint"],
      type: "Full-time",
      year: "2023",
      color: "bg-gradient-to-b from-pink-500 to-rose-500"
    },
    {
      title: "Divisi Tresury",
      company: "PT Bank Negara Indonesia (BNI) Tbk",
      location: "Jakarta, Indonesia",
      period: "Mar 2022 - Sep 2022",
      description: [
        "Improving the Website for the needs of compiling ALCO decisions in the Treasury Division.",
        "Responsible for completing the required website and its database.",
        "Update ALCO decisions on the website provided.",
        "Assist in processing daily liquidity reports."
      ],
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "Microsoft Excel", "Microsoft Word", "Microsoft Powerpoint"],
      type: "Internship",
      year: "2022",
      color: "bg-gradient-to-b from-blue-500 to-indigo-500"
    },
    {
    title: "Game Developer (Role: Product Management, Quality Assurance)",
    company: "Agate Academy",
    location: "Jakarta, Indonesia",
    period: "Agu 2021 - Jan 2022",
    description: [
        "Ensure that the game products created can compete in national and international markets.",
        "Conduct market segmentation research for games that needs to be published.",
        "Make presentations to the team on research obtained from trusted sources.",
        "Provide input to the team with comparisons of competing games on the market with the same genre.",
        "Conduct UX experiments on games that will be published and provide input from the experimental results"
        
    ],
    technologies: ["Notion", "Figma", "Qase.io", "Trello"],
    type: "Internship",
    year: "2021",
    color: "bg-gradient-to-b from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="experience" className="py-20  relative overflow-hidden">
      {/* Background Light Rays */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#03C988] mb-6">
            WORK EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-[#03C988] mx-auto mb-4"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            My professional journey through different companies and roles
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-[#1C82AD] rounded-full"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title + experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:justify-start gap-4 md:ml-10' : 'md:justify-end gap-8'
              }`}>
                {/* Timeline Node */}
                <div className="relative z-10 ">
                  <div className={`w-16 h-16 ${experience.color} rounded-full flex items-center justify-center shadow-lg text-white  font-bold text-lg`}>
                    {experience.year.slice(-2)}
                  </div>
                  {/* Connecting line to content */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-white hidden md:block left-full`}></div>
                </div>

                {/* Content Card */}
                <div className={`bg-[#1C82AD] rounded-xl shadow-lg p-6 md:p-8 max-w-sm md:max-w-md border border-[#03C988] relative ${
                  index % 2 === 0 ? 'md:ml-4' : 'md:mr-12'
                }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#13005A] mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#00337C] font-semibold mb-2">
                        <Building2 className="w-4 h-4" />
                        {experience.company}
                      </div>
                    </div>
                    <span className="bg-[#13005A] text-[#03C988] px-3 py-1 rounded-full text-xs font-semibold">
                      {experience.type}
                    </span>
                  </div>

                  {/* Location and Period */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-[#00337C]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#13005A] mb-2 uppercase tracking-wide">
                      Description
                    </h4>
                    <ul className="list-disc list-inside text-white leading-relaxed text-sm">
                      {experience.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-bold text-[#13005A] mb-3 uppercase tracking-wide">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#13005A] text-[#03C988] px-3 py-1 rounded-full text-xs font-medium border border-[#03C988]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 