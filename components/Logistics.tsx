'use client';

import { motion } from 'motion/react';
import { MapPin, Truck, Clock, BarChart3 } from 'lucide-react';
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
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
              <Image
                src="https://picsum.photos/seed/logistics/800/600"
                alt="Dashboard de Logística"
                fill
                className="object-cover opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-transparent lg:bg-gradient-to-t lg:from-[#0D0D0D]"></div>
              
              {/* Overlay UI Elements */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl border-[#00E5FF]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">Ruta Optimizada - Unidad 04</span>
                  <span className="text-xs text-[#00E5FF] flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span> En tránsito</span>
                </div>
                <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00E5FF] w-[75%]"></div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full text-xs font-bold mb-6 w-fit">
                PROYECTO DESTACADO
              </div>
              <h3 className="text-3xl font-bold mb-4">Plataforma "Capitán Frío"</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Desarrollo de un sistema integral de logística de precisión. Implementamos rastreo GPS en tiempo real y dashboards de control para optimizar flotas de reparto, ideal para supermercados y transporte de cadena de frío.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-[#00E5FF] mb-2">
                    <Clock size={20} />
                    <span className="font-bold text-2xl">-30%</span>
                  </div>
                  <p className="text-sm text-gray-400">Reducción en tiempos de entrega</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#FFD700] mb-2">
                    <BarChart3 size={20} />
                    <span className="font-bold text-2xl">+45%</span>
                  </div>
                  <p className="text-sm text-gray-400">Eficiencia operativa</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin size={20} />
                    <span className="font-bold text-xl">Real-time</span>
                  </div>
                  <p className="text-sm text-gray-400">Tracking GPS de alta precisión</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white mb-2">
                    <Truck size={20} />
                    <span className="font-bold text-xl">Escalable</span>
                  </div>
                  <p className="text-sm text-gray-400">Gestión de flotas masivas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
