"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-3xl border-3 border-darkForest bg-paperWhite p-6",
        "shadow-[0_4px_16px_rgba(46,58,44,0.1)]",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
