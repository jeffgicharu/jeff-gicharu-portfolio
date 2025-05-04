// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma, FaLinkedin } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandNextjs, TbCode, TbDevices, TbLink, TbBolt, TbAccessible, TbArrowRight, TbExternalLink } from 'react-icons/tb';
import { SiTailwindcss, SiVercel } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

// --- Component Start ---
export default function Home() {

  // --- Data Definitions ---
  // Skills Data with Icons
  const skills: { [category: string]: { name: string; icon: React.ComponentType<{ className?: string }> }[] } = {
    Languages: [ { name: "JavaScript (ES6+)", icon: IoLogoJavascript }, { name: "HTML5", icon: FaHtml5 }, { name: "CSS3", icon: FaCss3Alt } ],
    Frameworks: [ { name: "React", icon: FaReact }, { name: "Next.js", icon: TbBrandNextjs } ],
    Styling: [ { name: "Tailwind CSS", icon: SiTailwindcss }, { name: "CSS Modules", icon: FaCss3Alt } ],
    Tools: [ { name: "Git", icon: FaGitAlt }, { name: "GitHub", icon: FaGithub }, { name: "VS Code", icon: TbCode }, { name: "Browser DevTools", icon: TbCode }, { name: "Figma", icon: FaFigma }, { name: "Vercel", icon: SiVercel } ],
    Concepts: [ { name: "Responsive Design", icon: TbDevices }, { name: "API Integration", icon: TbLink }, { name: "Version Control", icon: FaGitAlt }, { name: "Basic Accessibility", icon: TbAccessible }, { name: "Web Performance Basics", icon: TbBolt } ]
  };

  // Projects Data
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "This website! Built with Next.js, TypeScript, and Tailwind CSS to showcase my skills and projects. Features responsive design and clean code.",
      imageUrl: "/images/portfolio-screenshot.png", // Ensure this image exists in public/images
      liveUrl: "https://jeff-gicharu-portfolio-3ip5.vercel.app", // Your live URL
      repoUrl: "https://github.com/jeffgicharu/jeff-gicharu-portfolio",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    // Add Project 2 placeholder here later if needed
  ];

  // Contact Info
  const contactEmail = "jkaharu2970@gmail.com";
  const githubUrl = "https://github.com/jeffgicharu";
  const linkedinUrl = "https://www.linkedin.com/in/jeff-gicharu-0924a4217/";

  // --- JSX Start ---
  return (
    // Main content wrapper
    <div className="flex flex-col items-center overflow-x-hidden">

      {/* Hero Section */}
      <section
        id="hero"
        className="w-full min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-16 md:py-24 relative overflow-hidden bg-white dark:bg-gray-900"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
          Jeff Gicharu
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          React/Next.js Developer building modern, responsive, and user-centric web experiences.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center bg-teal-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          View My Work <TbArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="w-full py-20 md:py-32 px-4 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Image Column - Updated */}
          <div className="md:col-span-1 flex justify-center">
            {/* Replaced placeholder div with Next/Image */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg">
              <Image
                // *** IMPORTANT: Update src if your image name/path is different ***
                src="/images/jeff-headshot.jpg"
                alt="Jeff Gicharu Headshot"
                layout="fill" // Fill the container
                objectFit="cover" // Cover the area, maintain aspect ratio
                priority // Optional: Load image sooner if it's above the fold
              />
            </div>
          </div>
          {/* Text Column */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
              <p>
                Hello! I&apos;m Jeff Gicharu, a passionate web developer from Kenya, specializing in building modern, responsive web applications with React and Next.js.
              </p>
              <p>
                With a strong foundation in software development principles from my Bachelor of Science in Computer Technology at Jomo Kenyatta University of Agriculture and Technology (JKUAT), I have a keen interest in creating engaging user experiences on the web.
              </p>
              <p>
                I thrive on solving problems and am committed to writing clean, efficient code and delivering high-quality results. Whether it&apos;s building websites or complex web applications, I&apos;m excited to leverage the power of modern JavaScript frameworks to create impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="w-full py-20 md:py-32 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">
            My Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-teal-500/10 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">{category}</h3>
                <ul className="space-y-4 text-left">
                  {items.map((skill) => (
                    <li key={skill.name} className="flex items-center text-gray-600 dark:text-gray-300 text-md hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200">
                      <skill.icon className="w-6 h-6 mr-4 flex-shrink-0 text-teal-500" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full py-20 md:py-32 px-4 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-teal-300 dark:hover:border-teal-600">
                <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                   <Image
                     src={project.imageUrl}
                     alt={`${project.title} screenshot`}
                     layout="fill"
                     objectFit="cover"
                     className="transition-transform duration-500 group-hover:scale-105"
                   />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-5 flex-grow text-left">{project.description}</p>
                  {/* Tech Tags */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 rounded-full px-3 py-1 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="mt-auto flex justify-start space-x-5">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200 font-medium transition-colors duration-200 group/link">
                      Live Demo <TbExternalLink className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </a>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200 font-medium transition-colors duration-200 group/link">
                      Source Code <FaGithub className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-20 md:py-32 px-4 bg-gray-50 dark:bg-gray-900"
      >
         <div className="container mx-auto max-w-3xl text-center">
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
            I&apos;m seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-6">
            {/* Email Button */}
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center bg-teal-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            >
              <MdEmail className="w-5 h-5 mr-2" />
              Email Me
            </a>
             {/* Social Links */}
             <div className="flex space-x-6">
               <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 transform hover:scale-110">
                 <FaGithub className="w-8 h-8" />
               </a>
               {linkedinUrl.startsWith('https://') && (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 transform hover:scale-110">
                    <FaLinkedin className="w-8 h-8" />
                  </a>
               )}
             </div>
          </div>
         </div>
      </section>

    </div> // End wrapper div
  );
}
// --- Component End ---
