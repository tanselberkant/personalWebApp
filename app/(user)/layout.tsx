import '../../styles/globals.css';
import Head from './head';
import Provider from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
