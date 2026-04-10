'use client';

import { motion } from 'motion/react';
import { MessageSquare, Database, Receipt, ArrowRight } from 'lucide-react';

export function Automation() {
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
                <span className="text-xs font-mono text-[#FFD700] tracking-wider">WORKFLOWS & APIs</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Automatiza lo aburrido, <br />
                <span className="neon-text-yellow">escala lo importante</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Conectamos tus herramientas favoritas (WhatsApp, CRMs, ERPs) para que la información fluya sin intervención humana. Reduce errores, ahorra horas de trabajo y mejora la experiencia de tus clientes.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Sincronización de datos en tiempo real',
                  'Respuestas automáticas inteligentes',
                  'Generación de reportes y facturación',
                  'Integración con sistemas legacy'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col space-y-6">
                {/* Node 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center shrink-0">
                    <MessageSquare className="text-[#25D366]" />
                  </div>
                  <div className="flex-1 glass-panel px-4 py-3 rounded-lg">
                    <p className="text-sm font-medium text-white">Cliente escribe por WhatsApp</p>
                    <p className="text-xs text-gray-400 font-mono mt-1">Webhook Triggered</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-2">
                  <ArrowRight className="text-gray-500 rotate-90" />
                </div>

                {/* Node 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#00E5FF]/20 border border-[#00E5FF]/50 flex items-center justify-center shrink-0">
                    <Database className="text-[#00E5FF]" />
                  </div>
                  <div className="flex-1 glass-panel px-4 py-3 rounded-lg neon-border-cyan">
                    <p className="text-sm font-medium text-white">Agente IA clasifica y guarda en CRM</p>
                    <div className="w-full bg-black/50 h-1.5 rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#00E5FF]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-2">
                  <ArrowRight className="text-gray-500 rotate-90" />
                </div>

                {/* Node 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#FFD700]/20 border border-[#FFD700]/50 flex items-center justify-center shrink-0">
                    <Receipt className="text-[#FFD700]" />
                  </div>
                  <div className="flex-1 glass-panel px-4 py-3 rounded-lg">
                    <p className="text-sm font-medium text-white">Generación de Factura Automática</p>
                    <p className="text-xs text-gray-400 font-mono mt-1">Status: Success 200 OK</p>
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
