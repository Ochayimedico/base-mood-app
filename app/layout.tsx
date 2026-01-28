import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const appUrl = process.env.NEXT_PUBLIC_URL || 'https://base-mood-app.com';
  
  return {
    title: 'Base Vibes - Mood Tracker',
    description: 'Track and share your daily vibes on Base',
    other: {
      'fc:miniapp': JSON.stringify({
        version: 'next',
        imageUrl: `${appUrl}/embed-image.png`,
        button: {
          title: 'Check Vibes',
          action: {
            type: 'launch_miniapp',
            name: 'Base Vibes',
            url: appUrl,
            splashImageUrl: `${appUrl}/splash.png`,
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