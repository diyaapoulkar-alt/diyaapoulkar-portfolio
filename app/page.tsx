"use client";

import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden bg-black">

      <CursorGlow />
      <Navbar />

      {/* HERO */}
<section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-28"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">

    <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full top-10 left-10 animate-pulse" />

    <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />

  </div>

  {/* TOP CENTER TEXT */}
  <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20">

    <p className="text-gray-400 tracking-[0.3em] uppercase text-sm text-center whitespace-nowrap">
      Computer Science Student • Developer • Problem Solver
    </p>

  </div>

  <motion.div
    initial="hidden"
    animate="show"
    variants={fadeUp}
    className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-14 items-center"
  >

    {/* LEFT SIDE IMAGE */}
    <div className="flex justify-center md:justify-start">

      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl opacity-40 animate-pulse" />

        {/* IMAGE */}
        <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">

          <Image
            src="/diya.jpeg"
            alt="Diya Poulkar"
            fill
            className="object-cover"
          />

        </div>

      </div>

    </div>

    {/* RIGHT SIDE TEXT */}
    <div>

      <h1 className="text-6xl md:text-7xl font-bold leading-tight">

        Hi, I’m{" "}

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Diya Poulkar
        </span>

      </h1>

      <p className="mt-7 text-gray-300 text-lg leading-relaxed max-w-xl">

        Aspiring software engineer passionate about software development,
        machine learning, and building impactful technology solutions
        with clean and efficient systems.

      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex gap-4 flex-wrap">

        <a
          href="#projects"
          className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition shadow-lg shadow-purple-500/20"
        >
          View Projects
        </a>

        <a
          href="/diya_poulkar_resume.pdf"
          className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          Download Resume
        </a>

      </div>

    </div>

  </motion.div>

</section>
        

      {/* ABOUT */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 max-w-5xl mx-auto"
      >

        <h2 className="text-4xl font-bold mb-6 text-purple-300">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I am a Computer Science student at VIT Bhopal passionate about
          software development, machine learning, and solving real-world
          problems through clean and efficient systems. I enjoy continuously
          learning and building impactful technology solutions.
        </p>

      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-24 px-6 max-w-6xl mx-auto"
      >

        <h2 className="text-4xl font-bold mb-14 text-center text-blue-300">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Languages",
              color: "from-purple-500 to-pink-500",
              skills: ["Python", "C", "C++"],
            },
            {
              title: "Core Concepts",
              color: "from-blue-500 to-cyan-500",
              skills: ["Data Structures", "Problem Solving", "OOP"],
            },
            {
              title: "Tools",
              color: "from-pink-500 to-orange-500",
              skills: ["GitHub", "VS Code", "Git"],
            },
            {
              title: "Learning",
              color: "from-cyan-500 to-purple-500",
              skills: ["Java","Machine Learning", "APIs", "Backend Logic"],
            },
          ].map((category, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-[1.03] transition duration-300"
            >

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r ${category.color}`}
              />

              <div className="relative z-10">

                <h3 className="text-xl font-semibold mb-5">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">

                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-black/40 border border-white/10 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            </div>
          ))}

        </div>
      </motion.section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-28 px-6 max-w-6xl mx-auto"
      >

        <h2 className="text-4xl font-bold text-center mb-14 text-pink-300">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              title: "Saathi — Multimodal AI Accessibility Copilot",
              badge: "SOFC 2.0 Hackathon Submission",
              desc: "A smart AI accessibility copilot for students with sensory & learning needs. Integrates Visual Assist (Groq Llama Vision + OCR), Hearing Assist (0ms real-time subtitles), Cognitive Assist (OpenDyslexic font & focus mask), and Spoken Math/LaTeX reader in English, Hindi, and Marathi.",
              tags: ["React 18", "Vite", "Groq AI", "Llama 3.3/3.2", "Web Speech API"],
              liveUrl: "https://team-sarvashrestha-diya-poulkar.vercel.app",
              githubUrl: "https://github.com/diyaapoulkar-alt/Team-Sarvashrestha-Diya-Poulkar",
              color: "from-emerald-500 via-teal-500 to-cyan-500",
            },
            {
              title: "Smart News Assistant",
              desc: "AI-based system that fetches and summarizes news using APIs with intelligent filtering and clean UX.",
              tags: ["Python", "APIs", "NLP"],
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Smart Commute Assistant",
              desc: "Machine learning-based travel time prediction system using APIs, regression models, and real-world datasets.",
              tags: ["Python", "Machine Learning", "Travel APIs"],
              color: "from-blue-500 to-cyan-500",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:scale-[1.02] transition duration-300 flex flex-col justify-between"
            >

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r ${project.color}`}
              />

              <div className="relative z-10">

                {project.badge && (
                  <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {project.badge}
                  </span>
                )}

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-base">
                  {project.desc}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs bg-black/50 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="relative z-10 mt-7 flex gap-3 flex-wrap">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-105 transition shadow-lg shadow-emerald-500/20 text-white"
                    >
                      🌐 Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/10 transition text-gray-300 hover:text-white"
                    >
                      📦 GitHub Repo
                    </a>
                  )}
                </div>
              )}

            </div>
          ))}

        </div>
      </section>

    {/* EDUCATION */}
