"use client";
import React from "react";
import Image from 'next/image';
import { TypingText } from "typing-text-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center ">
            <h1 className="text-4xl text-white lg:text-6xl font-extrabold mb-2 mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a823b0] via-[#ff006a] to-[#ff4757]">Hello, I'm </span><TypingText text={["Abdul Rehman", "Web-Developer"]}/></h1>

            <p className="text-white text-lg font-sans">I'm a passionate web developer with a knack for building clean, efficient, and creative web solutions. I specialize in front-end development and am currently honing my skills in Next.js, blending modern frameworks with sleek design. With a strong foundation in TypeScript, I love tackling complex challenges and turning ideas into reality. Outside of coding, I enjoy video editing, which further fuels my creativity. Let's bring your next project to life together!</p>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0 sm:p-12">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
    </div>
  );
};

export default HeroSection;