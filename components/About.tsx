import React from 'react';
import { profile } from '../data';
import { motion } from 'framer-motion';
import { Zap, Server, Users } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const icons = [Zap, Server, Users];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" />
        <p className="text-muted text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          営業職の経験と技術力を掛け合わせ、<br/>
          円滑なチーム開発と高品質な実装の両面から貢献します。
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-soft/30"
          >
            <h3 className="text-xl font-bold text-heading mb-6 font-heading border-b border-soft/30 pb-4">
              <span className="text-primary mr-2">●</span>
              Bridge between Business & Tech
            </h3>
            <div className="space-y-4 text-text/90 leading-relaxed">
              <p>
                {profile.summary}
              </p>
              <p>
                単にコードを書くだけでなく、「誰のために、なぜ作るのか」を大切にしています。
                Laravelによる堅牢なバックエンド設計から、React/TypeScriptによる使い心地の良いフロントエンド実装まで、
                一気通貫で担当できることが私の強みです。
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {profile.strengths.map((strength, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-soft/30 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="mt-1 p-3 bg-soft/30 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-heading mb-2 group-hover:text-primary transition-colors">{strength.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;