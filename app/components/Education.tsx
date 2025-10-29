import React from "react";
import AnimatedOnScroll from "../AnimatedSection";

export default function Education() {
  const myButtons = [
    {
      name: "Web Development:",
      buttons: ["HTML", "CSS ", "Typescript", "Tailwind"],
    },
    { name: "Frameworks:", buttons: ["React", "NextJS ", "NodeJS"] },
    {
      name: "Database Management:",
      buttons: ["PostgresSQL", "Prisma ORM", "Supabase"],
    },
    { name: "Version Control:", buttons: ["Git", "Github "] },
    { name: "Package Managers:", buttons: ["NPM"] },
  ];
  return (
  
    <div className="container mx-auto px-2 ">
      <div className="text-left  mx-auto px-2 md:px-2 xl:px-60 lg:px-8  py-2 w-full ">
        
        <AnimatedOnScroll>

        <div className="flex space-x-3 lg:space-x-6 w-full lg:w-full  items-center  md:py-8 py-2  ">
          <div className="items-center flex gap-3 ">
            <img
              src={"/Graduation.svg"}
              alt="Graduation cap"
              className=""
            ></img>
            <div>
              <h1 className="lg:text-4xl md:text-4xl text-3xl  text-white font-bold ">
                Education
              </h1>
            </div>
          </div>
        </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll>

        <div className="relative border-l-2  border-gray-600 ml-2">
          <div className="mb-6 ml-4">
            <div className="absolute w-3 h-3 bg-white  rounded-full -left-1.5 top-1.5"></div>
            <p className="text-[#FFBBC3]  md:text-xl text-[17px]">
              December 2019 - December 2024
            </p>
            <h3 className=" md:text-xl text-[17px] font-semibold text-[#FFEA9F] ">
              Bachelor of Metallurgical and Material's Engineering
            </h3>
            <p className=" md:text-xl text-[17px]">
              University of Nigeria, Nsukka <span className="italic"></span>
            </p>
          </div>

          <div className="mb-6 ml-4">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 lg:top-26"></div>
            <p className="text-[#FFBBC3] md:text-xl text-[17px]">
              August 2016 - August 2019
            </p>
            <h3 className=" md:text-xl text-[17px] font-semibold text-[#FFEA9F] ">
              West African Senior School Certificate Examination
            </h3>
            <p className=" md:text-xl text-[17px]">
              Relevant Subjects: Mathematics, Physics, Chemistry, English,
              Technical Drawing
            </p>
          </div>
        </div>
        </AnimatedOnScroll>
        {/* Languages */}
        <AnimatedOnScroll>
        <div className="flex space-x-3 lg:space-x-6 w-full items-center  lg:py-4 py-2 mt-15 ">
          <div className="items-center flex gap-3">
            <img
              src={"/language.svg"}
              alt="Graduation cap"
              className=""
            ></img>
            <div>
              <h1 className="lg:text-4xl md:text-4xl text-3xl text-white font-bold ">
                Languages
              </h1>
            </div>
          </div>
        </div>
        </AnimatedOnScroll>
        {/* horizontal Lines */}
        <AnimatedOnScroll>
        <div>
          <div>
            <h3 className="mb-2  md:text-xl text-[17px]">English</h3>
            <hr className="w-[90%] h-1.5 rounded bg-[#FFEA9F]" />
          </div>
          <div className="mt-4">
            <h3 className="mb-2  md:text-xl text-[17px]">Igbo</h3>
            <hr className="w-[65%] h-1.5 rounded bg-[#FFEA9F]" />
          </div>
        </div>
        </AnimatedOnScroll>
        {/* Skills */}
        <AnimatedOnScroll>
        <div className="flex space-x-3 lg:space-x-6 w-full lg:w-full  items-center  lg:py-4 py-2 mt-15  ">
          <div className="items-center flex gap-3">
            <img
              src={"/hash.svg"}
              alt="Graduation cap"
              className=""
            ></img>
            <div>
              <h1 className="lg:text-4xl md:text-4xl text-3xl text-white font-bold ">
                Skills
              </h1>
            </div>
          </div>
        </div>
        </AnimatedOnScroll>
        {myButtons.map((button, index) => (
          <AnimatedOnScroll  key={index}>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{button.name}</h3>
            <div className="w-full mt-2 items-center flex flex-wrap gap-y-0.5 gap-x-2 ">
              {button.buttons?.map((btn, i) => (
                <AnimatedOnScroll key={i}>
                <button
                  className="px-2 py-1 border-2 text-white bg-[#2E2E2E] flex  items-center rounded-full space-x-2  cursor-pointer shadow-md mb-3 lg:mb-0"
                  
                >
                  <p className="mr-1">{btn}</p>
                </button>
                </AnimatedOnScroll>
                
              ))}
            </div>
          </div>
          </AnimatedOnScroll>
        ))}

        {/* Final */}
      </div>
    </div>
  );
}
