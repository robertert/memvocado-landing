"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export function AvoHelper() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="lime">{t.avoHelper.badge}</Badge>

          <h2 className="mt-4 font-heading text-3xl text-darkForest md:text-4xl">
            {t.avoHelper.heading}
          </h2>

          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-darkForest/70 md:text-lg">
            {t.avoHelper.description}
          </p>
        </motion.div>

        {/* Phone mockup column */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <div className="w-64 md:w-72 shadow-2xl rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 overflow-hidden z-10" >

            <Image src="/demo-avo.png" alt="Avo Helper" width={300} height={400} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
