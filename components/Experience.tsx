import React from 'react';
import { experiences } from '../data';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import ExperienceCard from './common/ExperienceCard';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Work History" subtitle="My Journey" className="mb-20" />

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
              >
                <ExperienceCard experience={exp} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;