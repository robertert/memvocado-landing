import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka Prywatności – Memvocado",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-block font-heading text-sm text-darkForest/60 transition-colors hover:text-darkForest"
      >
        &larr; Wróć na stronę główną
      </Link>

      <h1 className="mt-8 font-heading text-3xl text-darkForest md:text-4xl">
        Polityka Prywatności
      </h1>

      <div className="mt-8 space-y-6 font-body text-base leading-relaxed text-darkForest/80">
        <p>
          Hej! Tu Memvocado. Budujemy najprzyjemniejszą aplikację do fiszek na
          świecie. Szanujemy Twój czas i Twoją prywatność. Oto zasady naszej
          Waiting List:
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="font-heading text-lg text-darkForest">O co chodzi</h2>
            <p>
              Zbieramy Twój adres e-mail, żeby dać Ci znać, kiedy aplikacja
              będzie gotowa do pobrania.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg text-darkForest">Kto tu rządzi</h2>
            <p>
              Administratorem Twoich danych jest Robert Jacak. Masz pytania?
              Pisz na{" "}
              <a
                href="mailto:memvocado@gmail.com"
                className="font-bold text-darkForest underline"
              >
                memvocado@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg text-darkForest">Zero Spamu</h2>
            <p>
              Nie wysyłamy reklam garnków ani ubezpieczeń. Tylko info o apce
              i ewentualnie tipy, jak się uczyć skuteczniej.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg text-darkForest">Gdzie są dane</h2>
            <p>
              Twojego maila trzymamy bezpiecznie w MailChimp, który dba
              o standardy bezpieczeństwa UE.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg text-darkForest">Wolność</h2>
            <p>
              W każdej chwili możesz kliknąć &quot;Wypisz się&quot; w stopce
              maila, a my usuniemy Twój adres z bazy. Bez żalu (no, może
              małego, bo smutne awokado).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