<section
  id="education"
  className="py-24 px-6 max-w-5xl mx-auto"
>

  <h2 className="text-4xl font-bold mb-14 text-purple-300 text-center">
    Education
  </h2>

  <div className="space-y-8">

    {/* College */}
    <div className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-7 hover:scale-[1.02] transition duration-300">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r from-purple-500 to-pink-500" />

      <div className="relative z-10">

        <p className="text-sm text-purple-300 mb-2">
          2025 – Present
        </p>

        <h3 className="text-2xl font-semibold">
          VIT Bhopal University
        </h3>

        <p className="text-gray-300 mt-2">
          B.Tech in Computer Science Engineering
        </p>

        <p className="text-gray-400 mt-3">
          Current CGPA: 9.22
        </p>

      </div>
    </div>

    {/* School Cards */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* 12th */}
      <div className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl p-6 hover:scale-[1.03] transition">

        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r from-blue-500 to-cyan-500" />

        <div className="relative z-10">

          <p className="text-sm text-blue-300 mb-2">
            Class XII
          </p>

          <h3 className="text-xl font-semibold">
            Wisdom High International School & Jr. College
          </h3>

          <p className="text-gray-400 mt-3">
            Percentage: 74%
          </p>

        </div>
      </div>

      {/* 10th */}
      <div className="group relative overflow-hidden rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-6 hover:scale-[1.03] transition">

        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r from-pink-500 to-purple-500" />

        <div className="relative z-10">

          <p className="text-sm text-pink-300 mb-2">
            Class X
          </p>

          <h3 className="text-xl font-semibold">
            Boys’ Town Public School
          </h3>

          <p className="text-gray-400 mt-3">
            Percentage: 90%
          </p>

        </div>
      </div>

    </div>

  </div>
</section>

{/* EXPERIENCE */}
<section
  id="experience"
  className="py-24 px-6 max-w-5xl mx-auto"
>

  <h2 className="text-4xl font-bold mb-14 text-center text-blue-300">
    Experience
  </h2>

  <div className="space-y-8">

    {/* Linpack */}
    <div className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-7 hover:scale-[1.02] transition duration-300">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r from-purple-500 to-blue-500" />

      <div className="relative z-10">

        <p className="text-sm text-purple-300 mb-2">
          May 2026 – Present
        </p>

        <h3 className="text-2xl font-semibold">
          Core Member – Technical Team
        </h3>

        <p className="text-gray-300 mt-2">
          Linpack Club • VIT Bhopal
        </p>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Contributing to technical development tasks, collaborating on projects,
          and building modern web solutions using React.js and related technologies.
        </p>

      </div>
    </div>

    {/* Minitek */}
    <div className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl p-7 hover:scale-[1.02] transition duration-300">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r from-blue-500 to-cyan-500" />

      <div className="relative z-10">

        <p className="text-sm text-blue-300 mb-2">
          Internship • July 2025 – August 2025
        </p>

        <h3 className="text-2xl font-semibold">
          Minitek Sytsems India Pvt. Ltd.
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Worked on technical learning, software workflows, and practical
          problem solving while improving analytical and development skills.
        </p>

      </div>
    </div>

  </div>
</section>
      {/* CONTACT */}
<section
  id="contact"
  className="py-24 px-6 text-center max-w-5xl mx-auto"
>

  <h2 className="text-4xl font-bold mb-6 text-pink-300">
    Let’s Connect
  </h2>

  <p className="text-gray-400 mb-10">
    Open for internships, collaborations, and opportunities.
  </p>

  {/* CONTACT CARDS */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-6">

    {/* EMAIL */}
    <a
      href="mailto:diyaapoulkar@gmail.com"
      className="group px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-pink-400/50 transition flex items-center gap-3"
    >
      <span className="text-xl">📧</span>
      <span className="text-gray-300 group-hover:text-white transition">
        diyaapoulkar@gmail.com
      </span>
    </a>

    {/* LINKEDIN */}
    <a
      href="https://www.linkedin.com/in/diya-poulkar-05721037a/" 
      target="_blank"
      className="group px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-blue-400/50 transition flex items-center gap-3"
    >
      <span className="text-xl">🔗</span>
      <span className="text-gray-300 group-hover:text-white transition">
        LinkedIn Profile
      </span>
    </a>

  </div>

</section>
    </main>
  );
}