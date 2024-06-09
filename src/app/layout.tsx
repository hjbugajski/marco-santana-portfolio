import { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import './globals.css';
import Footer from '@/components/footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Marco Santana',
  description: 'Photography by Marco Santana.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
