import { Playfair_Display, Inter } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://nashabistro.ca'),
  title: 'Nasha Bistro — Coffee by Day, Beats by Night',
  description: 'Specialty coffee, small plates, and weekend DJ sessions.',
  openGraph: {
    title: 'Nasha Bistro',
    description: 'Specialty coffee, small plates, and weekend DJ sessions.',
    url: 'https://nashabistro.ca',
    siteName: 'Nasha Bistro',
    type: 'website',
  },
};

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} bg-noir`}>
      <body className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
