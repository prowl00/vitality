import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Preloader from '@/components/Preloader';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Colon Hydrotherapy & Lymphatic Drainage in Barrie | Vitality Source',
  description: 'Book a colon hydrotherapy or lymphatic drainage session in Barrie, Ontario. Vitality Source is a certified, private, solo-practitioner clinic — 3+ years serving the local community.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
