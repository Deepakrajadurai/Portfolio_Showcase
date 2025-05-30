
import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "VEHICLE BREAKDOWN ASSISTANCE SYSTEM",
      description: "A comprehensive system designed to provide immediate assistance during vehicle breakdowns, featuring real-time location tracking and emergency response coordination.",
      technologies: ["IoT", "GPS", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "INTELLIGENCE ADAPTIVE PARKING SYSTEM USING IOT",
      description: "An intelligent parking management system that uses IoT sensors to optimize parking space allocation and provide real-time availability updates.",
      technologies: ["IoT", "Python", "Sensors", "MongoDB"],
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "RETRIEVAL-AUGMENTED GENERATION WITH REAL-TIME DATA",
      description: "Advanced AI system implementing RAG architecture to provide accurate responses using real-time data retrieval and generation capabilities.",
      technologies: ["Python", "AI/ML", "RAG", "API"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "HUMAN MACHINE INTERACTION PROJECT WITH REAL TIME ECONOMICS DATA",
      description: "Interactive system facilitating seamless human-machine interaction while processing and displaying real-time economic data and market trends.",
      technologies: ["JavaScript", "Real-time APIs", "Data Visualization", "UI/UX"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                    project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1"
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            More exciting projects are in development. Check back soon for updates!
          </p>
          <Button
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
