'use client'
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
// import Lanyard from "./components/Band";
import next from "@/app/assets/nextjs.png"
import js from "@/app/assets/js.png"
import react from "@/app/assets/react.png"
import vue from "@/app/assets/vue.png"
import nuxt from "@/app/assets/nuxt.png"
import tailwind from "@/app/assets/tailwind.png"
import golang from "@/app/assets/golang.png"
import docker from "@/app/assets/docker.png"
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  useEffect(()=>{
    AOS.init();
  }, [])
  const images = [
    {src: js.src, alt:"tikets image",},
    {src: react.src, alt:"React Image",},
    {src: next.src, alt:"Next image",},
    {src: vue.src, alt:"Vue image",},
    {src: nuxt.src, alt:"Nuxt image",},
    {src: tailwind.src, alt:"Tailwind image",},
    {src: golang.src, alt:"Golang image",},
    {src: docker.src, alt:"Golang image",},
]
console.log(images[0].src)
  return (
    <>
      <Navbar />
      {/* <Lanyard/> */}
      <Introduction />
      <article id='about' className="px-28 flex items-center justify-around mt-5 py-5 ">
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
      <Project />
      <ScrollVelocity
        texts={images}
        velocity={100}
        // numCopies={1}
        // className="mx-4"
        scrollerClassName="gap-8"
        parallaxClassName="overflow-hidden"
      />
    </>
  );
}
