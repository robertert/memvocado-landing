"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "lime";

interface BadgeProps extends HTMLMotionProps<"span"> {
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-paperWhite",
  lime: "bg-freshLime",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-full border-2 border-darkForest px-3 py-1 text-sm font-bold text-darkForest",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
}
