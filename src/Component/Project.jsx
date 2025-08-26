import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'A Landing Page for Law Firm',
      description: 'A landing page for law firm created using React-js and Tailwind Css, simple, clean and responsive.',
      image: '🌐',
      technologies: ['React', 'Javascript', 'TailwindCSS'],
      github: '#',
      demo: 'https://darbhangalegalservices.com/' 
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and reporting features.',
      image: '📊',
      technologies: ['Next.js', 'PostgreSQL', 'Chart.js', 'Tailwind'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with drag-and-drop functionality, team collaboration, and progress tracking.',
      image: '✅',
      technologies: ['React', 'Express', 'Socket.io', 'MongoDB'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I’ve worked on recently.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 border rounded-xl hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-900"
              >
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <Github size={16} /> Code
                  </a> */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
