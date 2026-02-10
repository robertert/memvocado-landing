"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DoodleArrowProps {
  className?: string;
  /** Dodatkowy obrót w stopniach */
  rotation?: number;
}

export function DoodleArrow({ className, rotation = 0 }: DoodleArrowProps) {
  return (
    <motion.svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-darkForest", className)}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
    >
      {/* Jedna, ciągła ścieżka zawierająca zarówno ciało strzałki, jak i grot na końcu.
        Rysowana jest od prawej (70,42) do lewej (8,8), gdzie kończy się grotem.
      */}
      <motion.path
        d="M 70 42 C 60 16, 35 2, 8 8 L 14 4 M 8 8 L 15 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.0, delay: 0.9, ease: "easeOut" }}
      />
    </motion.svg>
  );
}