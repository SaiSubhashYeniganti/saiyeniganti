"use client";

import { motion } from "framer-motion";

export function HeroAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-ink/5 rounded-[40%_60%_70%_30%] blur-[60px]"
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
        className="absolute top-[20%] right-[10%] w-[45vw] h-[50vw] bg-accent/8 rounded-[60%_40%_30%_70%] blur-[80px]"
      />
    </div>
  );
}
