"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-peachyAccent text-darkForest",
  secondary: "bg-avocadoGreen text-darkForest",
  outline: "bg-transparent text-darkForest",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(
        "rounded-full border-2 border-darkForest px-6 py-3 font-heading font-bold",
        "shadow-[4px_4px_0px_#2E3A2C]",
        "cursor-pointer select-none",
        variantStyles[variant],
        className,
      )}
      whileHover={{
        x: 4,
        y: 4,
        boxShadow: "0px 0px 0px #2E3A2C",
      }}
      whileTap={{
        x: 4,
        y: 4,
        boxShadow: "0px 0px 0px #2E3A2C",
        scale: 0.98,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
