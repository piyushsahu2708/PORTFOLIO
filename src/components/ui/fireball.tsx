'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Helper function for linear interpolation
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

interface FireBallProps {
  colors?: string[];
  blobRadius?: number;
  particleCount?: number;
  followStrength?: number;
  background?: string;
  fullScreen?: boolean;
  className?: string;
}

export function FireBall({
  colors = ['#ff6b00', '#ff8c00', '#ffad00', '#ffc500', '#ffd700'],
  blobRadius = 18,
  particleCount = 20,
  followStrength = 0.1,
  background = 'transparent',
  fullScreen = true,
  className,
}: FireBallProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const blob = useRef<{
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
  } | null>(null);
  const particles = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      mousePos.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      
      blob.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        radius: blobRadius,
        vx: 0,
        vy: 0,
      };

      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        if (blob.current) {
          particles.current.push(createParticle(blob.current));
        }
      }
    };

    const createParticle = (center: { x: number; y: number }) => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: center.x,
        y: center.y,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.cos(angle) * (Math.random() * 0.8 + 0.2),
        vy: Math.sin(angle) * (Math.random() * 0.8 + 0.2),
        life: Math.random() * 20 + 30,
      };
    };

    const update = () => {
      if (!blob.current) return;

      // Move blob towards mouse
      blob.current.x = lerp(blob.current.x, mousePos.current.x, followStrength);
      blob.current.y = lerp(blob.current.y, mousePos.current.y, followStrength);

      // Update particles
      particles.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;
        p.radius -= 0.05;

        // Reset particle if it's "dead"
        if (p.life <= 0 || p.radius <= 0.1) {
            if (blob.current) {
                particles.current[i] = createParticle(blob.current);
            }
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Use the gooey filter
      ctx.filter = 'url(#gooey-filter)';
      
      ctx.beginPath();
      
      // Draw blob
      if (blob.current) {
        ctx.arc(blob.current.x, blob.current.y, blob.current.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[0];
        ctx.fill();
      }

      // Draw particles
      particles.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      ctx.closePath();

      // Reset filter for next frame
      ctx.filter = 'none';
    };

    const animate = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      setup();
    };

    setup();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, blobRadius, particleCount, followStrength, background]);

  return (
    <div
      className={cn(
        'pointer-events-none',
        { 'fixed inset-0 -z-10': fullScreen },
        className
      )}
    >
      <canvas ref={canvasRef} />
      <svg className="pointer-events-none absolute h-0 w-0">
        <defs>
          <filter id="gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}