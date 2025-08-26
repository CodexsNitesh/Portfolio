import React from "react";
import Git from "../assets/git.png";
import ReactLogo from "../assets/React.gif";
import NodeLogo from "../assets/Nodejs.png";
import JsLogo from "../assets/JS.png";
import TsLogo from "../assets/TS.png";
import MongoLogo from "../assets/MongoDb.png";
import ExpressLogo from "../assets/expressjs.png";
import SqlLogo from "../assets/sql.png";

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: ReactLogo },
    { name: "Node.js", icon: NodeLogo },
    { name: "JavaScript", icon: JsLogo },
    { name: "TypeScript", icon: TsLogo },
    { name: "MongoDB", icon: MongoLogo },
    { name: "Express", icon: ExpressLogo },
    { name: "SQL", icon: SqlLogo },
    { name: "Git", icon: Git },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-black scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-slide gap-8 w-max">
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 backdrop-blur-sm 
                           rounded-xl shadow-md hover:shadow-lg transition-transform 
                           transform hover:-translate-y-1 duration-300 min-w-[120px]"
              >
                <div className="mb-2">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="font-semibold text-white text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
