'use client'
import Image from "next/image";
import React from "react";
import Endra from "@/app/assets/Endra.png";
import { TypeAnimation } from 'react-type-animation';

function Introduction() {
  return (
    <div className="w-full flex justify-between px-28 py-20 items-center bg-[#3674B5]">
      <div className="space-y-20">
        <div className="text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-300 text-transparent bg-clip-text">Hello, I'm</div>
        <TypeAnimation
      sequence={[
        'Endra Dwi Jamaludin',
        1000, 
        'Front-End Developer',
        1000
      ]}
      speed={30}
      repeat={Infinity}
      className="text-7xl font-extrabold"
    />
        
      </div>
      <div>
        <Image
          src={Endra}
          alt=""
          width={400}
          height={400}
          className="w-full aspect-ratio rounded-full shadow-2xl"
        ></Image>
      </div>
    </div>
  );
}

export default Introduction;
