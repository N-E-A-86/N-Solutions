'use client';

import { motion } from 'motion/react';
import { MapPin, Truck, Clock, BarChart3, Navigation } from 'lucide-react';
import Image from 'next/image';

export function Logistics() {
  return (
    <section id="casos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Casos de <span className="neon-text-cyan">Éxito</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones reales para problemas complejos. Así es como nuestra tecnología impacta en el mundo físico.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.1)]"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] group">
              <Image
                src="/images/logistics-viz.png"
                alt="Dashboard de Logística"
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-transparent lg:bg-gradient-to-t lg:from-[#0D0D0D]"></div>
              
              {/* Overlay UI Elements */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-xl border-[#00E5FF]/30 backdrop-blur-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00E5FF]/20 flex items-center justify-center">
                      <Navigation size={18} className="text-[#00E5FF]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Ruta Capitán Frío - U-04</p>
                      <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Dynamic Optimization</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#00E5FF] px-2 py-1 bg-[#00E5FF]/10 rounded border border-[#00E5FF]/20 animate-pulse">ACTIVE</span>
                </div>
                <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#00E5FF] to-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-xs font-bold mb-6 w-fit">
                ENTREGA FINALIZADA
              </div>
              <h3 className="text-3xl font-bold mb-4">Plataforma "Capitán Frío"</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Desarrollamos un ecosistema logístico completo. Desde rastreo GPS satelital hasta predicción de tiempos de entrega, permitiendo a la empresa escalar su operación con total visibilidad.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 glass-panel rounded-xl border-l-2 border-l-[#00E5FF]">
                  <div className="flex items-center gap-2 text-[#00E5FF] mb-1">
                    <Clock size={16} />
                    <span className="font-bold text-xl">-30%</span>
                  </div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Tiempo Entrega</p>
                </div>
                <div className="p-4 glass-panel rounded-xl border-l-2 border-l-[#FFD700]">
                  <div className="flex items-center gap-2 text-[#FFD700] mb-1">
                    <BarChart3 size={16} />
                    <span className="font-bold text-xl">+45%</span>
                  </div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Eficiencia</p>
                </div>
                <div className="p-4 glass-panel rounded-xl border-l-2 border-l-white/20">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <MapPin size={16} />
                    <span className="font-bold text-lg">GPS Live</span>
                  </div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Trazabilidad</p>
                </div>
                <div className="p-4 glass-panel rounded-xl border-l-2 border-l-white/20">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <Truck size={16} />
                    <span className="font-bold text-lg">Scalable</span>
                  </div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Multi-Flota</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
