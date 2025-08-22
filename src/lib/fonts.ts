import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const neueMachina = localFont({
  src: [
    {
      path: '../fonts/neue-machina-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/neue-machina-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/neue-machina-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-neue-machina',
});
