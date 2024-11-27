import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CopyCoder - Transform Designs into Code with AI',
  description: 'CopyCoder is an AI-powered tool that converts UI designs into code through intelligent prompt generation. Create powerful prompts for Cursor, Bolt, v0 & more. Perfect for developers looking to accelerate their workflow.',
  keywords: 'copycoder, ai coding, cursor ai, bolt ai, v0 ai, code generation, ui to code, development tools, ai prompts, design to code',
  openGraph: {
    title: 'CopyCoder - Transform Designs into Code with AI',
    description: 'Convert UI designs into code with AI-powered prompt generation. Perfect for modern development workflows.',
    type: 'website',
    locale: 'en_US',
    siteName: 'CopyCoder',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}