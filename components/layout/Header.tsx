"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LINKS } from "@/constants";
import { navigation } from "@/data/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-60 transition-colors duration-200 ${scrolled || menuOpen ? "bg-[var(--color-blue-dark)]" : "bg-transparent"}`}>
      <div className="mx-auto flex min-h-[76px] max-w-[1320px] items-center gap-8 px-[clamp(20px,3vw,40px)]">
        <Link href={LINKS.home} aria-label="VOC.SK – úvodná stránka" className="flex min-h-11 shrink-0 items-center">
          <Image src="/images/voc-logo-white.png" alt="V.O.Č. SLOVAKIA" width={2188} height={351} priority className="h-[30px] w-auto" />
        </Link>
        <nav aria-label="Hlavná navigácia" className="ml-auto hidden min-[1060px]:block">
          <ul className="flex list-none items-center gap-0.5 p-0">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-11 items-center rounded-lg px-3.5 text-[15px] font-semibold text-white no-underline hover:bg-white/14 hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href={LINKS.publication} className="hidden min-h-11 items-center rounded-lg bg-white px-[18px] text-[15px] font-bold whitespace-nowrap text-[var(--color-blue-dark)] no-underline hover:bg-[var(--color-sky)] hover:text-[var(--color-blue-dark)] min-[1060px]:inline-flex">Objednať publikáciu</Link>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobilne-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border-0 bg-white/14 px-4 text-[15px] leading-none font-bold text-white min-[1060px]:hidden"
        >
          <span aria-hidden="true" className="grid w-[18px] gap-1"><span className="h-0.5 bg-white" /><span className="h-0.5 bg-white" /><span className="h-0.5 bg-white" /></span>
          <span>{menuOpen ? "Zavrieť" : "Menu"}</span>
        </button>
      </div>
      {menuOpen ? (
        <nav id="mobilne-menu" aria-label="Mobilná navigácia" className="border-t border-white/20 bg-[var(--color-blue-dark)] min-[1060px]:hidden">
          <ul className="grid list-none px-[clamp(20px,3vw,40px)] pt-2 pb-6">
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-white/18">
                <Link href={item.href} onClick={() => setMenuOpen(false)} className="flex min-h-[54px] items-center text-[19px] font-bold text-white no-underline hover:text-[var(--color-cyan-light)]">{item.label}</Link>
              </li>
            ))}
            <li className="pt-[18px]">
              <Link href={LINKS.publication} onClick={() => setMenuOpen(false)} className="flex min-h-[54px] items-center justify-center rounded-[10px] bg-[var(--color-coral)] px-4 text-center text-[17px] font-extrabold text-[var(--color-ink)] no-underline hover:bg-[#ff6a52]">Objednať publikáciu Správca budov</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

