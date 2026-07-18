import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { RootProviders } from '../providers/root-providers.js';
import { AppShell } from '../components/layout/app-shell.js';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Om Platform - Explore Indian Civilization & Sanatan Dharma',
  description: 'AI-native education, scripture reader, and knowledge graphs for the Indian Knowledge System (IKS).',
  generator: 'Next.js',
  applicationName: 'Om',
  referrer: 'origin-when-cross-origin',
  keywords: ['Sanatan Dharma', 'Scriptures', 'Vedas', 'Bhagavad Gita', 'Upanishads', 'IKS', 'AI Acharya'],
  authors: [{ name: 'Om Contributors' }],
  creator: 'Om Team',
  publisher: 'Om Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#d97706', // Saffron Accent Color
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <RootProviders>
          <AppShell>{children}</AppShell>
        </RootProviders>
      </body>
    </html>
  );
}
