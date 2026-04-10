'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contacto" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para <span className="neon-text-cyan">escalar</span>?
              </h2>
              <p className="text-gray-400">
                Déjanos tus datos y un arquitecto de software analizará tu caso sin costo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="input-group">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Nombre Completo</label>
                </div>
                <div className="input-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Correo Electrónico</label>
                </div>
              </div>
              
              <div className="input-group">
                <input type="text" id="company" placeholder=" " />
                <label htmlFor="company">Empresa / Proyecto</label>
              </div>

              <div className="input-group">
                <textarea id="message" rows={4} placeholder=" " required></textarea>
                <label htmlFor="message">¿Qué desafío tecnológico quieres resolver?</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSuccess 
                    ? 'bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.4)]' 
                    : 'bg-[#00E5FF] text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Procesando...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 size={20} />
                    <span>Mensaje Enviado</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Solicitar Consulta Gratuita</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
