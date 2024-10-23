import React from "react"
import { SocialIcon } from "react-social-icons";

const ContactPage = () => {
  return (
    <div className="bg-[#1a1a1a] p-4 mb-4 rounded-b-xl rounded-t-xl m-28">
      <div className="p-4 text-center">
        <h2 className="text-4xl text-white font-semibold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a823b0] via-[#ff006a] to-[#ff4757]">Connect</span> With Me</h2>
        <p className="text-white mt-7 text-lg font-sans mb-6 lg:text-xl">Whether you have a project in mind, a question to ask, or just want to say hello, feel free to connect with me! I'm always open to discussing new ideas, collaborations, or opportunities. Simply drop a message, and I'll get back to you as soon as possible. Let's turn your ideas into reality!</p>
      </div>    
      <div className="flex justify-center items-center space-x-6 h-24">
        <SocialIcon url="https://instagram.com" href="https://www.instagram.com/igx_rehman_" className="transition duration-300 ease-in-out transform hover:translate-y-[-3px]"/>
        <SocialIcon url="https://www.github.com" href="https://github.com/AbdulRehmanrajpoot12" className="transition duration-300 ease-in-out transform hover:translate-y-[-3px]"/>
        <SocialIcon url="https://www.linkedin.com" href="https://www.linkedin.com/in/abdul-rehman-rajpoot-a309082b4" className="transition duration-300 ease-in-out transform hover:translate-y-[-3px]"/>
      </div>
    </div>
  );
};

export default ContactPage;