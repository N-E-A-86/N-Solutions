'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.05)] py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-sm text-gray-200 hover:text-[#00E5FF] transition-colors">Servicios</a>
          <a href="#ai-agents" className="text-sm text-gray-200 hover:text-[#00E5FF] transition-colors">Agentes IA</a>
          <a href="#automatizacion" className="text-sm text-gray-200 hover:text-[#00E5FF] transition-colors">Automatización</a>
          <a href="#casos" className="text-sm text-gray-200 hover:text-[#00E5FF] transition-colors">Casos de Uso</a>
          <a
            href="#contacto"
            className="text-sm font-medium px-5 py-2 rounded-full neon-border-cyan text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-all duration-300 hover:scale-105"
          >
            Consulta Gratuita
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] p-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <a href="#servicios" className="text-gray-100 font-medium hover:text-[#00E5FF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
              <a href="#ai-agents" className="text-gray-100 font-medium hover:text-[#00E5FF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Agentes IA</a>
              <a href="#automatizacion" className="text-gray-100 font-medium hover:text-[#00E5FF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Automatización</a>
              <a href="#casos" className="text-gray-100 font-medium hover:text-[#00E5FF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Casos de Uso</a>
              <a
                href="#contacto"
                className="text-center font-medium px-5 py-3 rounded-lg neon-border-cyan text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consulta Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
