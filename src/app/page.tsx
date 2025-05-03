// src/app/page.tsx

import Link from 'next/link';
import Image from 'next/image';
// Import necessary icons from react-icons
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma, FaLinkedin } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
// Using TbCode for VS Code as well now
import { TbBrandNextjs, TbCode, TbDevices, TbLink, TbBolt, TbAccessible } from 'react-icons/tb';
import { SiTailwindcss, SiVercel } from 'react-icons/si';
// Removed SiVscode import
import { MdEmail } from 'react-icons/md';

export default function Home() {
  // Define skills with corresponding icons
  const skills: { [category: string]: { name: string; icon: React.ComponentType<{ className?: string }> }[] } = {
    Languages: [
      { name: "JavaScript (ES6+)", icon: IoLogoJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt }
    ],
    Frameworks: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: TbBrandNextjs }
    ],
    Styling: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "CSS Modules", icon: FaCss3Alt }
    ],
    Tools: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      // *** Using TbCode for VS Code ***
      { name: "VS Code", icon: TbCode },
      { name: "Browser DevTools", icon: TbCode },
      { name: "Figma", icon: FaFigma },
      { name: "Vercel", icon: SiVercel }
    ],
    Concepts: [
      { name: "Responsive Design", icon: TbDevices },
      { name: "API Integration", icon: TbLink },
      { name: "Version Control", icon: FaGitAlt },
      { name: "Basic Accessibility", icon: TbAccessible },
      { name: "Web Performance Basics", icon: TbBolt }
    ]
  };

  // Define projects data (remains the same)
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "This website! Built with Next.js, TypeScript, and Tailwind CSS to showcase my skills and projects. Features responsive design and clean code.",
      imageUrl: "/images/portfolio-screenshot.png",
      liveUrl: "#",
      repoUrl: "https://github.com/jeffgicharu/jeff-gicharu-portfolio",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
  ];

  // Define contact info (remains the same)
  const contactEmail = "jkaharu2970@gmail.com";
  const githubUrl = "https://github.com/jeffgicharu";
  const linkedinUrl = "https://www.linkedin.com/in/jeff-gicharu-0924a4217/";

  return (
    // Main container
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">

      {/* Hero Section (remains the same) */}
      <section id="hero" className="text-center w-full max-w-4xl pt-16 md:pt-24 mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Jeff Gicharu
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          React/Next.js Developer building modern web experiences.
        </p>
        <Link
          href="/#projects"
          className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
        >
          View My Work
        </Link>
      </section>

      {/* About Me Section (remains the same) */}
      <section id="about" className="w-full max-w-4xl text-center mb-16 md:mb-24">
         <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>
        <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
           <p>
            Hello! I'm Jeff Gicharu, a passionate web developer from Kenya, specializing in building modern, responsive web applications with React and Next.js.
          </p>
          <p>
            With a strong foundation in software development principles from my Bachelor of Science in Computer Technology at Jomo Kenyatta University of Agriculture and Technology (JKUAT), I have a keen interest in creating engaging user experiences on the web.
          </p>
          <p>
            I thrive on solving problems and am committed to writing clean, efficient code and delivering high-quality results. Whether it's building websites or complex web applications, I'm excited to leverage the power of modern JavaScript frameworks to create impactful solutions.
          </p>
        </div>
      </section>

      {/* Skills Section - Updated with Icons */}
      <section id="skills" className="w-full max-w-4xl text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category}</h3>
              <ul className="space-y-3 text-left"> {/* Increased space-y */}
                {items.map((skill) => (
                  <li key={skill.name} className="flex items-center text-gray-600 dark:text-gray-300"> {/* Use flex to align icon and text */}
                    <skill.icon className="w-5 h-5 mr-3 flex-shrink-0 text-blue-500" /> {/* Icon component */}
                    <span>{skill.name}</span> {/* Skill name */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section (remains the same) */}
      <section id="projects" className="w-full max-w-5xl text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                 <Image
                   src={project.imageUrl}
                   alt={`${project.title} screenshot`}
                   layout="fill"
                   objectFit="cover"
                 />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-start space-x-4">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium">
                    Live Demo
                  </Link>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium">
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Updated with Icons */}
      <section id="contact" className="w-full max-w-4xl text-center pb-16 md:pb-24">
         <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I'm currently available for freelance opportunities. Feel free to reach out!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Email Link with Icon */}
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200"
          >
            <MdEmail className="w-5 h-5 mr-2" /> {/* Email Icon */}
            Email Me
          </a>
           {/* Social Links with Icons */}
           <div className="flex space-x-6"> {/* Increased spacing for icons */}
             <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
               <FaGithub className="w-7 h-7" /> {/* GitHub Icon */}
             </a>
             {linkedinUrl.startsWith('https://') && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
                  <FaLinkedin className="w-7 h-7" /> {/* LinkedIn Icon */}
                </a>
             )}
           </div>
        </div>
      </section>

    </main>
  );
}
