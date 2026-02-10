"use client";

import { motion, type Variants } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* --- Avocado SVGs for growth stages --- */

const WIDTH = 150;
const HEIGHT = 200;

export function CozyLoop() {
  const { t } = useLanguage();

  const growthSteps = [
    { day: t.cozyLoop.day1, label: t.cozyLoop.seed, Svg: <Image src="/growth-images/phase-1.png" alt="Avo Phase 1" width={WIDTH} height={HEIGHT} /> },
    { day: t.cozyLoop.day4, label: t.cozyLoop.sprout, Svg: <Image src="/growth-images/phase-3.png" alt="Avo Phase 3" width={WIDTH} height={HEIGHT} /> },
    { day: t.cozyLoop.day7, label: t.cozyLoop.harvest, Svg: <Image src="/growth-images/phase-5.png" alt="Avo Phase 5" width={WIDTH} height={HEIGHT} /> },
  ];

  const skins = [
    { name: t.cozyLoop.ninjaAvo, rarity: t.cozyLoop.epic, Svg: <Image src="/skins/avo-ninja.png" alt="Avo Ninja" width={WIDTH} height={HEIGHT} /> },
    { name: t.cozyLoop.spaceAvo, rarity: t.cozyLoop.rare, Svg: <Image src="/skins/avo-space.png" alt="Avo Space" width={WIDTH} height={HEIGHT} /> },
    { name: t.cozyLoop.sleepyAvo, rarity: t.cozyLoop.common, Svg: <Image src="/skins/avo-sleepy.png" alt="Avo Sleepy" width={WIDTH} height={HEIGHT} /> },
  ];

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl text-darkForest md:text-4xl">
            {t.cozyLoop.heading}
          </h2>
          <p className="mt-3 max-w-xl font-body text-lg text-darkForest/70">
            {t.cozyLoop.description}
          </p>
        </motion.div>

        {/* Growth Timeline */}
        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative flex items-center justify-between gap-4 md:gap-8">
            {/* Connecting line */}
            <svg
              className="absolute inset-x-0 top-1/2 -z-10 h-1 w-full"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="#7EC384"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </svg>

            {growthSteps.map((step) => (
              <Card
                key={step.day}
                className="flex flex-1 flex-col items-center gap-2 p-4 md:p-6"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Badge>{step.day}</Badge>
                {step.Svg}
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Skin Carousel */}
        <motion.div
          className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:mt-14 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skins.map((skin) => (
            <Card
              key={skin.name}
              className="group relative flex min-w-[200px] shrink-0 snap-center flex-col items-center gap-3 p-6 md:min-w-0 md:shrink"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Sparkle on hover */}
              <motion.div
                className="pointer-events-none absolute -right-1 -top-1 text-freshLime opacity-0 group-hover:opacity-100"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 0 L12 7 L20 10 L12 13 L10 20 L8 13 L0 10 L8 7 Z" />
                </svg>
              </motion.div>
              {skin.Svg}
              <span className="font-heading text-sm text-darkForest">
                {skin.name}
              </span>
              <Badge variant="lime">{skin.rarity}</Badge>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
