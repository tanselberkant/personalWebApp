import '../styles/globals.css';
import Head from './head';
import Provider from './providers';
import { Inconsolata } from 'next/font/google';
import Script from 'next/script';

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
      {/*  ----> GOOGLE ANALYTICS */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WTYTEHMN9P"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WTYTEHMN9P'); `}
      </Script>
      {/*  <---- GOOGLE ANALYTICS */}
      <body className={inconsolata.className + 'max-w-7xl mx-auto'}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
