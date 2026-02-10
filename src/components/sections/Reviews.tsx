"use client";

import { motion, type Variants } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-10 font-heading text-3xl text-darkForest md:mb-14 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t.reviews.heading}
        </motion.h2>

        <motion.div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-6 md:overflow-visible"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.reviews.items.map((review) => (
            <Card
              key={review.handle}
              className="snap-center min-w-[280px] shrink-0 border-l-4 border-l-avocadoGreen p-5 md:min-w-0 md:shrink"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-avocadoGreen font-heading text-sm font-bold text-darkForest">
                  {review.initials}
                </div>
                <span className="font-heading text-sm text-darkForest">
                  {review.handle}
                </span>
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed text-darkForest/70">
                {review.text}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
