import { LINKS } from "@/constants";

export const heroCovers = [
  { image: "/images/sbd-4-2025.jpg", alt: "Správca bytových domov, číslo 4/2025", className: "left-0 top-[20%] w-[28%] -rotate-7 brightness-[.88] z-[1]" },
  { image: "/images/pvk-1-2026.jpg", alt: "Plynár – vodár – kúrenár + klimatizácia, číslo 1/2026", className: "left-[64%] top-0 w-[28%] rotate-6 brightness-[.88] z-[1]" },
  { image: "/images/sbd-1-2026.jpg", alt: "Správca bytových domov, číslo 1/2026", className: "left-[13%] top-[27%] w-[37%] -rotate-3 z-[2]" },
  { image: "/images/pvk-2-2026.jpg", alt: "Plynár – vodár – kúrenár + klimatizácia, číslo 2/2026", className: "left-[73%] top-[50%] w-[26%] rotate-[8deg] z-[2]" },
  { image: "/images/pvk-3-2026.jpg", alt: "Plynár – vodár – kúrenár + klimatizácia, číslo 3/2026", className: "left-[42%] top-[10%] w-[41%] rotate-2 z-[3]" },
] as const;

export const magazines = [
  {
    id: "sbd-nadpis",
    eyebrow: "Pre správcov bytových domov",
    title: "Správca bytových domov",
    description: "Legislatíva, obnova, energie a technika bytových domov v recenzovanom odbornom časopise.",
    issue: "Aktuálne číslo 2/2026",
    image: "/images/sbd-2-2026.jpg",
    imageAlt: "Titulná strana časopisu Správca bytových domov, číslo 2/2026",
    href: LINKS.sbd,
    sampleHref: LINKS.sbdSample,
    gradient: "from-[#00b070] to-[#00925c]",
    rotation: "-rotate-3",
  },
  {
    id: "pvk-nadpis",
    eyebrow: "Pre profesie TZB",
    title: "Plynár – Vodár – Kúrenár + Klimatizácia",
    description: "Vykurovanie, voda, plyn, klimatizácia a vzduchotechnika vo vedecko-odbornom časopise.",
    issue: "Aktuálne číslo 4/2026",
    image: "/images/pvk-4-2026.jpg",
    imageAlt: "Titulná strana časopisu Plynár – vodár – kúrenár + klimatizácia, číslo 4/2026",
    href: LINKS.pvk,
    sampleHref: LINKS.pvkSample,
    gradient: "from-[#0090da] to-[#006bc0]",
    rotation: "rotate-3",
  },
] as const;

export const brands = ["Viessmann", "Buderus", "Vaillant", "Protherm", "Geberit", "Danfoss", "Grundfos", "Wilo", "Rehau", "Uponor", "Honeywell", "Siemens"] as const;

export const stats = [
  { value: "20+", label: "rokov odborného publikovania" },
  { value: "2", label: "recenzované odborné časopisy" },
  { value: "4×", label: "vydania ročne každého titulu" },
  { value: "96 h", label: "akreditovaného kurzu pre správcov" },
] as const;

export const topics = [
  {
    eyebrow: "SPRÁVCA BYTOVÝCH DOMOV",
    dotClass: "bg-[#1cc49a]",
    title: "Obnova a energetika bytových domov",
    description: "Zateplenie, fasády, balkóny a cesta starej bytovky k pasívnemu štandardu — ekonomika aj technické detaily.",
    image: "/images/role-manager.jpg",
    alt: "Moderný bytový dom",
    tags: ["Obnova", "Energie", "Legislatíva"],
  },
  {
    eyebrow: "PLYNÁR – VODÁR – KÚRENÁR + K",
    dotClass: "bg-[var(--color-cyan)]",
    title: "Vykurovanie, tepelné čerpadlá a OZE",
    description: "Dimenzovanie, chladivá, predizolované potrubia a solárne systémy. Od návrhu po prevádzku, s dátami z praxe.",
    image: "/images/topic-technology.jpg",
    alt: "Tepelné čerpadlo pri dome",
    tags: ["Vykurovanie", "Voda a plyn", "Klimatizácia"],
  },
  {
    eyebrow: "OBA ČASOPISY",
    dotClass: "bg-[var(--color-coral)]",
    title: "Legislatíva, veľtrhy a ocenenia",
    description: "Nové pravidlá EÚ, rozúčtovanie tepla a vody, reportáže z Infothermy a Aquathermu a ocenenie Firma časopisu.",
    image: "/images/topic-events.jpg",
    alt: "Odborné podujatie",
    tags: ["Novinky", "Veľtrhy", "Firma časopisu"],
  },
] as const;

