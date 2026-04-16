'use client';

import { motion } from 'motion/react';
import { MessageSquare, Database, Receipt, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Automation() {
  return (
    <section id="automatizacion" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                <span className="text-xs font-mono text-[#FFD700] tracking-wider uppercase">Optimización Operativa</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Automatiza lo aburrido, <br />
                <span className="neon-text-yellow">escala tu negocio</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Conectamos tus herramientas favoritas para que el flujo de datos sea invisible y eficiente.
                Dejamos de lado las tareas repetitivas para que tu equipo se enfoque en la innovación.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Data Flow', desc: 'Sincronización total' },
                  { title: 'Smart Bots', desc: 'Atención inteligente' },
                  { title: 'Auto-Billing', desc: 'Facturación sin errores' },
                  { title: 'smart sync', desc: 'Integración retroactiva' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-4 glass-panel rounded-xl border-l-2 border-l-[#FFD700]/50">
                    <span className="text-white font-bold text-sm">{item.title}</span>
                    <span className="text-gray-400 text-xs">{item.desc}</span>
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
              className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-3xl glass-panel group"
            >
              <Image
                src="/images/automation-viz.png"
                alt="Visualización de Automatización"
                fill
                className="object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>

              {/* Animated UI Nodes overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="self-start glass-panel p-4 rounded-xl border-[#FFD700]/30 max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center">
                      <MessageSquare size={16} className="text-[#25D366]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-white tracking-widest">Inbound</span>
                  </div>
                  <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#25D366]"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="self-end glass-panel p-4 rounded-xl border-[#00E5FF]/30 max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/20 flex items-center justify-center">
                      <Database size={16} className="text-[#00E5FF]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-white tracking-widest">Database</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 0, 1, 1, 0, 1].map((n, i) => (
                      <span key={i} className="text-[8px] font-mono text-[#00E5FF] animate-pulse">{n}</span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Central Pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FFD700] rounded-full blur-xl opacity-20 animate-ping"></div>
                  <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/50 flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="text-[#FFD700]" size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
