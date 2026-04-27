'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { LegalModal } from './LegalModal';

export function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);
  const [showToast, setShowToast] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('nsoulutiontech@gmail.com');
    setShowToast(true);
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const privacyContent = (
    <div className="space-y-6">
      <section>
        <h4 className="text-white font-bold mb-2">1. Información que recopilamos</h4>
        <p>A través de nuestro formulario de contacto, recopilamos únicamente información básica: nombre completo, correo electrónico, nombre de la empresa y los detalles de tu consulta tecnológica.</p>
      </section>
      <section>
        <h4 className="text-white font-bold mb-2">2. Uso de la información</h4>
        <p>Tus datos se utilizan exclusivamente para responder a tu solicitud, gestionar posibles proyectos y optimizar nuestra comunicación comercial. No utilizamos tus datos para campañas de marketing masivas sin tu consentimiento expreso.</p>
      </section>
      <section>
        <h4 className="text-white font-bold mb-2">3. Seguridad y Confidencialidad</h4>
        <p>Implementamos medidas de seguridad técnicas para proteger tu información. No vendemos, alquilamos ni compartimos tus datos personales con terceros externos a nuestros procesos de trabajo (como proveedores de servicios de hosting o email acreditados).</p>
      </section>
      <section>
        <h4 className="text-white font-bold mb-2">4. IA y Privacidad</h4>
        <p>Para la gestión de proyectos, podríamos procesar requerimientos técnicos mediante modelos de IA. Sin embargo, no incluimos datos identificables en los entrenamientos públicos de proveedores de IA externos.</p>
      </section>
    </div>
  );

  const termsContent = (
    <div className="space-y-6">
      <section>
        <h4 className="text-white font-bold mb-2">1. Naturaleza del Servicio</h4>
        <p>N-Solutions proporciona servicios de consultoría, desarrollo de software y automatización mediante Inteligencia Artificial. Al tratarse de sistemas probabilísticos, el cliente reconoce que el software puede requerir ajustes y supervisión humana constante.</p>
      </section>
      <section>
        <h4 className="text-white font-bold mb-2">2. Propiedad Intelectual</h4>
        <p>Una vez completado el pago final del proyecto, los entregables (código fuente y configuraciones específicas) se transfieren al cliente. N-Solutions retiene los derechos sobre sus herramientas, metodologías y componentes de software base reutilizables.</p>
      </section>
      <section>
        <h4 className="text-white font-bold mb-2">3. Responsabilidad</h4>
        <p>No seremos responsables de daños directos o indirectos derivados del uso de agentes de IA en procesos críticos sin la debida revisión por parte del cliente. La implementación final de cualquier automatización debe ser validada por el personal responsable del negocio.</p>
      </section>
      <section>
        <h4 className="text-white font-bold mb-2">4. Pagos y Terminación</h4>
        <p>Los proyectos se rigen por hitos de entrega. El incumplimiento en los pagos puede resultar en la suspensión de los servicios de soporte o acceso a las APIs configuradas.</p>
      </section>
    </div>
  );

  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[#0D0D0D] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo />
            <p className="text-violet-400 text-sm leading-relaxed opacity-80">
              Impulsando la eficiencia empresarial mediante agentes de IA, automatización de procesos y desarrollo de software de última generación. para empresas que miran al futuro.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Servicios</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#ai-agents" className="hover:text-[#00E5FF] transition-colors">Agentes de IA</a></li>
              <li><a href="#automatizacion" className="hover:text-[#00E5FF] transition-colors">Automatización n8n</a></li>
              <li><a href="#servicios" className="hover:text-[#00E5FF] transition-colors">Desarrollo Web</a></li>
              <li><a href="#casos" className="hover:text-[#00E5FF] transition-colors">Logística Inteligente</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#proceso" className="hover:text-[#00E5FF] transition-colors">Nuestro Proceso</a></li>
              <li><a href="#contacto" className="hover:text-[#00E5FF] transition-colors">Consulta Gratuita</a></li>
              <li>
                <button 
                  onClick={() => setModalType('terms')} 
                  className="hover:text-[#00E5FF] transition-colors cursor-pointer text-left"
                >
                  Términos de Servicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setModalType('privacy')} 
                  className="hover:text-[#00E5FF] transition-colors cursor-pointer text-left"
                >
                  Privacidad
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Conecta</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="relative">
                <button 
                  onClick={copyEmailToClipboard}
                  className="hover:text-[#00E5FF] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Email
                </button>
                {/* Toast Notification */}
                {showToast && (
                  <div className="absolute -top-10 left-0 animate-in fade-in duration-300 z-50">
                    <div className="glass-panel neon-border-cyan px-3 py-2 text-xs whitespace-nowrap flex items-center gap-2">
                      <span className="text-[#00E5FF]">✓</span>
                      <span className="text-[#00E5FF]">Email copiado</span>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a 
                  href="https://wa.me/5492254458517?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20N-Solutions." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#00E5FF] transition-colors flex items-center gap-2"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} N-Solutions Tech. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-[10px] text-gray-500 font-mono">
            <span>BASED IN ARGENTINA</span>
            <span className="w-1 h-1 rounded-full bg-gray-700 mt-1"></span>
            <span>SERVING GLOBALLY</span>
          </div>
        </div>
      </div>
      {/* Legal Modals */}
      <LegalModal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)} 
        title="Privacidad"
      >
        {privacyContent}
      </LegalModal>

      <LegalModal 
        isOpen={modalType === 'terms'} 
        onClose={() => setModalType(null)} 
        title="Términos"
      >
        {termsContent}
      </LegalModal>
    </footer>
  );
}
