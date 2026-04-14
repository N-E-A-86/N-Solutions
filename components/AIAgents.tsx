'use client';

import { motion } from 'motion/react';
import { Bot, Cpu, Zap, Globe, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function AIAgents() {
  return (
    <section id="ai-agents" className="py-24 relative overflow-hidden bg-black/30">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
                <span className="text-xs font-mono text-[#00E5FF] tracking-wider uppercase">Inteligencia Artificial</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Tu fuerza laboral <br />
                <span className="neon-text-cyan">potenciada por IA</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Desplegamos agentes inteligentes capaces de razonar, aprender y ejecutar procesos complejos. 
                Desde atención al cliente autónoma hasta análisis predictivo en tiempo real.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Bot, title: 'Agentes Autónomos', desc: 'Sistemas que toman decisiones basadas en objetivos.' },
                  { icon: Zap, title: 'Procesamiento Real-time', desc: 'Análisis de datos a la velocidad del pensamiento.' },
                  { icon: ShieldCheck, title: 'Seguridad Enterprise', desc: 'IA ética y privada para tus datos más sensibles.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#00E5FF]/50 transition-colors">
                      <item.icon className="text-[#00E5FF]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden rounded-3xl glass-panel group"
            >
              <Image 
                src="/images/ai-viz.png"
                alt="AI Neural Visualization"
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-transparent to-transparent"></div>
              
              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 glass-panel p-3 rounded-xl border-[#00E5FF]/20 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] uppercase font-mono text-white tracking-widest leading-none">Live Analysis</span>
              </motion.div>

              <motion.div 
                animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 glass-panel p-3 rounded-xl border-[#00E5FF]/20 flex items-center gap-3 backdrop-blur-md"
              >
                <Globe size={14} className="text-[#00E5FF]" />
                <span className="text-[10px] uppercase font-mono text-white tracking-widest leading-none">Global Syncing</span>
              </motion.div>

              {/* Central AI Brain Effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-1/2 h-1/2 bg-[#00E5FF]/10 rounded-full blur-[60px] animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
