// src/app/page.tsx

import Link from 'next/link'; // Keep Link import
import Image from 'next/image'; // Import Image for project screenshots

export default function Home() {
  // Define skills array for easier management
  const skills = {
    Languages: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    Frameworks: ["React", "Next.js"],
    Styling: ["Tailwind CSS", "CSS Modules"],
    Tools: ["Git", "GitHub", "VS Code", "Browser DevTools", "Figma", "Vercel"],
    Concepts: ["Responsive Design", "API Integration", "Version Control", "Basic Accessibility", "Web Performance Basics"]
  };

  // Define initial projects data (will expand later)
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "This website! Built with Next.js, TypeScript, and Tailwind CSS to showcase my skills and projects. Features responsive design and clean code.",
      imageUrl: "/images/portfolio-screenshot.png", // Placeholder image path
      liveUrl: "#", // Link to itself (or deployed URL later)
      // *** UPDATED repoUrl ***
      repoUrl: "https://github.com/jeffgicharu/jeff-gicharu-portfolio", // Using your username and project name
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    // Add Project 2 (Data Dashboard) here later
  ];


  return (
    // Main container
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">

      {/* Hero Section */}
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

      {/* About Me Section */}
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

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-4xl text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category}</h3>
              <ul className="space-y-2 text-left">
                {items.map((skill) => (
                  <li key={skill} className="text-gray-600 dark:text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-5xl text-center mb-16 md:mb-24"> {/* Increased max-width */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Projects
        </h2>
        {/* Grid container for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"> {/* Added flex flex-col */}
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                 {/* Replace with Next/Image later */}
                 <span className="text-gray-500 dark:text-gray-400">Image Placeholder</span>
                 {/* Example using Next/Image (requires setup in public folder):
                 <Image
                   src={project.imageUrl}
                   alt={`${project.title} screenshot`}
                   width={500} // Adjust as needed
                   height={300} // Adjust as needed
                   className="object-cover w-full h-full" // Ensure image covers the area
                 />
                 */}
              </div>
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p> {/* Added flex-grow */}
                {/* Tech Tags */}
                <div className="mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="mt-auto flex justify-start space-x-4"> {/* Pushes links to bottom */}
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

      {/* Contact Section will go below here */}

    </main>
  );
}
