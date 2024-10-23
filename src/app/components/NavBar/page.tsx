"use client"
import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {

    const [isClick, setisClick] = useState(false);

    const toggleNavBar = () => {
        setisClick(!isClick);
    };

  return (
    <div>
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#1a1a1a] ">
            <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 ">
                            <a href="/" className="text-white text-3xl font-semibold">PortFolio.</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4 text-lg font-sans">
                            <a href="./components/HeroSection" className="text-white p-2 hover:bg-white hover:text-[#1a1a1a] rounded-lg">
                                Home
                            </a>

                            <a href="./components/AboutSection" className="text-white p-2 hover:bg-white hover:text-[#1a1a1a] rounded-lg">
                                About
                            </a>

                            <a href="./components/ContactSection" className="text-white p-2 hover:bg-white hover:text-[#1a1a1a] rounded-lg">
                              Contact
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus-within:ring-white" onClick={toggleNavBar}>
                            {isClick ? (
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                className="size-6"
                                >
                                <path 
                                 stroke-linecap="round" 
                                 stroke-linejoin="round" 
                                 d="M6 18 18 6M6 6l12 12" 
                                />
                            </svg>
                              
                            ) : (
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                className="size-6">
                                <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                              </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-lg font-sans">
                        <a href="./components/HeroSection" className="text-white p-2 block hover:bg-white hover:text-black rounded-lg">
                                Home
                        </a>

                        <a href="./components/AboutSection" className="text-white p-2 block hover:bg-white hover:text-black rounded-lg">
                                About
                        </a>

                        <a href="./components/ContactSection" className="text-white p-2 block hover:bg-white hover:text-black rounded-lg">
                                Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    </div>
  );
};

export default NavBar;