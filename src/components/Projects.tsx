import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "WordPress Media Website",
    description: "A responsive website, re-built and re-designed for BronxNet Community Television",
    image: "https://i.postimg.cc/nhq0PJML/Bronx-Net-Site-Image.png",
    tags: ["JavaScript", "CSS","PHP", "MariaDB"],
    githubUrl: "https://github.com/LEEX0101",
    liveUrl: "https://bronxnet.org"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a
          href={project.liveUrl}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ExternalLink size={20} className="mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default Projects;