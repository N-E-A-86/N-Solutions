'use client';

import { motion } from 'motion/react';
import { MapPin, Truck, Clock, BarChart3, Navigation, Users, Target, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Logistics() {
  return (
    <section id="casos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Resultados de <span className="neon-text-yellow">Impacto Real</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transformamos operaciones complejas en flujos digitales eficientes. Conoce los pilares de mejora que implementamos en cada solución.
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
                alt="Dashboard de Operaciones"
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-transparent lg:bg-gradient-to-t lg:from-[#0D0D0D]"></div>

              {/* Overlay UI Elements */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-xl border-[#FFD700]/30 backdrop-blur-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                      <Navigation size={18} className="text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Optimización de Recursos</p>
                      <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Intelligent Dispatch</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#FFD700] px-2 py-1 bg-[#FFD700]/10 rounded border border-[#FFD700]/20">STABLE</span>
                </div>
                <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "88%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FFD700] to-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-xs font-bold mb-6 w-fit">
                MÉTRICAS CLAVE
              </div>
              <h3 className="text-3xl font-bold mb-4">Eficiencia Operativa 360°</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nuestras implementaciones permiten el control total de la fuerza laboral y los activos, eliminando cuellos de botella mediante algoritmos de asignación inteligente.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Desarrollamos sistemas de gestión avanzada que permiten el monitoreo de activos en tiempo real, la optimización de rutas logísticas y la reducción drástica de tiempos operativos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 glass-panel rounded-xl border-l-2 border-l-[#00E5FF]">
                  <div className="flex items-center gap-2 text-[#00E5FF] mb-1">
                    <Users size={16} />
                    <span className="font-bold text-lg">Turnos Inteligentes</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-tight">Asignación automática de personal basada en demanda y disponibilidad.</p>
                </div>

                <div className="p-4 glass-panel rounded-xl border-l-2 border-l-[#FFD700]">
                  <div className="flex items-center gap-2 text-[#FFD700] mb-1">
                    <Target size={16} />
                    <span className="font-bold text-lg">Objetivos Semanales</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-tight">Tracking individual por empleado con dashboards de cumplimiento dinámico.</p>
                </div>

                <div className="p-4 glass-panel rounded-xl border-l-2 border-l-white/20">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <ShieldCheck size={16} />
                    <span className="font-bold text-lg">Control de Calidad</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-tight">Auditoría en tiempo real de cada proceso operativo crítico.</p>
                </div>

                <div className="p-4 glass-panel rounded-xl border-l-2 border-l-white/20">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <BarChart3 size={16} />
                    <span className="font-bold text-lg">+45% ROI</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-tight">Retorno de inversión acelerado mediante la reducción de errores manuales.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
