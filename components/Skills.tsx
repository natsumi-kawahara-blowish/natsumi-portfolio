import React from 'react';
import { skills } from '../data';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-heading">{name}</span>
        <span className="text-xs text-muted font-medium">{level * 20}%</span>
      </div>
      <div className="w-full bg-soft/30 rounded-full h-2 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${(level / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = {
    frontend: "Frontend",
    backend: "Backend",
    infra: "DevOps & Tools",
  };

  const getSkillsByCategory = (cat: string) => {
    if (cat === 'infra') return skills.filter(s => s.category === 'infra' || s.category === 'tools');
    return skills.filter(s => s.category === cat);
  };

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <SectionTitle title="Technical Skills" gradientFrom="secondary" gradientTo="primary" />

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, label], index) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative circle - increased opacity/color for better visibility */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/30 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <h3 className="text-lg font-bold text-heading mb-8 pb-3 border-b border-soft flex items-center gap-2 font-heading relative z-10">
                <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                {label}
              </h3>
              <div className="relative z-10">
                {getSkillsByCategory(key).map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;