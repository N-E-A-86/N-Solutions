'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Introduce un correo electrónico válido'),
  company: z.string().optional(),
  message: z.string().min(10, 'Cuéntanos un poco más sobre tu desafío (mín. 10 caracteres)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [processStep, setProcessStep] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Terminal-style simulation steps
    const steps = [
      'Iniciando conexión segura...',
      'Analizando requerimientos...',
      'Asignando arquitecto de guardia...',
      'Enviando payload a N-Solutions Ops...',
    ];

    for (const step of steps) {
      setProcessStep(step);
      await new Promise(resolve => setTimeout(resolve, 600));
    }
    
    // Final simulation
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 4000);
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="input-group">
                    <input 
                      {...register('name')} 
                      type="text" 
                      id="name" 
                      placeholder=" " 
                      className={errors.name ? 'border-red-500/50' : ''}
                    />
                    <label htmlFor="name">Nombre Completo</label>
                  </div>
                  {errors.name && (
                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="input-group">
                    <input 
                      {...register('email')} 
                      type="email" 
                      id="email" 
                      placeholder=" " 
                      className={errors.email ? 'border-red-500/50' : ''}
                    />
                    <label htmlFor="email">Correo Electrónico</label>
                  </div>
                  {errors.email && (
                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="input-group">
                  <input {...register('company')} type="text" id="company" placeholder=" " />
                  <label htmlFor="company">Empresa / Proyecto (Opcional)</label>
                </div>
              </div>

              <div className="space-y-1">
                <div className="input-group">
                  <textarea 
                    {...register('message')} 
                    id="message" 
                    rows={4} 
                    placeholder=" " 
                    className={errors.message ? 'border-red-500/50' : ''}
                  ></textarea>
                  <label htmlFor="message">¿Qué desafío tecnológico quieres resolver?</label>
                </div>
                {errors.message && (
                  <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message.message}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-lg font-bold flex flex-col items-center justify-center gap-1 transition-all duration-300 relative overflow-hidden ${
                  isSuccess 
                    ? 'bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.4)]' 
                    : 'bg-[#00E5FF] text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-[1.01]'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div 
                      key="submitting"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Loader2 className="animate-spin" size={20} />
                        <span className="font-mono text-xs uppercase tracking-widest">Processing</span>
                      </div>
                      <span className="text-[10px] font-mono opacity-70 animate-pulse">{processStep}</span>
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={20} />
                      <span>Mensaje Enviado con Éxito</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={20} />
                      <span>Solicitar Consulta Gratuita</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Progress bar effect during submission */}
                {isSubmitting && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2.4, ease: "linear" }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 origin-left"
                  />
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
