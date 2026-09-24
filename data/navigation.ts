import { LINKS } from "@/constants";

export const navigation = [
  { label: "Časopisy", href: "#casopisy" },
  { label: "Publikácie", href: "#cinnosti" },
  { label: "Konferencia", href: LINKS.conference },
  { label: "Kurz", href: LINKS.course },
  { label: "O nás", href: LINKS.about },
  { label: "Kontakt", href: LINKS.contact },
] as const;

