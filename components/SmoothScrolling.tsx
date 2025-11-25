import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

// Extend Window interface to include lenis
declare global {
  interface Window {
    lenis: Lenis;
  }
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    window.lenis = lenis; // Expose to window for global access

    // Animation frame loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      // @ts-ignore
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;