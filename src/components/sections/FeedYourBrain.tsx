"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Camera, FileText, Database } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/LanguageContext";

function ScanningAnimationDemo() {
  const { t } = useLanguage();
  // Pętla 7s: skan (0-35%) → loading (35-55%) → gotowa talia (55-85%) → reset
  const DURATION = 7;

  return (
    <div className="relative w-full h-full bg-white aspect-[9/18]">

      {/* --- WARSTWA 1 (GÓRA): Notatki "PRZED" --- */}
      <motion.div
        className="absolute inset-0 z-10 bg-white"
        animate={{ opacity: [1, 1, 0, 0, 0, 1] }}
        transition={{
          duration: DURATION,
          times: [0, 0.34, 0.36, 0.85, 0.92, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-full h-full bg-gray-100">
          <Image src="/demo-notes.png" alt="Notes before" fill className="object-cover object-top" />
        </div>
      </motion.div>

      {/* --- WARSTWA 2: Laser Skanujący --- */}
      <motion.div
        className="absolute left-0 right-0 z-30 h-0.5 bg-avocadoGreen shadow-[0_0_15px_3px_rgba(126,195,132,0.6)]"
        initial={{ top: "-5%" }}
        animate={{ top: ["0%", "105%", "105%", "-5%"] }}
        transition={{
          duration: DURATION,
          times: [0, 0.35, 0.92, 1],
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-avocadoGreen/30 to-transparent" />
      </motion.div>

      {/* --- WARSTWA 3: Ekran ładowania --- */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white"
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{
          duration: DURATION,
          times: [0, 0.30, 0.35, 0.52, 0.57, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="size-8 rounded-full border-[3px] border-avocadoGreen/30 border-t-avocadoGreen"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
        <span className="mt-3 font-body text-xs text-darkForest/50">
          {t.feedYourBrain.generating}
        </span>
      </motion.div>

      {/* --- WARSTWA 4 (DÓŁ): Gotowa Talia "PO" --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/demo-new-deck.png"
          alt="Gotowa talia"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

// --- Reszta Twojego kodu ---

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

export function FeedYourBrain() {
  const { t } = useLanguage();

  const tiles = [
    {
      key: "ocr",
      icon: Camera,
      title: t.feedYourBrain.ocrTitle,
      description: t.feedYourBrain.ocrDesc,
      imageSrc: "/demo-new-deck.png",
      color: "bg-blue-50",
    },
    {
      key: "file",
      icon: FileText,
      title: t.feedYourBrain.fileTitle,
      description: t.feedYourBrain.fileDesc,
      customComponent: <ScanningAnimationDemo />,
      color: "bg-green-50",
    },
    {
      key: "anki",
      icon: Database,
      title: t.feedYourBrain.ankiTitle,
      description: t.feedYourBrain.ankiDesc,
      imageSrc: "/demo-anki.png",
      color: "bg-orange-50",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-24 bg-softCream/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl text-darkForest md:text-4xl">
            {t.feedYourBrain.heading}<span className="text-avocadoGreen">{t.feedYourBrain.headingHighlight}</span>
          </h2>
          <p className="mt-3 max-w-lg font-body text-lg text-darkForest/70">
            {t.feedYourBrain.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tiles.map((tile) => (
            <Card
              key={tile.key}
              className={`relative overflow-hidden flex flex-col justify-between border-darkForest/10 shadow-sm hover:shadow-md transition-shadow duration-300 group ${tile.color || 'bg-white'}`}
              variants={cardVariants}
            >
              <div className="p-6 relative z-10">
                <div className="mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-white shadow-sm border border-darkForest/5">
                  <tile.icon className="size-6 text-darkForest" />
                </div>
                <h3 className="font-heading text-xl text-darkForest mb-2">
                  {tile.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-darkForest/70">
                  {tile.description}
                </p>
              </div>

              <div className="relative w-full h-full flex justify-center items-end px-4 pb-0">
                <motion.div
                  className="relative w-full max-w-[260px] shadow-xl rounded-t-[2.5rem] border-[6px] border-b-0 border-darkForest bg-white overflow-hidden z-0"
                  whileHover={{ y: -15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >

                  {/* --- GLÓWNA ZMIANA: Warunkowe renderowanie --- */}
                  <div className="relative w-full bg-gray-50">
                    {tile.customComponent ? (
                      // JEŚLI kafelek ma customComponent, wyrenderuj go
                      tile.customComponent
                    ) : (
                      // W PRZECIWNYM RAZIE wyrenderuj standardowy obrazek
                      <Image
                        src={tile.imageSrc || ""}
                        alt={tile.title}
                        width={400}
                        height={800}
                      />
                    )}
                  </div>
                  {/* ------------------------------------------- */}

                  <div className="absolute inset-0 bg-gradient-to-t from-darkForest/10 to-transparent pointer-events-none z-40" />
                </motion.div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
