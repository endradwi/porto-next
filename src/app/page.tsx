'use client'
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Skills from "./components/Skills";
import ExperienseJob from "./components/ExperienseJob";
// import Lanyard from "./components/Band";

export default function Home() {
  useEffect(()=>{
    AOS.init();
  }, [])

  return (
    <>
      <Navbar />
      {/* <Lanyard/> */}
      <Introduction />
      <Skills/>
      <article id='about' className="px-28 flex items-center justify-around py-5 ">
        <span className="text-6xl font-bold flex justify-center items-center">About Me</span>
        <p className="max-w-6xl text-xl/8 text-justify bg-gray-400 rounded-2xl p-10 shadow-blue-950 shadow-2xl">
          I am a Frontend Developer with experience in building scalable,
          responsive, and user-friendly web applications. Proficient in modern
          frontend technologies such as React.js, JavaScript, and Tailwind CSS,
          I have a strong foundation in creating intuitive user interfaces and
          seamless user experiences. I am also skilled in integrating frontend
          applications with backend services and databases. With a passion for
          continuous learning and innovation, I am eager to contribute to
          dynamic teams and deliver high-quality solutions that meet both user
          and business needs.
        </p>
      </article>
      <ExperienseJob/>
      <Project />
      
    </>
  );
}
