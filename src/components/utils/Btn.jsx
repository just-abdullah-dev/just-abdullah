"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useHover from "@/hooks/useHover";

export default function Btn({ className = " ", children }) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`actionBtn ${className}`}
    >
      <span className="relative block h-[24px] w-full overflow-hidden">
        <AnimatePresence>
          <motion.span
            initial={{ y: 0, opacity: 1 }}
            animate={isHovered ? { y: "-24px", opacity: 1 } : { y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block"
          >
            <span className="flex items-center justify-center gap-2">{children}</span>
            <span className="flex items-center justify-center gap-2">{children}</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
