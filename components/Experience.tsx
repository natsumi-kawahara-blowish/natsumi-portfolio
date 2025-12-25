import React from 'react';
import { experiences } from '../data';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white/50 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-heading font-heading mb-3">Work History</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-muted mt-4 text-sm tracking-widest uppercase">My Journey</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-soft transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-primary shadow-sm transform -translate-x-1/2 translate-y-6 z-10"></div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div className={`bg-white p-6 rounded-2xl border border-soft/50 shadow-sm hover:shadow-md transition-all duration-300 group ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                         <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-full w-fit">
                            {exp.period}
                         </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-heading font-heading mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="text-sm text-muted mb-4 font-medium">
                        {exp.role}
                    </div>
                    
                    <p className="text-text/80 text-sm mb-5 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-5 bg-background/50 p-4 rounded-xl">
                        {exp.points.map((point, i) => (
                            <li key={i} className="text-xs text-text/70 flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 bg-secondary rounded-full flex-shrink-0"></span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map(tech => (
                        <span key={tech} className="px-2.5 py-1 bg-white text-muted text-xs rounded-md border border-soft font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;