export const educationItems = [
  { eyebrow: "Odborná publikácia", eyebrowClass: "text-[#c52a12]", title: "Správca budov", description: "Učebnica pre prax správcu s právnymi predpismi platnými k 1. januáru 2026.", image: "/images/publication-banner.jpg", imageAlt: "Publikácia Správca budov", imageClass: "object-contain p-[clamp(16px,2vw,28px)] bg-[var(--color-blue-dark)]", href: LINKS.publication, cta: "Objednať publikáciu →", buttonClass: "bg-[var(--color-coral)] text-[var(--color-ink)] hover:bg-[#ff6a52]" },
  { eyebrow: "Medzinárodná konferencia", eyebrowClass: "text-[var(--color-teal-dark)]", title: "Konferencia Správa budov", description: "Riešenia pre správu bytových domov a nehnuteľností. Odborníci, legislatíva a prax.", image: "/images/conference.jpg", imageAlt: "", imageClass: "object-contain p-[clamp(16px,2vw,28px)] bg-[var(--color-ink)]", href: LINKS.conference, cta: "Viac o konferencii →", buttonClass: "bg-[var(--color-ink)] text-white hover:bg-[var(--color-blue-dark)]" },
  { eyebrow: "Akreditovaný kurz · 96 hodín", eyebrowClass: "text-[var(--color-blue-dark)]", title: "Kurz Správa bytového fondu", description: "Kvalifikácia podľa zákona č. 246/2015 Z. z. o správcoch bytových domov.", image: "/images/education-course.jpg", imageAlt: "Štúdium pri pracovnom stole", imageClass: "object-cover", href: LINKS.course, cta: "Termíny a prihláška →", buttonClass: "bg-[var(--color-ink)] text-white hover:bg-[var(--color-blue-dark)]" },
] as const;

export const services = [
  { number: "01", title: "Prezentácia v časopise", description: "Plošná inzercia, odborný článok, pozvánky na výstavy a podujatia v časopisoch Správca bytových domov a Plynár – Vodár – Kúrenár + Klimatizácia.", image: "/images/topic-legislation.jpg", alt: "Čitateľ s odborným časopisom", featured: true },
  { number: "02", title: "Grafické návrhy", description: "Inzercie a firemné materiály — letáky, plagáty, katalógy.", image: "/images/role-advertiser.jpg", alt: "Tlačené materiály", featured: false },
  { number: "03", title: "TZBportal.sk a NEWS", description: "Prezentácia a umiestnenie odborných článkov online.", image: "/images/service-architecture.jpg", alt: "Architektúra budovy", featured: false },
  { number: "04", title: "Časopis pre vašich VIP klientov", description: "Až 100 výtlačkov s vašou inzerciou pošleme na náklady vydavateľstva.", image: "/images/role-manager.jpg", alt: "Moderný bytový dom", featured: false },
] as const;

export const mediaChannels = [
  { title: "Správca bytových domov", subtitle: "Slovensko · direct-mailing", image: "/images/sbd-2-2026.jpg", href: LINKS.sbdAds, arrow: "→", imageClass: "object-cover" },
  { title: "Plynár – Vodár – Kúrenár + K", subtitle: "Slovensko a Česko · direct-mailing", image: "/images/pvk-4-2026.jpg", href: LINKS.pvkAds, arrow: "→", imageClass: "object-cover" },
  { title: "TZBportal.sk", subtitle: "Online portál a NEWS", image: "/images/tzb-portal.jpg", href: LINKS.tzbPortal, arrow: "↗", imageClass: "object-contain" },
] as const;
