import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay with Link */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors transform hover:scale-105"
          >
            View Project →
          </a>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;