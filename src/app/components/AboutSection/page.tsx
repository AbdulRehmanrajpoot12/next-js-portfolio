"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton/page";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Next.JS</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Matriculation, The Educators, Karachi.</li>
        <li>Currently Doing Courses, GIAIC, Karachi</li>
        <li>Pre-Engineering, Govt. Superior Science College, Karachi</li>
      </ul>
    )
  }
]

const AboutPage = () => {

  const [tab, setTab] = useState("skills");
  const [isPending ,startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition (() => {
      setTab(id);
    });
  }

  return (
    <section className="text-white mt-14">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image 
                src="/images/about-image.jpg"
                alt="about image"
                width={500}
                height={500} 
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a823b0] via-[#ff006a] to-[#ff4757]">About</span> Me</h2>
                <p className="text-base lg:text-lg font-sans"> 
                    I'm Abdul Rehman Rajpoot, a passionate web developer with a keen interest in crafting modern and efficient digital solutions. With a solid foundation in front-end development and a growing expertise in back-end technologies, I'm currently honing my skills in Next.js and exploring full-stack development. My journey into coding is driven by a desire to create seamless user experiences and innovative web applications. Outside of development, I enjoy video editing, bringing creativity to life through visuals. I'm always eager to learn and tackle new challenges that push my abilities to the next level.
               </p>
               <div className="flex flex-row justify-start mt-8">
                 <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                 <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
               </div>
               <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab)?.content}
               </div>
            </div>
        </div>
    </section>
  );
};

export default AboutPage;