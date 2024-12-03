import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from './types';

const Card = ({ project }: { project: Project }) => (
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
          href={project.githubUrl}
          className="flex items-center text-gray-600 hover:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} className="mr-2" />
          Code
        </a>
        <a
          href={project.liveUrl}
          className="flex items-center text-gray-600 hover:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={20} className="mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default Card;