"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DoodleArrow } from "@/components/ui/DoodleArrow";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";


function PhoneMockup() {

  return (
    <div className="w-full relative h-[600px] flex justify-center items-center">
      {/* Telefon 1 (Tło / Lewy) */}
      <div className="absolute left-10 top-10 transform -rotate-6 w-64 md:w-72 shadow-2xl rounded-[2.8rem] border-8 border-gray-900 bg-gray-900 overflow-hidden z-10" >
        <Image
          src="/demo-turn.png"
          alt="Widok obrotu"
          width={500}
          height={1000}
        />
      </div >

      {/* Telefon 2 (Przód / Prawy) */}
      <div className="absolute right-10 bottom-10 transform rotate-3 w-64 md:w-72 shadow-2xl rounded-[2.8rem] border-8 border-gray-900 bg-gray-900 overflow-hidden z-20" >
        <Image
          src="/demo-card.png"
          alt="Widok fiszki"
          width={500}
          height={1000}
        />
      </div >
    </div>);
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-heading text-4xl leading-tight text-darkForest md:text-5xl lg:text-6xl whitespace-pre-line">
            {t.hero.heading}
          </h1>

          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-darkForest/80 md:text-xl">
            {t.hero.description1}
            <span className="font-bold border-b-2 border-avocadoGreen">{t.hero.fsrs}</span>.<br className="hidden sm:block" />
            <br className="hidden sm:block" /> {t.hero.description2}<strong>{t.hero.scan}</strong>{t.hero.description3}
          </p>
          <div id="hero-cta" className="relative mt-8 inline-flex items-start gap-2">
            <Button
              variant="primary"
              className="text-base md:text-lg"
              onClick={() =>
                document
                  .getElementById("waiting-list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.cta}
            </Button>
            <DoodleArrow
              className="absolute -right-20 -top-6 hidden md:block"
              rotation={-30}
            />
          </div>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
