"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-block font-heading text-sm text-darkForest/60 transition-colors hover:text-darkForest"
      >
        {t.privacy.back}
      </Link>

      <h1 className="mt-8 font-heading text-3xl text-darkForest md:text-4xl">
        {t.privacy.title}
      </h1>

      <div className="mt-8 space-y-6 font-body text-base leading-relaxed text-darkForest/80">
        <p>{t.privacy.intro}</p>

        <div className="space-y-4">
          <div>
            <h2 className="font-heading text-lg text-darkForest">{t.privacy.whatTitle}</h2>
            <p>{t.privacy.whatText}</p>
          </div>

          <div>
            <h2 className="font-heading text-lg text-darkForest">{t.privacy.whoTitle}</h2>
            <p>
              {t.privacy.whoText1}
              <a
                href="mailto:memvocado@gmail.com"
                className="font-bold text-darkForest underline"
              >
                memvocado@gmail.com
              </a>
              {t.privacy.whoText2}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg text-darkForest">{t.privacy.spamTitle}</h2>
            <p>{t.privacy.spamText}</p>
          </div>

          <div>
            <h2 className="font-heading text-lg text-darkForest">{t.privacy.dataTitle}</h2>
            <p>{t.privacy.dataText}</p>
          </div>

          <div>
            <h2 className="font-heading text-lg text-darkForest">{t.privacy.freedomTitle}</h2>
            <p>{t.privacy.freedomText}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
