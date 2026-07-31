"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid movement
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-100 overflow-hidden">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute size-[235px] md:size-[350px] rounded-full opacity-70 blur-[90px] transition-opacity duration-300"
        css={{
          background: `radial-gradient(circle at center, 
            rgb(217, 70, 239) 0%, 
            rgb(192, 132, 252) 25%, 
            rgb(168, 85, 247) 50%, 
            rgb(126, 34, 206) 75%, 
            rgba(192, 132, 252, 0.45) 90%, 
            transparent 100%)`,
        }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, 
              rgb(168, 85, 247) 0deg, 
              rgb(192, 132, 252) 72deg, 
              rgb(217, 70, 239) 144deg, 
              rgb(126, 34, 206) 216deg, 
              rgba(192, 132, 252, 0.55) 288deg, 
              rgb(168, 85, 247) 360deg)`,
            filter: "blur(60px)",
          }}
        />
      </motion.div>
    </div>
  );
}
