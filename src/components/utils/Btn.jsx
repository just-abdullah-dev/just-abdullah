"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useHover from "@/hooks/useHover";

export default function Btn({ className = " ", children }) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` actionBtn ${className}`}
    >
      <div
        className={`  h-[24px] relative overflow-hidden w-full`}
      >
        <AnimatePresence>
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={isHovered ? { y: "-24px", opacity: 1 } : { y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="  "
          >
            <p >{children}</p>

            <p >{children}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </button>
  );
}
