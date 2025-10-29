import React from "react";
import ScrollPopAnimation from "../ScrollPopAnimation";
import AnimatedOnScroll from "../AnimatedSection";

export default function Experience() {
  return (
    <div className="container mx-auto px-2 ">
      <div className="text-left  mx-auto px-2 md:px-2 xl:px-60 lg:px-8  py-2 w-full ">
        <ScrollPopAnimation>
        
        <div className="flex space-x-3 lg:space-x-6 w-full lg:w-full  items-center  md:py-8 py-2  ">
          <div className="items-center flex gap-3">
            <img
              src={"/Business.svg"}
              alt="Briefcase"
              className=""
            ></img>
            <div>
              <h1 className="lg:text-4xl md:text-4xl text-3xl text-white font-bold ">
                Experience
              </h1>
            </div>
          </div>
        </div>
        </ScrollPopAnimation>

        <div className="relative border-l-2 border-gray-600 ml-2">
          <ScrollPopAnimation>
          <div className="mb-12 ml-4">
            <div className="absolute w-3 h-3 bg-white  rounded-full -left-1.5 top-1.5"></div>
            <p className="text-[#FFBBC3]  md:text-xl text-[17px]">
              January 2024 – September 2025
            </p>
            <h3 className=" md:text-xl text-[17px] font-semibold text-[#FFEA9F] ">
              Frontend Software Developer | CRAFWELL ENGINEERING
            </h3>
            <p className=" md:text-xl text-[17px]">
              Developed and maintained responsive, user-friendly web
              applications using React, TypeScript, Next.js, and Tailwind CSS{" "}
            </p>
            <ul className="list-disc list-inside  md:text-xl text-[15px]">
              <li>
                Implemented reusable UI components and component-driven design,
                improving development speed and consistency across projects.
              </li>
              <li>
                Optimized application performance and accessibility across
                devices, ensuring a seamless user experience.
              </li>
              <li>
                Contributed to Agile workflows through active participation in
                sprint planning, stand-ups, and code reviews.
              </li>
            </ul>
          </div>
          </ScrollPopAnimation>
          
          
          <div className="mb-6 ml-4">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 lg:top-76 "></div>
            <ScrollPopAnimation>
            <p className="text-[#FFBBC3]   md:text-xl text-[17px] ">
              August 2025 - Present
            </p>
            <h3 className=" md:text-xl text-[17px] font-semibold text-[#FFEA9F] ">
              Web Development Intern
            </h3>
            <p className=" md:text-xl text-[17px]">
              Built and maintained responsive, user-friendly web interfaces using
              Next.js, React, and Tailwind CSS. Collaborated with designers and
              backend developers to implement dynamic features and UI
              components. Optimized front-end performance, improving site
              responsiveness and load times across devices. Integrated RESTful
              APIs and implemented smooth client-side routing. Used Git for
              version control and participated in peer code reviews. Debugged
              and resolved layout and functionality issues to improve user
              experience. Assisted with deployment workflows and environment
              configurations.
            </p>
            </ScrollPopAnimation>
          </div>
          
        </div>
      </div>
    </div>
  );
}
