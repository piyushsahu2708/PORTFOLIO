import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import ClientLayoutWrapper from '@/components/layout/client-layout-wrapper';
import { LiquidEffectAnimation } from '@/components/ui/liquid-effect-animation';

export const metadata: Metadata = {
  title: 'Piyush Sahu – Software Engineer Portfolio',
  description: 'Full Stack Developer skilled in MERN stack, REST APIs, and authentication systems. Experienced in building real-world projects with clean architecture, secure data handling, and user-focused design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LiquidEffectAnimation />
        <ClientLayoutWrapper>
          {children}
          <Toaster />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
