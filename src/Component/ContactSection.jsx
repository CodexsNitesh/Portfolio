import React, { useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let’s talk!
          </p>
        </div>

        <div className="flex flex-col md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">niteshx7work@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MegXux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-gray-300 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/nitesh-pandit-478a0a266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-900 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://www.instagram.com/nites.h7012?igsh=eG4ycWw0YXlucnhr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-900 text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
