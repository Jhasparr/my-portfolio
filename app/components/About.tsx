import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollFlip from "../ScrollFlip";
import AnimatedOnScroll from "../AnimatedSection";
import ScrollSlide from "./ScrollSlide";
import ProfileImageAnimation from "./ProfileAnimation";
import ProfileDivAnimation from "./ProfileAnimation";

export default function About() {
  const myButtons = [
    {
      name: "LinkedIn",
      icon: "/LinkedIn.svg",
      link: "http://linkedin.com/in/ezepue-james/",
    },
    {
      name: "Github",
      icon: "/GitHub.svg",
      link: "https://github.com/Jhasparr",
    },
    {
      name: "jasperezepue@gmail.com",
      icon: "/Email.svg",
      link: "mailto:jasperezepue@gmail.com",
    },
    {
      name: "CV",
      icon: "/Resume.svg",
      link: "/Resume-Ezepue-James.pdf",
    },
  ];
  return (
    <div className="container mx-auto px-2">
      
      <div className=" mx-auto px-2 md:px-2 xl:px-60 lg:px-8 py-2 w-full">
        <ProfileDivAnimation>
        <div className="md:w-25 w-18 h-18 md:h-25  rounded-full">
          <Image
            src={"/pfp.png"}
            alt="pfp"
            width={128}
            height={128}
            className="object-cover w-full h-full rounded-full"
          ></Image>
        </div>
        </ProfileDivAnimation>
        <ScrollFlip>
        <div className="flex space-x-3 lg:space-x-6  items-center justify-ce lg:py-4 py-2 ">
          <h1 className="md:text-6xl text-3xl  text-white font-bold">
            Hey, I'm James{" "}
          </h1>
          <button className="bg-[#BEDBFE] rounded-md text-[#1F3A8A] lg:px-3 px-1.5 lg:py-1 py-0.5 md:text-sm text-[10px] mt-1 lg:mt-3 lg:font-semibold mr-2">
            Open to work
          </button>
        </div>
        </ScrollFlip>
        <AnimatedOnScroll>
        <p className="md:mt-2  md:text-xl text-[17px] w-full ">
          <span className="text-[#FFEA9F] ">
            Driven frontend developer skilled in Typescript,{" "}
          </span>{" "}<span className="text-[#FFBBC3] ">
            {" "}
            React, and modern web technologies.  </span>{" "}
            <span className="text-[#B6FBFF] ">
            
            {" "}
            Dedicated to creating clean,{" "}
         
         
            functional, and dynamic web experiences.
          </span>
        </p>
        </AnimatedOnScroll>
        <div className="w-full mt-3.5  md:flex gap-10 ">
          {myButtons.map((button, index) => (
            <ScrollSlide key={index}>
            <Link  href={button.link} target="_blank">
              <button className="px-2.5 py-1 border-2 text-white  bg-[#2E2E2E] flex items-center rounded-full space-x-2 hover:bg-gray-600  cursor-pointer shadow-md mb-3 lg:mb-0">
                <img
                  src={button.icon}
                  alt="Profile Icon"
                  className="w-5 h-5 "
                />

                <p className="mr-2">{button.name}</p>
              </button>
            </Link>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </div>
  );
}
