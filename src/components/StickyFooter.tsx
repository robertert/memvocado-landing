"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function StickyFooter() {
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const waitingList = document.getElementById("waiting-list");
    if (!heroCta || !waitingList) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 },
    );
    const formObserver = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    heroObserver.observe(heroCta);
    formObserver.observe(waitingList);
    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !formVisible;

  function scrollToForm() {
    document
      .getElementById("waiting-list")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <Button
            variant="primary"
            className="px-5 py-3 text-lg shadow-[4px_4px_0px_#2E3A2C]"
            onClick={scrollToForm}
          >
            Zapisz się
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
