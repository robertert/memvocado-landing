"use client";

import { motion, type Variants } from "framer-motion";
import { Card } from "@/components/ui/Card";

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

const reviews = [
  {
    initials: "MK",
    handle: "@marta_kwiat",
    text: "Przeniosłam wszystkie talie z Anki i w końcu mam apkę, która nie wygląda jak z 2005 roku. Uczenie się znów sprawia frajdę!",
  },
  {
    initials: "JW",
    handle: "@jakub_med",
    text: "Algorytm FSRS jest genialny — powtórki trafiają idealnie w moment, kiedy zaczynam zapominać. Sesja na medycynie nigdy nie była łatwiejsza.",
  },
  {
    initials: "AZ",
    handle: "@ania_zet",
    text: "Robię fiszki aparatem w tramwaju i powtarzam offline w metrze. Memvocado dosłownie podróżuje ze mną.",
  },
  {
    initials: "PT",
    handle: "@piotr_tech",
    text: "Miałem 3000 kart w Anki i bałem się migracji. Import zajął 30 sekund. Wszystko działa.",
  },
  {
    initials: "KL",
    handle: "@kasia_lang",
    text: "Uczę się japońskiego i funkcja aparatu to game-changer. Skan kanji → fiszka → powtórka. Magia.",
  },
  {
    initials: "DM",
    handle: "@dawid_musk",
    text: "W końcu apka do nauki, która wygląda tak dobrze, że chcę ją otwierać. A awokado rośnie i motywuje!",
  },
];

export function Reviews() {
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
          Co mówią inni?
        </motion.h2>

        <motion.div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-6 md:overflow-visible"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map((review) => (
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
