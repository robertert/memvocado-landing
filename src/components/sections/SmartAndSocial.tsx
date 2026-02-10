"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { BrainCircuit, Sprout } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
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

const CURVE_D =
  "M 20 15 C 35 15, 40 50, 55 52 C 55 20, 60 18, 65 18 C 80 18, 90 48, 105 50 C 105 22, 110 20, 115 20 C 135 20, 150 45, 175 48";

function ForgettingCurve() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(0);
  const inView = useInView(svgRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (pathRef.current) {
      setLen(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 80"
      className="mt-20 w-full"
      fill="none"
      role="img"
      aria-label="Krzywa zapominania FSRS"
    >
      {/* Axes */}
      <line x1="20" y1="65" x2="190" y2="65" stroke="#2E3A2C" strokeWidth="1" opacity="0.2" />
      <line x1="20" y1="10" x2="20" y2="65" stroke="#2E3A2C" strokeWidth="1" opacity="0.2" />

      {/* Forgetting curve */}
      <path
        ref={pathRef}
        d={CURVE_D}
        stroke="#7EC384"
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
        style={{
          strokeDasharray: len || 1,
          strokeDashoffset: inView ? 0 : len || 1,
          transition: "stroke-dashoffset 1.5s ease-out",
        }}
      />

      {/* Review points */}
      {[
        { cx: 55, cy: 52 },
        { cx: 105, cy: 50 },
        { cx: 175, cy: 48 },
      ].map((pt, i) => (
        <circle
          key={i}
          cx={pt.cx}
          cy={pt.cy}
          r={4}
          fill="#7EC384"
          stroke="#2E3A2C"
          strokeWidth={1.5}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0)",
            transformOrigin: `${pt.cx}px ${pt.cy}px`,
            transition: `opacity 0.3s ease ${0.8 + i * 0.15}s, transform 0.3s ease ${0.8 + i * 0.15}s`,
          }}
        />
      ))}

      {/* Labels */}
      <text x="96" y="76" fill="#2E3A2C" fontSize="6" opacity="0.4" textAnchor="middle">
        czas
      </text>
      <text x="10" y="40" fill="#2E3A2C" fontSize="6" opacity="0.4" textAnchor="middle" transform="rotate(-90 10 40)">
        pamięć
      </text>
    </svg>
  );
}


export function SmartAndSocial() {
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
          Naukowa precyzja. Naturalny nawyk.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* FSRS Card */}
          <Card className="p-6 md:p-8 bg-softCream" variants={cardVariants}>
            <div className="flex items-center gap-3">
              <BrainCircuit className="size-6 text-darkForest" aria-hidden="true" />
              <Badge>NAUKA</Badge>
            </div>
            <h3 className="mt-4 font-heading text-xl text-darkForest md:text-2xl">
              Algorytm FSRS
            </h3>
            <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-darkForest/70 md:text-base">
              Algorytm FSRS dba o&nbsp;to, byś powtarzał tylko to, co
              zapominasz. Oszczędź 30% czasu.
            </p>
            <div className="flex width-full align-middle justify-center">
              <ForgettingCurve />
            </div>
          </Card>

          {/* Habit / Profile Card */}
          <Card className="overflow-hidden p-6 md:p-8 bg-softCream" variants={cardVariants}>
            <div className="flex items-center gap-3">
              <Sprout className="size-6 text-darkForest" aria-hidden="true" />
              <Badge>NAWYK</Badge>
            </div>
            <h3 className="mt-4 font-heading text-xl text-darkForest md:text-2xl">
              Zasadź nawyk.
            </h3>
            <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-darkForest/70 md:text-base">
              Każdy kwadracik to sesja nauki. Zobacz, jak Twój rok zamienia
              się w&nbsp;zielony ogród wiedzy.
            </p>
            <div className="flex width-full align-middle justify-center">
              <Image
                src="/demo-stats.png"
                alt="Profil użytkownika z wykresem aktywności"
                width={300}
                height={100}
                className="object-cover object-top rounded-xl mt-12 align-middle"
              />
            </div>
          </Card>

        </motion.div>
      </div>
    </section>
  );
}
