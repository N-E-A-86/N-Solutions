'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Glowing Orb with breathing animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Animated SVG Text */}
          <div className="w-full max-w-[400px] mb-6">
            <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto overflow-visible">
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="font-sans font-bold text-[60px] tracking-tight">
                <tspan className="animated-n">N</tspan>
                <tspan className="animated-solutions">-Solutions</tspan>
              </text>
            </svg>
          </div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
            <span className="text-xs font-mono text-gray-300 tracking-wider">SISTEMAS INTELIGENTES & AUTOMATIZACIÓN</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Evoluciona tu negocio con <br className="hidden md:block" />
          <span className="neon-text-cyan">Tecnología a Medida</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Desarrollo Full Stack, Agentes de IA y Automatización de procesos. 
          Transformamos operaciones complejas en ecosistemas digitales eficientes y escalables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group relative px-8 py-4 bg-[#00E5FF] text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-2"
          >
            <span className="relative z-10">Iniciar Proyecto</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </a>
          
          <a
            href="#servicios"
            className="px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center gap-2"
          >
            Explorar Soluciones
          </a>
        </motion.div>
      </div>
    </section>
  );
}
