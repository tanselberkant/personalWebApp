import '../../styles/globals.css';
import Head from './head';
import Provider from './providers';
// import { Inconsolata } from '@next/font/google';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className={inconsolata.className + 'max-w-7xl mx-auto'}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
