import React from 'react'
import next from "@/app/assets/nextjs.png"
import js from "@/app/assets/js.png"
import react from "@/app/assets/react.png"
import vue from "@/app/assets/vue.png"
import nuxt from "@/app/assets/nuxt.png"
import tailwind from "@/app/assets/tailwind.png"
import golang from "@/app/assets/golang.png"
import docker from "@/app/assets/docker.png"
import ScrollVelocity from "./animation/ScrollVelocity";


function Skills() {
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
  return (
    <div className="py-10 space-y-5 ">
      <div className='flex items-center justify-center'>
        <div className="text-4xl font-bold w-full bg-white max-w-52 text-center rounded-full py-2 px-5 shadow-md shadow-white ">My Skils</div>
      </div>
      <ScrollVelocity
        texts={images}
        velocity={100}
        // numCopies={1}
        // className="mx-4"
        scrollerClassName="gap-8"
        parallaxClassName="overflow-hidden"
      />
    </div>
  )
}

export default Skills
