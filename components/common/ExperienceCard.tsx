import React from 'react';
import { ExperienceItem } from '../../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-primary shadow-sm transform -translate-x-1/2 translate-y-6 z-10"></div>

      {/* Content Card */}
      <div className="ml-16 md:ml-0 md:w-1/2">
        <div className={`bg-white p-6 rounded-2xl border border-soft/50 shadow-sm hover:shadow-md transition-all duration-300 group ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-full w-fit">
              {experience.period}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-heading font-heading mb-1 group-hover:text-primary transition-colors">
            {experience.title}
          </h3>
          <div className="text-sm text-muted mb-4 font-medium">
            {experience.role}
          </div>
          
          <p className="text-text/80 text-sm mb-5 leading-relaxed">
            {experience.description}
          </p>

          <ul className="space-y-1.5 mb-5 bg-background/50 p-4 rounded-xl">
            {experience.points.map((point, i) => (
              <li key={i} className="text-xs text-text/70 flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-secondary rounded-full flex-shrink-0"></span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.techStack.map(tech => (
              <span key={tech} className="px-2.5 py-1 bg-white text-muted text-xs rounded-md border border-soft font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="md:w-1/2 hidden md:block"></div>
    </div>
  );
};

export default ExperienceCard;

