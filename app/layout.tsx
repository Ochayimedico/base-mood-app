import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const URL =  'https://base-mood-app.com';
  
  return {
    title: 'Base Vibes - Mood Tracker',
    description: 'Track and share your daily vibes on Base',
    other: {
      'fc:miniapp': JSON.stringify({
        version: 'next',
        imageUrl: `${URL}/window.svg`,
        button: {
          title: 'Check Vibes',
          action: {
            type: 'launch_miniapp',
            name: 'Base Vibes',
            url: URL,
            homeUrl: URL,
            splashImageUrl: `${URL}/globe.scg`,
            splashBackgroundColor: '#7c3aed',
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}