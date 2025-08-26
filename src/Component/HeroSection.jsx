import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero.json"; // put your JSON file in src/assets/

const HeroSection = ({ setActiveSection }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["MERN Stack Developer", "Web Developer"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center flex-col md:flex-row">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-400">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Nitesh Pandit
              </h1>
              <div className="text-2xl md:text-3xl font-semibold h-12">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Hey! I am a MERN Stack Developer specializing in building scalable
              applications with React, Node.js and cutting-edge tools.
            </p>
          </div>

          <div className="relative flex justify-center">
            <Lottie
              animationData={heroAnimation}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
