import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avinash — Product Designer',
  description:
    "I don't just scratch the surface. Product Designer, Aspiring Product Manager, Design Engineer portfolio.",
  keywords: [
    'Avinash',
    'Product Designer',
    'Design Engineer',
    'Product Manager',
    'UX Architecture',
    'Next.js',
    'GSAP',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Sedgwick+Ave&family=Staatliches&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
