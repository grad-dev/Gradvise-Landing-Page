import { Inter, Playfair_Display } from 'next/font/google';

import MainFooter from '@/components/Footer';
import MainNavbar from '@/components/Navbar';
import { ThemeProvider } from '@/providers/theme';
import '@/styles/globals.css';
import type { ChildrenProps } from '@/types';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: {
    default: 'Plateio | Restaurant Management Software & Revenue Platform',
    template: '%s | Plateio',
  },
  description:
    'Plateio is the all-in-one restaurant management platform. Smart menus, automated email & SMS marketing, guest CRM, real-time analytics, and Kitchen Display System — built for modern restaurants.',
  keywords: [
    'restaurant management software',
    'restaurant POS system',
    'restaurant marketing automation',
    'kitchen display system',
    'restaurant CRM',
    'restaurant analytics',
    'restaurant revenue software',
    'restaurant guest profiles',
    'restaurant loyalty program',
  ],
  authors: [{ name: 'Plateio' }],
  creator: 'Plateio Inc.',
  metadataBase: new URL('https://plateio.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://plateio.in',
    siteName: 'Plateio',
    title: 'Plateio | Restaurant Management Software & Revenue Platform',
    description:
      'The all-in-one restaurant management platform. Smart menus, automated marketing, guest CRM, and real-time analytics — start your free 30-day trial today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Plateio — Restaurant Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plateio | Restaurant Management Software',
    description:
      'Smart menus, automated marketing, guest CRM, and real-time analytics for modern restaurants.',
    creator: '@plateio',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/vercel.svg',
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <div className="flex min-h-screen bg-(--background) w-full overflow-x-hidden">
            <div className="flex-1 flex flex-col w-full">
              <MainNavbar />
              <main className="flex-1 w-full overflow-x-hidden">{children}</main>
              <MainFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
