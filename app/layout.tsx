import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Robin Oppenstam - Portfolio',
  description: 'Full Stack Developer & Web3 fanatic',
  openGraph: {
    title: 'Robin Oppenstam - Portfolio',
    description: 'Full Stack Developer & Web3 fanatic',
    images: [
      {
        url: '/ProfilePicture.png',
        width: 1200,
        height: 630,
        alt: 'Robin Oppenstam Profile Picture',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robin Oppenstam - Portfolio',
    description: 'Full Stack Developer & Web3 fanatic',
    images: ['/ProfilePicture.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}