"use client"
import { useEffect, useRef } from "react"

export function LiquidEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const script = document.createElement("script")
    script.type = "module"
    script.textContent = `
      import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';
      const canvas = document.getElementById('liquid-canvas');
      if (canvas) {
        const app = LiquidBackground(canvas);
        app.loadImage('https://images.unsplash.com/photo-1506744038136-46273834b3fb');
        app.liquidPlane.material.metalness = 0.75;
        app.liquidPlane.material.roughness = 0.25;

        const setScale = () => {
          const isMobile = window.innerWidth < 768;
          app.liquidPlane.uniforms.displacementScale.value = isMobile ? 2.5 : 5;
        };

        setScale();
        window.addEventListener('resize', setScale);

        app.setRain(false);
        window.__liquidApp = app;

        // Custom dispose to clean up event listener
        const originalDispose = app.dispose;
        app.dispose = () => {
          window.removeEventListener('resize', setScale);
          if (originalDispose) {
            originalDispose.call(app);
          }
        };
      }
    `
    document.body.appendChild(script)

    return () => {
      if (window.__liquidApp && window.__liquidApp.dispose) {
        window.__liquidApp.dispose()
      }
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        id="liquid-canvas"
        className="w-full h-full"
      />
    </div>
  )
}

declare global {
  interface Window {
    __liquidApp?: any
  }
}
