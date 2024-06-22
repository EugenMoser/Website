import '../globals.css';

import type { Metadata } from 'next';

import Navigation from './components/nav';
import Sidebar from './components/sidebar';

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
      <body className='flex flex-row gap-5'>
        <header className='col-span-1 sm:col-span-1 sticky top-0 h-screen'>
          <h1>Eugen Moser</h1>
          <Navigation />
        </header>
        <main className='grid grid-cols-1 sm:grid-cols-3'>{children}</main>
      </body>
    </html>
  );
}
