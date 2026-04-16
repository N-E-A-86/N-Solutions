'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, children }: LegalModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0D0D0D]/80 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl max-h-[80vh] bg-[#0D0D0D] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col pointer-events-auto relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5"
              >
                <X size={20} />
              </button>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold mb-8 pr-12">
                {title === 'Privacidad' ? (
                  <>Política de <span className="neon-text-cyan">Privacidad</span></>
                ) : (
                  <>Términos de <span className="neon-text-cyan">Servicio</span></>
                )}
              </h2>

              {/* Content (Scrollable) */}
              <div className="overflow-y-auto custom-scrollbar pr-4 text-gray-400 text-sm md:text-base leading-relaxed space-y-6">
                {children}
              </div>

              {/* Footer Gradient Shadow for scroll indication */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
