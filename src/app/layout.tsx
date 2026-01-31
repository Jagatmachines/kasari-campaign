import type { Metadata } from 'next';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'कसरी: From Promise to Policy',
  description: 'Empowering Nepali voters to ask the right questions. Hold candidates accountable before you cast your vote.',
  keywords: ['Nepal', 'elections', 'voters', 'accountability', 'democracy', 'Nepali'],
  authors: [{ name: 'Kasari Team' }],
  openGraph: {
    title: 'कसरी: From Promise to Policy',
    description: 'Empowering Nepali voters to ask the right questions.',
    url: 'https://kasari.np',
    siteName: 'Kasari',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'कसरी: From Promise to Policy',
    description: 'Empowering Nepali voters to ask the right questions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ne">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
