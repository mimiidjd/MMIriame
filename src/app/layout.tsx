import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio de Miriame',
  description: 'Développeuse web créative et étudiante en BUT MMI, je partage mes projets en développement web, design UX/UI et dispositifs interactifs. Découvrez mes réalisations en Laravel, React, et mes expériences en création numérique.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 