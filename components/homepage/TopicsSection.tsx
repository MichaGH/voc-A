import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants";
import { topics } from "@/data/homepage";

export function TopicsSection() {
  return (
    <section id="temy" aria-labelledby="temy-nadpis" className="mx-auto max-w-[1320px] scroll-mt-20 px-[clamp(20px,3vw,40px)] pt-[clamp(80px,9vw,128px)]">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="text-sm font-bold text-[var(--color-teal-dark)]">Čo nájdete v časopisoch</p>
        <h2 id="temy-nadpis" className="mx-auto mt-3 max-w-[16ch] text-[clamp(36px,4.6vw,64px)] leading-[1.02] font-extrabold tracking-[-.03em] text-balance">Vždy o krok vpred v správe a technike budov.</h2>
        <p className="mx-auto mt-[22px] max-w-[60ch] text-[clamp(17px,1.5vw,20px)] font-medium text-pretty text-[#23384d]">Či spravujete bytový dom, navrhujete vykurovanie, montujete rozvody vody a plynu, alebo servisujete klimatizáciu — v každom čísle nájdete legislatívu, moderné technológie, produkty a skúsenosti z praxe.</p>
      </div>
      <div className="mt-[clamp(48px,6vw,80px)] grid gap-4 min-[760px]:grid-cols-2 min-[1060px]:grid-cols-3">
        {topics.map((topic) => (
          <article key={topic.title} className="relative flex min-h-[480px] flex-col justify-end overflow-hidden rounded-2xl bg-[var(--color-ink)] text-white shadow-[0_30px_60px_-36px_rgba(6,26,45,.6)] min-[760px]:min-h-[600px]">
            <Image src={topic.image} alt={topic.alt} fill sizes="(min-width: 1060px) 33vw, (min-width: 760px) 50vw, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,45,0)_25%,rgba(6,26,45,.6)_55%,rgba(6,26,45,.96)_100%)]" />
            <div className="relative p-[clamp(26px,2.6vw,36px)]">
              <p className="inline-flex items-center gap-2 text-[13px] font-extrabold tracking-[.04em] text-white"><span aria-hidden="true" className={`size-2.5 rounded-full ${topic.dotClass}`} />{topic.eyebrow}</p>
              <h3 className="mt-3.5 min-h-[2.16em] text-[clamp(26px,2.3vw,34px)] leading-[1.08] font-extrabold tracking-[-.02em] text-balance">{topic.title}</h3>
              <p className="mt-3 min-h-[4.65em] text-base leading-[1.55] font-medium text-pretty text-[#d6e4f2]">{topic.description}</p>
              <ul className="mt-5 flex list-none flex-wrap gap-2 border-t border-white/20 pt-[18px]">
                {topic.tags.map((tag) => <li key={tag} className="rounded-full bg-white/12 px-3 py-1.5 text-[13px] font-bold text-white">{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-[clamp(56px,7vw,96px)] flex flex-col items-center overflow-hidden rounded-2xl bg-[linear-gradient(128deg,#063b8f_0%,#0552c4_45%,#006fe8_100%)] px-[clamp(24px,5vw,64px)] py-[clamp(44px,6vw,88px)] text-center text-white shadow-[0_24px_60px_-30px_rgba(6,59,143,.45)]">
        <div aria-hidden="true" className="relative flex justify-center">
          <Image src="/images/sbd-2-2026.jpg" alt="" width={595} height={842} className="aspect-[595/842] h-auto w-[clamp(72px,7vw,100px)] translate-x-2 -rotate-6 rounded-[3px] shadow-[0_20px_36px_-18px_rgba(6,26,45,.7)]" />
          <Image src="/images/pvk-4-2026.jpg" alt="" width={595} height={842} className="aspect-[595/842] h-auto w-[clamp(72px,7vw,100px)] -translate-x-2 rotate-6 rounded-[3px] shadow-[0_20px_36px_-18px_rgba(6,26,45,.7)]" />
        </div>
        <p className="mt-8 text-sm font-bold text-[var(--color-cyan-light)]">Predplatné</p>
        <h2 className="mt-2.5 max-w-[18ch] text-[clamp(32px,3.8vw,54px)] leading-[1.05] font-extrabold tracking-[-.025em] text-balance">Majte každé nové číslo medzi prvými.</h2>
        <p className="mt-[18px] max-w-[52ch] text-lg font-medium text-pretty text-[#e6f2ff]">Predplaťte si Správcu bytových domov alebo Plynár – Vodár – Kúrenár + Klimatizácia a nezmeškajte žiadnu novinku z legislatívy, techniky a praxe.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={LINKS.sbd} className="inline-flex min-h-[54px] items-center rounded-[10px] bg-white px-6 text-center text-base font-extrabold whitespace-nowrap text-[var(--color-blue-dark)] no-underline hover:bg-[#1cc49a] hover:text-[var(--color-ink)] max-sm:whitespace-normal">Predplatiť Správcu bytových domov</Link>
          <Link href={LINKS.pvk} className="inline-flex min-h-[54px] items-center rounded-[10px] bg-white px-6 text-center text-base font-extrabold whitespace-nowrap text-[var(--color-blue-dark)] no-underline hover:bg-[var(--color-cyan)] hover:text-[var(--color-ink)] max-sm:whitespace-normal">Predplatiť Plynár – Vodár – Kúrenár</Link>
        </div>
      </div>
    </section>
  );
}

