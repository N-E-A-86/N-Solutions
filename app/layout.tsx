import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://n-solutions.com.ar'),
  title: 'N-Solutions | Innovación Digital: IA, Automatización y Desarrollo Web',
  description: 'Transformamos tu negocio con agentes de IA, automatización de procesos y desarrollo web de alto rendimiento. N-Solutions: Tu socio tecnológico para el futuro.',
  keywords: ['agencia digital', 'inteligencia artificial', 'automatización de procesos', 'desarrollo web', 'agentes IA', 'logística inteligente', 'N-Solutions'],
  authors: [{ name: 'N-Solutions Team' }],
  openGraph: {
    title: 'N-Solutions | Soluciones Digitales Inteligentes',
    description: 'Agentes de IA, automatización y desarrollo web de última generación.',
    url: 'https://n-solutions.com.ar',
    siteName: 'N-Solutions',
    images: [
      {
        url: '/images/ai-viz.png',
        width: 1200,
        height: 630,
        alt: 'N-Solutions AI visualization',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N-Solutions | Innovación Digital',
    description: 'Transformamos tu negocio con tecnología de punta.',
    images: ['/images/ai-viz.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <body className="bg-[#0D0D0D] text-white font-sans antialiased selection:bg-[#00E5FF] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
