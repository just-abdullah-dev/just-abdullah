"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useHover from "@/hooks/useHover";

export default function AnimatedText({ className = " ", border = false, text, yValue = -25, gradient = false }) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    <div className={`  h-[25px] relative overflow-hidden w-fit ${className} `}>
      <AnimatePresence>
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={isHovered ? { y: yValue, opacity: 1 } : { y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="  "
        >
          <div 
          className={gradient ? 
            "text-t-t-b-gradient" : ""
          }
          >
            {text}
          </div>

          <div
            className={`${
              border && isHovered
                ? " border-primary border-b-[2px] w-full "
                : "" 
            } ${gradient ? 
            " text-t-t-b-gradient " : ""
          }` }
          >
            {text}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
