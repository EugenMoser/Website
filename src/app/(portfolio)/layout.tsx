import '../globals.css';

import type { Metadata } from 'next';

import Sidebar from '../components/(portfolio)/sidebar';

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
    <html
      lang='de'
      className='scroller'
    >
      <body>
        <header className='w-1/5 '>
          <Sidebar />
        </header>
        <main className='w-4/5 '> {children}</main>
      </body>
    </html>
  );
}
