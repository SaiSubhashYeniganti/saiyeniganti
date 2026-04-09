"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function HeroAtmosphere() {
  // Spring animations for smooth cursor following
  const springX = useSpring(0, { stiffness: 40, damping: 20 });
  const springY = useSpring(0, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates relative to the center of the screen
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      springX.set(x);
      springY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Organic Slow Blobs */}
      <motion.div
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-ink/5 rounded-[40%_60%_70%_30%] blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: ["0%", "-8%", "5%", "0%"],
          y: ["0%", "6%", "-4%", "0%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] right-[10%] w-[45vw] h-[50vw] bg-accent/10 rounded-[60%_40%_30%_70%] blur-[140px]"
      />

      {/* 2. Interactive Cursor Glow (The "Spotlight") */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full blur-[140px] bg-accent/10"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Static Grain Overlay (kept very faint, not animated to save performance) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEw0IDRaTTQgMEwwIDRaIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
