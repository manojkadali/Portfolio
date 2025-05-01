import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  duration: string;
  points: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="card group overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {project.imageUrl && (
        <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      {!project.imageUrl && (
        <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Project Image Coming Soon</span>
        </div>
      )}
      
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.duration}</span>
        </div>
        <p className="text-gray-700 mb-4">{project.description}</p>
        
        <ul className="space-y-2 mb-4">
          {project.points.map((point, i) => (
            <li key={i} className="flex">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-secondary-100 text-secondary-800 px-2 py-1 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Github size={18} className="mr-1" />
            <span>Code</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
          >
            <ExternalLink size={18} className="mr-1" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;