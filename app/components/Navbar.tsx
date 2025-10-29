"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import LeftArrowIcon, {
  CallIcon,
  AboutMe,
  HomeIcon,
  CloseCircleIcon,
  MoreCircleIcon,
  EducationIcon,
  WorkIcon,
  ProjectsIcon,
} from "./IconLibrary";
import NavIcons from "./NavIcons";

import Link from "next/link";
import { link } from "fs";
import { usePathname } from "next/navigation";
import { div } from "framer-motion/client";

const navIcons = [
  {
    icon: HomeIcon,
    name: "Home",
    link: "#home",
    image: "/home.jpg",
  },
  {
    icon: AboutMe,
    name: "About",
    link: "#about",
    image: "/about.jpg",
  },
  {
    icon: EducationIcon,
    name: "Education",
    link: "#education",
    image: "/school.png",
  },
  {
    icon: WorkIcon,
    name: "Experience",
    link: "#experience",
    image: "/work.jpg",
  },
  {
    icon: ProjectsIcon,
    name: "Projects",
    link: "#projects",
    image: "/projects.jpg",
  },
];

export default function Navbar() {
 
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sections = navIcons.map((nav) => {
        const id = nav.link.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return { name: nav.name, top: 0 };
        return { name: nav.name, top: el.offsetTop };
      });

      const current = sections
        .reverse()
        .find((section) => scrollY + 200 >= section.top);
      if (current) setActive(current.name);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div className="lg:flex lg:w-full max-w-full lg:flex-row   w-full px-2 md:w-auto mx-auto sticky top-2 z-50  lg:justify-center mt-2  ">
      <div className="relative lg:w-full lg:max-w-full min-w-0 lg:shrink  mx-auto px-2 py-0 lg:flex items-center justify-between space-x-10  ">
        <div className="hidden lg:flex justify-between space-x-10 ">
          <div className="lg:flex  space-x-10 ">
            <Link href={"/"}>
              <Image
                src={"/pfp.png"}
                alt="SureBloom"
                width={35}
                height={30}
                className="rounded-full w-8 h-8"
              />
            </Link>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-1 z-50  shadow-md rounded-xl px-1 py-1 bg-[#212121] border bo mx-auto">
          {navIcons.map(({ icon: Icon, link, name }) => {
            const isActive = active === name;
            return (
              <Link key={name} href={link} className="relative group">
                <div
                  className={` transition-all px-4 py-3 rounded-xl flex ${
                    isActive
                      ? `bg-white`
                      : ` hover:bg-[#737373] hover:shadow-md`
                  }`}
                >
                  <Icon
                    className={`${
                      isActive ? `text-black` : `text-white`
                    }`}
                  />
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all   text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap bg-[#333]">
                  {name}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="flex justify-center items-center  space-x-4 ">
          <div className="hidden lg:flex  hover:shadow-md transition-all space-x-1 z-50 bg-[#212121] shadow-md rounded-xl px-2 py-2 hover:bg-[#737373] border">
            <CallIcon />
            <div className="flex"><Link className="text-white" target="_blank" href={"mailto:jasperezepue@gmail.com"}>Contact Me</Link></div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="flex w-full lg:hidden py-2 px-2 md:px-8 justify-between mt-0 mx-auto ">
        {/* Mobile Menu Conditionals */}

        <div className="">
          <button
            type="button"
            onClick={toggleNav}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleNav();
              }
            }}
            tabIndex={0}
            className="block lg:hidden"
            aria-label="Toggle navigation"
          >
            <MoreCircleIcon className="text-white " />
          </button>
          <div
            className={`fixed overflow-y-auto top-0 pt-[18px] left-0 w-[300px] md:w-1/2 h-screen  bg-[linear-gradient(180deg,_#0a0a0a,_#1f1f1f,_#0a0a0a)] z-50 transition-transform duration-500 ${
              open ? "transform translate-x-0 " : "transform -translate-x-full "
            }`}
          >
            {/*Close Mobile Menu */}
            <div className="px-4 flex items-center justify-between">
              <button
                type="button"
                className="pr-2"
                onClick={toggleNav}
                aria-label="Close navigation"
              >
                <CloseCircleIcon className="text-white" />
              </button>
            </div>
            {/* Mobile Button Slider */}
            <div className=" flex mt-10 flex-col font-bold max-w-64 justify-between ">
              {navIcons.map(({ icon: Icon, link, image, name }) => {
                return (
                  <Link href={link} key={name} onClick={() => setOpen(false)}>
                    <div className="px-6 py-2">
                      <h3>{name}</h3>
                    </div>
                    <div className="py-0 px-1 flex flex-col flex-nowrap gap-4 mb-5">
                      <div className="w-64 ">
                        <div className="flex flex-row justify-between space-x-2  active:bg-[#212121]  hover:bg-[#212121] px-4 py-3 rounded-2xl  ">
                          <div className="flex flex-row w-full  ">
                            <div className=" flex flex-row shadow-md gap-2 w-9 h-9 rounded-lg ">
                              <Image
                                src={image}
                                alt={"Logo"}
                                width={35}
                                height={30}
                                className="w-full h-full  object-cover rounded-lg"
                              />
                              <div className=" justify-center items-center flex ">
                                <h2 className="md:text-[18px] text-[15px] font-bold">
                                  {name}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/*  */}
          </div>
        </div>
       
      </div>
    </div>
  );
}
