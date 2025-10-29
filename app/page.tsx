import { headers } from "next/headers";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./Projects";
import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <main className="">
      <section id="home" className="">
       
      </section>
      <section id="about" className="lg:mt-20 mt-5">
        <About />
      </section>
      <section id="education" className="lg:mt-25 xl:mt-20 mt-12">
        <Education />
      </section>
      <section id="experience" className="lg:mt-25 xl:mt-20 mt-12">
        <Experience />
      </section>
      <section id="projects" className="lg:mt-25 xl:mt-20 mt-12">
        <Projects />
      </section>
    </main>
  );
}
