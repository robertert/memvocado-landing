"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <motion.div
      className="fixed right-4 top-4 z-50 flex items-center gap-0 rounded-full border-2 border-darkForest bg-softCream/95 shadow-[3px_3px_0px_#2E3A2C] backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <button
        onClick={() => setLang("pl")}
        className={`rounded-full px-3 py-2 font-heading text-sm transition-colors ${
          lang === "pl"
            ? "bg-avocadoGreen text-darkForest"
            : "text-darkForest/50 hover:text-darkForest"
        }`}
      >
        PL
      </button>
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-2 font-heading text-sm transition-colors ${
          lang === "en"
            ? "bg-avocadoGreen text-darkForest"
            : "text-darkForest/50 hover:text-darkForest"
        }`}
      >
        EN
      </button>
    </motion.div>
  );
}
