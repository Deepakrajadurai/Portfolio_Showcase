
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/fcdae278-5761-4ce6-bb85-a5c90880af77.png" 
                alt="Deepak Rajadurai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Deepak Rajadurai
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & Problem Solver
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative web solutions with modern technologies. 
            Specializing in JavaScript, Python, React, and Node.js to build scalable applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a href="#contact">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300">
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/deepak-288"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-rajadurai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:deepakrajadurai343@gmail.com"
            className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
