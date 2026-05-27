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
  title: 'Gradvise — Restaurant Revenue OS',
  description:
    'Turn your restaurant into a revenue machine. Smart menus, automated CRM, and targeted upsells for modern dining.',
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
