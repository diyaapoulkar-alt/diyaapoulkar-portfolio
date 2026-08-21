"use client";

import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import IntroPreloader from "@/components/IntroPreloader";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen text-stone-900 overflow-x-hidden bg-stone-50/60 selection:bg-amber-100 selection:text-amber-950">
      {/* PALOMINO-STYLE CINEMATIC INTRO PRELOADER */}
      <IntroPreloader />

      {/* LIGHT-THEME BROWN CURSOR GLOW & FLOATING PILL NAVBAR */}
      <CursorGlow />
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-32 pb-20"
      >
        {/* BACKGROUND WARM AMBIENT GLOWS */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-amber-200/45 blur-3xl rounded-full top-10 left-1/4 animate-pulse" />
          <div className="absolute w-[500px] h-[500px] bg-amber-100/50 blur-3xl rounded-full bottom-10 right-1/4 animate-pulse delay-700" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT PROFILE IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              {/* Outer soft brown glow ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />

              {/* Image Container */}
              <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-amber-950/10">
                <Image
                  src="/diya.jpeg"
                  alt="Diya Poulkar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT HERO CONTENT */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100/90 text-amber-950 border border-amber-300/70 mb-6 shadow-sm">
              Computer Science Student • Developer • Problem Solver
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-amber-950 leading-tight tracking-tight">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950">
                Diya Poulkar
              </span>
            </h1>

            <p className="mt-6 text-stone-700 text-lg leading-relaxed max-w-xl font-normal">
              Aspiring software engineer passionate about software development,
              machine learning, and building impactful technology solutions
              with clean, efficient, and user-centric systems.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-9 flex gap-4 flex-wrap items-center">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-amber-900 hover:bg-amber-950 text-amber-50 font-semibold transition duration-300 shadow-xl shadow-amber-950/15 hover:scale-[1.03]"
              >
                View Projects
              </a>

              <a
                href="/diya_poulkar_resume.pdf"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-amber-50/60 text-amber-950 font-semibold border border-amber-900/20 transition duration-300 shadow-sm hover:scale-[1.03]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT ME SECTION */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20 px-6 max-w-5xl mx-auto"
      >
        <div className="bg-white border border-amber-900/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-amber-950/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-100/50 rounded-full blur-2xl -z-10" />

          <h2 className="text-3xl md:text-4xl font-black text-amber-950 mb-6 flex items-center gap-3">
            <span className="w-3 h-8 bg-amber-800 rounded-full" />
            About Me
          </h2>

          <p className="text-stone-700 text-lg leading-relaxed font-normal">
            I am a Computer Science student at VIT Bhopal passionate about
            software development, machine learning, and solving real-world
            problems through clean and efficient systems. I enjoy continuously
            learning, collaborating on innovative ideas, and building impactful
            technology solutions.
          </p>
        </div>
      </motion.section>

      {/* TECHNICAL SKILLS SECTION */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-amber-950">
            Technical Skills
          </h2>
          <p className="text-stone-600 mt-2 text-base font-medium">
            Languages, frameworks, and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Languages",
              color: "from-amber-800 to-amber-950",
              skills: ["Python", "C", "C++"],
            },
            {
              title: "Core Concepts",
              color: "from-amber-700 to-amber-900",
              skills: ["Data Structures", "Problem Solving", "OOP"],
            },
            {
              title: "Tools & Workflow",
              color: "from-amber-900 to-stone-900",
              skills: ["GitHub", "VS Code", "Git"],
            },
            {
              title: "Focus Areas",
              color: "from-amber-800 to-amber-950",
              skills: ["Java", "Machine Learning", "APIs", "Backend Logic"],
            },
          ].map((category, i) => (
            <div
              key={i}
              className="bg-white border border-amber-900/10 rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                  <h3 className="text-xl font-bold text-amber-950">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50/80 border border-amber-900/15 text-amber-950"
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

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-amber-950">
            Featured Projects
          </h2>
          <p className="text-stone-600 mt-2 text-base font-medium">
            Recent applications and hackathon innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Saathi — Multimodal AI Accessibility Copilot",
              badge: "SOFC 2.0 Hackathon Submission",
              desc: "A smart AI accessibility copilot for students with sensory & learning needs. Integrates Visual Assist (Groq Llama Vision + OCR), Hearing Assist (0ms real-time subtitles), Cognitive Assist (OpenDyslexic font & focus mask), and Spoken Math/LaTeX reader in English, Hindi, and Marathi.",
              tags: ["React 18", "Vite", "Groq AI", "Llama 3.3/3.2", "Web Speech API"],
              liveUrl: "https://team-sarvashrestha-diya-poulkar.vercel.app",
              githubUrl: "https://github.com/diyaapoulkar-alt/Team-Sarvashrestha-Diya-Poulkar",
            },
            {
              title: "Smart News Assistant",
              desc: "AI-based system that fetches and summarizes news using APIs with intelligent filtering, sentiment categorization, and clean UX.",
              tags: ["Python", "APIs", "NLP"],
            },
            {
              title: "Smart Commute Assistant",
              desc: "Machine learning-based travel time prediction system using live travel datasets, APIs, and regression modeling.",
              tags: ["Python", "Machine Learning", "Travel APIs"],
            },
          ].map((project, i) => (
            <div
              key={i}
              className={`bg-white border border-amber-900/10 rounded-3xl p-8 shadow-lg shadow-amber-950/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div>
                {project.badge && (
                  <span className="inline-block px-3.5 py-1 mb-4 rounded-full text-xs font-extrabold bg-amber-100/90 text-amber-950 border border-amber-300/80">
                    {project.badge}
                  </span>
                )}

                <h3 className="text-2xl md:text-3xl font-black text-amber-950">
                  {project.title}
                </h3>

                <p className="text-stone-700 mt-4 leading-relaxed text-base font-normal">
                  {project.desc}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50/80 border border-amber-900/15 text-amber-950"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-8 pt-6 border-t border-amber-900/10 flex gap-3 flex-wrap">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full text-sm font-bold bg-amber-900 text-white hover:bg-amber-950 transition duration-300 shadow-md hover:scale-[1.02]"
                    >
                      🌐 Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-amber-950 border border-amber-900/20 hover:bg-amber-50/70 transition duration-300 hover:scale-[1.02]"
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

      {/* EDUCATION SECTION */}
      <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-amber-950">
            Education
          </h2>
          <p className="text-stone-600 mt-2 text-base font-medium">
            Academic qualifications and achievements
          </p>
        </div>

        <div className="space-y-6">
          {/* College Card */}
          <div className="bg-white border border-amber-900/10 rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-950 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/80">
              2025 – Present
            </span>
            <h3 className="text-2xl font-black text-amber-950 mt-4">
              VIT Bhopal University
            </h3>
            <p className="text-stone-700 font-semibold mt-1">
              B.Tech in Computer Science Engineering
            </p>
            <p className="text-amber-900 font-black mt-3 text-lg">
              Current CGPA: 9.31
            </p>
          </div>

          {/* School Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 12th */}
            <div className="bg-white border border-amber-900/10 rounded-3xl p-7 shadow-md hover:shadow-xl transition duration-300">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-950 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-300/60">
                Class XII (HSC)
              </span>
              <h3 className="text-xl font-bold text-amber-950 mt-4">
                Wisdom High International School & Jr. College
              </h3>
              <p className="text-stone-700 mt-3 font-semibold">
                Percentage: 74%
              </p>
            </div>

            {/* 10th */}
            <div className="bg-white border border-amber-900/10 rounded-3xl p-7 shadow-md hover:shadow-xl transition duration-300">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-950 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-300/60">
                Class X (ICSE/SSC)
              </span>
              <h3 className="text-xl font-bold text-amber-950 mt-4">
                Boys’ Town Public School
              </h3>
              <p className="text-stone-700 mt-3 font-semibold">
                Percentage: 90%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-amber-950">
            Experience
          </h2>
          <p className="text-stone-600 mt-2 text-base font-medium">
            Technical leadership and industry internships
          </p>
        </div>

        <div className="space-y-6">
          {/* Linpack Club */}
          <div className="bg-white border border-amber-900/10 rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-950 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300/80">
              May 2026 – Present
            </span>
            <h3 className="text-2xl font-black text-amber-950 mt-4">
              Core Member – Technical Team
            </h3>
            <p className="text-stone-700 font-semibold mt-1">
              Linpack Club • VIT Bhopal
            </p>
            <p className="text-stone-700 mt-3 leading-relaxed font-normal">
              Contributing to technical development tasks, collaborating on web projects,
              and building modern solutions using React.js and modern software engineering practices.
            </p>
          </div>

          {/* Minitek Internship */}
          <div className="bg-white border border-amber-900/10 rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-950 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300/70">
              Internship • July 2025 – August 2025
            </span>
            <h3 className="text-2xl font-black text-amber-950 mt-4">
              Minitek Systems India Pvt. Ltd.
            </h3>
            <p className="text-stone-700 mt-3 leading-relaxed font-normal">
              Worked on technical learning, software workflows, algorithm design, and practical
              problem solving while improving analytical and development skills.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 px-6 text-center max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-b from-white to-amber-50/40 border border-amber-900/10 rounded-3xl p-10 md:p-14 shadow-xl shadow-amber-950/5">
          <h2 className="text-3xl md:text-4xl font-black text-amber-950 mb-4">
            Let’s Connect
          </h2>
          <p className="text-stone-600 mb-10 text-base max-w-lg mx-auto font-medium">
            Open for internships, tech collaborations, and engineering opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Email */}
            <a
              href="mailto:diyaapoulkar@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-amber-900/20 hover:border-amber-700 hover:bg-amber-50/60 transition duration-300 shadow-sm flex items-center justify-center gap-3 font-bold text-amber-950"
            >
              <span className="text-xl">📧</span>
              <span>diyaapoulkar@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/diya-poulkar-05721037a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-950 text-amber-50 hover:bg-amber-900 transition duration-300 shadow-md flex items-center justify-center gap-3 font-bold"
            >
              <span className="text-xl">🔗</span>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}