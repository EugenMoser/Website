import '../globals.css';

import type { Metadata } from 'next';
import Image from 'next/image';

import Navigation from './components/nav';

export const metadata: Metadata = {
  title: 'Eugen Moser personal website',
  description: 'The personal website of Eugen Moser web developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body className='flex flex-row m-8 gap-20'>
        <header className='col-span-1 sticky top-8 h-full'>
          <h1>Eugen Moser</h1>
          <Image
            src='/images/Bild_Moser.png'
            alt='image from Eugen'
            width={200}
            height={200}
          />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
