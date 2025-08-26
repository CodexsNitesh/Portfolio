import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Nitesh Pandit
            </h3>
            <p className="text-gray-400 leading-relaxed">
              MERN Stack Developer passionate about creating amazing web
              experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/MegXux"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/nitesh-pandit-478a0a266/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/nites.h7012?igsh=eG4ycWw0YXlucnhr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
