"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
        degree: "Bootcamp Fullstack Web Developer & Golang",
        school: "Koda Academy",
        location: "Bogor, Indonesia",
        period: "2024 - 2025",
        courses: ["HTML", "CSS", "Javascript", "React", "Redux", "Golang", "Redis",  "PostgreSQL", "Docker", "Git", "Figma", "Trello"],
        year: "2025",
        color: "bg-gradient-to-b from-amber-600 to-orange-500"
      },
    {
      degree: "Bachelor of Computer Science",
      school: "Nusa Mandiri University",
      location: "Jakarta, Indonesia",
      period: "2018 - 2023",
      gpa: "3.21/4.0",
      year: "2023",
      color: "bg-gradient-to-b from-amber-600 to-orange-500"
    },
    {
      degree: "Islamic Teacher Training College",
      school: "Darussalam Islamic Boarding School",
      location: "Ponorogo, Indonesia",
      period: "2011 - 2017",
      year: "2017",
      color: "bg-gradient-to-b from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FBE4D6' }}>
      {/* Background Light Rays */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ACADEMIC MILESTONE
          </h2>
          <div className="w-24 h-1 mx-auto mb-4" style={{ backgroundColor: '#261FB3' }}></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full" style={{ background: 'linear-gradient(to bottom, #261FB3, #161179, #0C0950)' }}></div>
          
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree + edu.school}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:justify-start gap-4 md:ml-10' : 'md:justify-end gap-8'
              }`}>
                {/* Timeline Node */}
                <div className="relative z-10 ">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg`} 
                    style={{ backgroundColor: index === 0 ? '#261FB3' : '#161179' }}>
                    {edu.year.slice(-2)}
                  </div>
                  {/* Connecting line to content */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 hidden md:block left-full`} style={{ backgroundColor: '#0C0950' }}></div>
                </div>

                {/* Content Card */}
                <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-sm md:max-w-md border border-gray-100 relative ${
                  index % 2 === 0 ? 'md:ml-4' : 'md:mr-12'
                }`}>
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 font-semibold mb-2" style={{ color: '#261FB3' }}>
                      <BookOpen className="w-4 h-4" />
                      {edu.school}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  {/* GPA Badge */}
                  {edu.gpa && <div className="mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#161179' }}>
                      GPA: {edu.gpa}
                    </span>
                  </div>}

                  

                  {/* Key Courses */}
                  {edu.courses && <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" style={{ color: '#261FB3' }} />
                      Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses?.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 rounded text-xs font-medium text-white"
                          style={{ backgroundColor: '#0C0950' }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 