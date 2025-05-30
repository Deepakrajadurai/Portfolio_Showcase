
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-400" },
        { name: "React", level: 85, color: "from-blue-400 to-cyan-400" },
        { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-400" },
        { name: "Figma", level: 75, color: "from-purple-400 to-pink-400" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 88, color: "from-green-400 to-blue-400" },
        { name: "Node.js", level: 82, color: "from-green-400 to-green-600" },
        { name: "SQL", level: 80, color: "from-blue-400 to-purple-400" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85, color: "from-orange-400 to-red-400" },
        { name: "Linux", level: 70, color: "from-gray-400 to-gray-600" },
        { name: "Docker", level: 65, color: "from-blue-400 to-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
