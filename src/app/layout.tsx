import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memvocado – The Cozy Edition",
  description:
    "Memvocado: The Cozy Edition – a warm, playful flashcard app that makes vocabulary learning feel like a cozy ritual.",
  openGraph: {
    title: "Memvocado – The Cozy Edition",
    description:
      "Zamień chaotyczne notatki w piękne fiszki. Ucz się z nutką przytulności i odrobiną magii awokado.",
    siteName: "Memvocado",
    locale: "pl_PL",
    type: "website",
  },
  icons: {
    icon: "/memvocadoicon.png",
    apple: "/memvocadoicon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/memvocadoicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="relative min-h-screen font-body antialiased">
        <div className="noise-bg" aria-hidden="true" />
        <LanguageProvider>
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
