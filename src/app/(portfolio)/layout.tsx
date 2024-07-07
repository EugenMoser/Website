import '../globals.css';

import type { Metadata } from 'next';

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
      <body className='flex flex-row m-8 '>
        <header className=' w-1/5 sticky top-8 h-screen'>
          <Sidebar />
        </header>
        <main className='w-4/5 '> {children}</main>
      </body>
    </html>
  );
}
