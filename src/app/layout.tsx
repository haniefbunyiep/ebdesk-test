'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TanstackProvider from '@/providers/TanstackProvider';
import { ReduxProvider } from '@/providers/ReduxProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang='en'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main className='flex min-h-screen flex-col justify-between'>
            <TanstackProvider>
              <Navbar />
              <div className='min-h-screen'>{children}</div>
              <Footer />
            </TanstackProvider>
          </main>
        </body>
      </html>
    </ReduxProvider>
  );
}
