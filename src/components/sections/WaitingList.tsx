"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";

export function WaitingList() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.waitingList.error);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (!res.ok) {
        throw new Error();
      }

      setSubmitted(true);
    } catch {
      setError(t.waitingList.serverError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waiting-list" className="px-6 py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-3xl text-darkForest md:text-4xl">
          {t.waitingList.heading}
        </h2>
        <p className="mt-4 font-body text-lg text-darkForest/70">
          {t.waitingList.description}
        </p>

        {submitted ? (
          <motion.div
            className="mt-8 rounded-2xl border-2 border-avocadoGreen bg-avocadoGreen/10 px-6 py-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <p className="font-heading text-xl text-darkForest">
              {t.waitingList.successTitle}
            </p>
            <p className="mt-2 font-body text-darkForest/70">
              {t.waitingList.successSubtitle}
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.waitingList.namePlaceholder}
              disabled={loading}
              className="w-full max-w-xs rounded-full border-2 border-darkForest bg-paperWhite px-5 py-3 font-body text-darkForest placeholder:text-darkForest/40 focus:outline-none focus:ring-2 focus:ring-avocadoGreen disabled:opacity-50"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.waitingList.placeholder}
              disabled={loading}
              className="w-full max-w-xs rounded-full border-2 border-darkForest bg-paperWhite px-5 py-3 font-body text-darkForest placeholder:text-darkForest/40 focus:outline-none focus:ring-2 focus:ring-avocadoGreen disabled:opacity-50"
            />
            <Button type="submit" variant="secondary" className="w-full max-w-xs" disabled={loading}>
              {t.waitingList.button}
            </Button>
          </form>
        )}

        {error && (
          <p className="mt-3 font-body text-sm text-red-600">{error}</p>
        )}

        {!submitted && (
          <p className="mt-8 font-body text-xs text-darkForest/50">
            {t.waitingList.privacyNote}
            <a href="/privacy" className="underline transition-colors hover:text-darkForest">{t.waitingList.privacyLink}</a>.
          </p>
        )}
      </motion.div>
    </section>
  );
}
