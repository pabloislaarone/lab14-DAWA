import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';

// Fuentes alojadas en el proyecto (variables)
const sora = localFont({
  src: '../fonts/Sora-Variable.woff2',
  weight: '100 800',
  display: 'swap',
  variable: '--font-sora',
});

const inter = localFont({
  src: '../fonts/Inter-Variable.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter',
});

const jetbrains = localFont({
  src: '../fonts/JetBrainsMono-Variable.woff2',
  weight: '100 800',
  display: 'swap',
  variable: '--font-jetbrains',
});

export const viewport: Viewport = {
  themeColor: '#0b0b0e',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: [
    'Pablo Isla',
    'desarrollador',
    'full stack',
    'desarrollador web',
    'desarrollador móvil',
    'spring boot',
    'microservicios',
    'next.js',
    'react',
    'kotlin',
    'portafolio',
    'TECSUP',
    'Lima',
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: personalInfo.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Portafolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="flex flex-col min-h-screen">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded-full"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
