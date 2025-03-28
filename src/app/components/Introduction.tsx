"use client";
import Image from "next/image";
import React from "react";
import Endra from "@/app/assets/Endra.png";
import { TypeAnimation } from "react-type-animation";
import Threads from "./animation/Threads";
// import Lanyard from "./Lanyard/Lanyard";

function Introduction() {
  return (
    <>
      
    <div className="w-full flex justify-between px-28 py-20 items-center bg-[#0C0950] relative">
    <div className="absolute w-full h-full object-cover left-0 ">
  <Threads
    amplitude={5  }
    distance={0.8}
    enableMouseInteraction={false}
    color={[251,228,214]}
  />
</div>
      <div className="space-y-20">
        <div className="text-7xl font-extrabold text-[#261FB3] relative">
          Hello, I&apos;m
        </div>

        <TypeAnimation
          sequence={["Endra Dwi Jamaludin", 1000, "Front-End Developer", 1000]}
          speed={30}
          repeat={Infinity}
          className="text-7xl font-extrabold relative text-[#FBE4D6]"
        />
      </div>
      <div>
        <Image
          src={Endra}
          alt=""
          width={400}
          height={400}
          className="w-full aspect-ratio rounded-full shadow-2xl relative"
        ></Image>
      </div>
      {/* <Lanyard/> */}
    </div>
    </>
  );
}

export default Introduction;
