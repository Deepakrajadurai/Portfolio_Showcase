
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Deepak Rajadurai
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through code.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#skills" className="block text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
              <a href="#projects" className="block text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/deepak-288"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-rajadurai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:deepakrajadurai343@gmail.com"
                className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Always open to new opportunities and collaborations.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Deepak Rajadurai. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="mx-1 text-red-400" size={16} /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
