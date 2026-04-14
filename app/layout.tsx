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
  title: 'N-Solutions | Digital Solutions Agency',
  description: 'Agencia de soluciones digitales, desarrollo web, automatización e Inteligencia Artificial.',
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
