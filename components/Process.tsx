'use client';

import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Entendemos tu negocio, tus objetivos y tu audiencia para definir la estrategia perfecta.'
  },
  {
    number: '02',
    title: 'Diseño',
    description: 'Creamos prototipos y diseños que reflejan tu marca con estética moderna y funcional.'
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Construimos con tecnología de punta, código limpio y rendimiento optimizado.'
  },
  {
    number: '04',
    title: 'Lanzamiento',
    description: 'Deploy, testing, optimización y soporte continuo para que todo funcione perfecto.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 relative overflow-hidden bg-[#0D0D0D]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-cyan-500 tracking-[0.2em] uppercase mb-4 block"
          >
            PROCESO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Cómo trabajamos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            Un proceso claro, eficiente y colaborativo para llevar tu proyecto del concepto al lanzamiento.
          </motion.p>
        </div>

        <div className="relative">
          {/* Main Connector Line (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="absolute top-0 left-0 w-full md:w-full h-[2px] md:h-[1px] bg-gradient-to-r from-orange-500/0 via-orange-500/80 to-orange-500/0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group pt-4 md:pt-0"
              >
                {/* Vertical line indicator for mobile */}
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-orange-500/50 to-transparent md:hidden"></div>

                <div className="relative z-10 pl-6 md:pl-0">
                  <span
                    className="text-7xl font-black absolute -top-12 left-0 transition-all duration-300 opacity-30 pointer-events-none select-none group-hover:opacity-100 group-hover:scale-110 text-cyan-400 group-hover:text-orange-600"
                    style={{
                      WebkitTextFillColor: 'transparent',
                      WebkitTextStrokeWidth: '1.5px',
                      WebkitTextStrokeColor: 'currentColor'
                    }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 relative drop-shadow-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
