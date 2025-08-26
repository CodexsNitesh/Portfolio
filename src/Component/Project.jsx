import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "A Landing Page for Law Firm",
      description:
        "A landing page for law firm created using React-js and Tailwind Css, simple, clean and responsive.",
      image: "🌐",
      technologies: ["React", "Javascript", "TailwindCSS"],
      github: "#",
      demo: "https://darbhangalegalservices.com/",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      description:
        "A responsive MERN stack ecommerce platform with seamless cart and payment integration.",
      image: "🛒",
      technologies: [
        "React.js",
        "MongoDB",
        "Node.js",
        "Express js",
        "Tailwind",
      ],
      github: "#",
      demo: "/ecompic",
    },
    {
      id: 3,
      title: "Inventory",
      description:
        "A collaborative inventory and task management system with real-time updates and drag-and-drop features.",
      image: "✅",
      technologies: ["React", "Express", "Socket.io", "MongoDB"],
      github: "#",
      demo: "/taskpic",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of recent projects showcasing my skills and experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
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
