import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOC.SK – odborné časopisy, publikácie a vzdelávanie pre správu a techniku budov",
  description: "V.O.Č. SLOVAKIA vydáva časopisy Správca bytových domov a Plynár – vodár – kúrenár + klimatizácia, publikáciu Správca budov a organizuje odborné vzdelávanie.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sk" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
