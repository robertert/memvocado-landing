"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
}

export function HighlightText({ children, className }: HighlightTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <motion.span
        className="absolute inset-x-0 bottom-0 -z-10 h-[40%] rounded-sm bg-freshLime"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
      {children}
    </span>
  );
}
