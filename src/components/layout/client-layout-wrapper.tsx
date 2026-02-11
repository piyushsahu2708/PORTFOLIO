'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Lenis from 'lenis';

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const totalHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const progress = (window.scrollY / totalHeight) * 100;

        setScroll(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${scroll}%`,
        background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
        zIndex: 9999,
      }}
    />
  );
}

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
