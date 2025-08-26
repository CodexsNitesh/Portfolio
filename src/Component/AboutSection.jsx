import React from "react";

const AboutSection = () => {
  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "8+", label: "Happy Clients" },
    { number: "10+", label: "Technologies" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate MERN stack developer with over 2 years of
              experience in creating dynamic and responsive web applications. My
              journey in web development started with a curiosity about how
              websites work, and it has evolved into a deep passion for creating
              exceptional digital experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in JavaScript technologies and have extensive
              experience with React, Node.js, Express, and MongoDB. I love
              solving complex problems and turning ideas into reality through
              clean, efficient code.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-200">
                  Frontend Development with React & Next.js
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-200">
                  Backend Development with Node.js & Express
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-200">
                  Database Design with MongoDB & SQL
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-200">
                  Cloud Deployment & DevOps
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-transform transform hover:-translate-y-1 duration-300"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
