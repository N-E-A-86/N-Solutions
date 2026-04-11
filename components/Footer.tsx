import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[#0D0D0D] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Logo />
          <p className="text-gray-400 text-sm mt-4 text-center md:text-left">
            Diseño web, automatización e Inteligencia Artificial para empresas que miran al futuro.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-[#00E5FF] transition-colors">Términos</a>
          <a href="#" className="hover:text-[#00E5FF] transition-colors">Privacidad</a>
          <a href="#" className="hover:text-[#00E5FF] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#00E5FF] transition-colors">GitHub</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} N-Solutions Tech. Todos los derechos reservados.
      </div>
    </footer>
  );
}
