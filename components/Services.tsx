'use client';

import { motion } from 'motion/react';
import { Bot, BrainCircuit, Code2, Workflow } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} className="text-[#00E5FF]" />,
    title: 'Desarrollo Full Stack',
    description: 'Aplicaciones web robustas y escalables construidas con React, Next.js y Laravel. Arquitecturas modernas para alto rendimiento.',
    color: 'cyan'
  },
  {
    icon: <Workflow size={32} className="text-[#FFD700]" />,
    title: 'Automatización (n8n/Make)',
    description: 'Conexión de flujos de trabajo, APIs y bases de datos. Eliminamos tareas manuales para optimizar el tiempo de tu equipo.',
    color: 'yellow'
  },
  {
    icon: <Bot size={32} className="text-[#00E5FF]" />,
    title: 'Agentes de IA Autónomos',
    description: 'Chatbots avanzados y asistentes virtuales entrenados con tus datos para atención al cliente 24/7 y procesos internos.',
    color: 'cyan'
  },
  {
    icon: <BrainCircuit size={32} className="text-[#FFD700]" />,
    title: 'Análisis Predictivo',
    description: 'Implementación de modelos de Inteligencia Artificial para predecir tendencias, optimizar inventarios y mejorar la toma de decisiones.',
    color: 'yellow'
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Soluciones <span className="neon-text-cyan">Digitales Integrales</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combinamos código a medida, automatización inteligente e IA para crear plataformas que impulsan el crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-panel p-8 rounded-2xl h-full bg-[#0D0D0D] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 group ${
                service.color === 'cyan' 
                  ? 'hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.3),inset_0_0_10px_rgba(0,229,255,0.1)]' 
                  : 'hover:border-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.3),inset_0_0_10px_rgba(255,215,0,0.1)]'
              }`}
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
