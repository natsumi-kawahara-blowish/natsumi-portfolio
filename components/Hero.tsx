import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { scrollToSectionById } from '../utils/scrollToSection';
import SocialLinks from './common/SocialLinks';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      
      {/* Background Decor - Soft Watercolor Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-soft/40 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-tertiary/30 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-pale/30 rounded-full blur-[60px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
             <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl shadow-primary/20 animate-float bg-transparent relative z-10">
               <img 
                 src="/logo.png" 
                 alt="Natsumi Omura Logo" 
                 className="w-full h-full object-cover scale-110"
               />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-white shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-sm font-medium tracking-wide">Available for new projects</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6 text-heading"
          >
            Hello, I'm <br />
            <span className="text-gradient drop-shadow-sm">
              Ohmura Natsumi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted font-medium mb-10 max-w-2xl leading-relaxed"
          >
            ビジネスの解像度を、プロダクトの完成度へ。<br/>
            営業経験を武器に、顧客の意図を「<span className="text-gradient font-bold">勝てる仕様</span>」へと昇華させます。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
             <button 
                onClick={() => scrollToSectionById('experience')}
                className="px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:bg-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
             >
               View My Work
             </button>
             
             <button 
                onClick={() => scrollToSectionById('contact')}
                className="px-8 py-3.5 bg-white text-heading font-bold rounded-full border border-soft shadow-sm hover:bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
             >
               Contact Me
             </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 mb-4"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted/40"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;