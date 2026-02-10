"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  return (
    <motion.div
      className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full border-2 border-darkForest bg-softCream/95 px-3 py-2 shadow-[3px_3px_0px_#2E3A2C] backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Image
        src="/memvocadoicon.png"
        alt="Memvocado logo"
        width={50}
        height={50}
        className="rounded-full"
      />
      <span className="font-heading text-xl text-darkForest">Memvocado</span>
    </motion.div>
  );
}
