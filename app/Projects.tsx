import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const myProjects = [
     {
      name: "Krea-Ai Dashboard",
      info: "A sleek, fully responsive dashboard built with Next.js and Tailwind CSS, designed for managing AI-generated visuals and assets. It features dynamic card layouts, interactive previews, and intuitive UI components to streamline creative workflows.",
      icon: "/Github.svg",
      link2: "https://github.com/Jhasparr/KreaAiDashboard",
      link: "https://krea-ai-dashboard-one.vercel.app/",
      video: "/krea-ai.mp4",
    },
    {
      name: "All Movies",
      info: "A responsive movie browsing web application built with React and Vite, designed to let users explore, search, and view details of trending movies. It integrates with an external movie API to display real-time data including posters, ratings, and descriptions.",
      icon: "/Github.svg",
      link: "https://jhasparr.github.io/movie-website/",
      link2: "https://github.com/Jhasparr/movie-website",
      video: "/all-movies.mp4",
    },
    {
      name: "Next Clerk",
      info: "A full-stack authentication platform built with Next.js, Clerk, and PostgreSQL (via Supabase). It features secure user authentication, session management, and real-time database synchronization. The app supports social logins, profile management, and protected routes using Clerk’s API. ",
      icon: "/Github.svg",
      link2: "https://github.com/Jhasparr/next-clerk",
      link: "https://next-clerk-nmlp.vercel.app/",
      video: "/next-clerk.mp4",
    },
   
     {
      name: "Gemini Clone",
      info: "A responsive AI-assistant web app inspired by Google Gemini. Built with Next.js and Tailwind CSS, it integrates Gemini API for real-time AI responses in a sleek chat interface. Features include dark/light mode, smooth transitions, and a minimalist conversational UI.",
      icon: "/Github.svg",
      link: "https://gemini-clone-one-pi.vercel.app/",
      link2: "https://github.com/Jhasparr/gemini-clone",
      video: "/gemini-clone.mp4",
    },
    {
      name: "Simple Calculator",
      info: "A responsive movie browsing web application built with React and Vite, designed to let users explore, search, and view details of trending movies. It integrates with an external movie API to display real-time data including posters, ratings, and descriptions.",
      icon: "/Github.svg",
      link: "https://jhasparr.github.io/movie-website/",
      video: "/simple-calculator.mp4",
    },
  ];
  return (
    <div className="container mx-auto px-2">
      <div className="text-left  mx-auto px-2 md:px-2 xl:px-60 lg:px-8  py-2 w-full">
        <div className="flex space-x-3 lg:space-x-6 w-full lg:w-full  items-center  md:py-8 py-2  ">
          <div className="items-center flex gap-3">
            <img
              src={"/Code.svg"}
              alt="Briefcase"
              className=""
            ></img>
            <div>
              <h1 className="lg:text-4xl md:text-4xl text-3xl text-white font-bold ">
                Projects
              </h1>
            </div>
          </div>
        </div>
        {/* Projects Card */}
        {myProjects.map((card, i) => (
          <div className="mb-15" key={i}>
            <h3 className="text-2xl font-semibold text-[#FFEA9F] mt-2 mb-2">
              {card.name}
            </h3>
            <p className="mb-4  md:text-xl text-[17px]">{card.info}</p>
            <div>
              {card.link2 && (
                <Link href={card.link2}>
                  <button className="px-2 py-1 border-2 text-white bg-[#2E2E2E] flex items-center rounded-full space-x-2 cursor-pointer shadow-md mb-3 lg:mb-0">
                    <img src={card.icon} alt="icon" />
                    <p className="mr-1">Github</p>
                  </button>
                </Link>
              )}
            </div>

            <Link href={card.link} key={i}>
              <div className="w-full px-2 aspect-video  h-full rounded-md  relative  mt-5">
                <video
                  src={card.video}
                  muted
                  loop
                  playsInline
                
                  
                  autoPlay
                  className="object-cover mx-auto w-full h-full rounded-md   "
                ></video>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
