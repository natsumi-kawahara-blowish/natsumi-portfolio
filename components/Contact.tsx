import React from 'react';
import { profile } from '../data';
import { Mail, ArrowRight, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-white">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-6 text-center">
        
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-heading font-heading mb-6">
              Let's build something <br/>
              <span className="text-gradient">wonderful</span> together.
            </h2>
            
            <p className="text-muted text-lg mb-12 leading-relaxed">
              現在、新しいプロジェクトへの参画を希望しております。<br/>
              私のスキルセットが少しでもお役に立てそうでしたら、<br className="hidden md:block"/>
              まずはお気軽にご連絡ください。
            </p>

            <div className="bg-background rounded-3xl p-10 shadow-sm border border-soft/50">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-primary mb-6">
                        <Mail size={32} />
                    </div>
                    <a 
                        href={`mailto:${profile.email}`} 
                        className="text-xl md:text-2xl font-bold text-heading hover:text-primary transition-colors flex items-center gap-3 mb-2"
                    >
                        {profile.email}
                        <ArrowRight size={20} className="text-secondary" />
                    </a>
                    <p className="text-muted text-sm">Usually reply within 24 hours.</p>
                </div>

                <div className="mt-10 pt-8 border-t border-soft/30 grid md:grid-cols-2 gap-6 text-sm text-muted">
                    <div className="flex items-center justify-center gap-2">
                        <MapPin size={16} className="text-tertiary" />
                        <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>Available for Full-time / Freelance</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;