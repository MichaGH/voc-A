import Image from "next/image";
import Link from "next/link";

import { educationItems } from "@/data/homepage";

export function EducationSection() {
  return (
    <section id="cinnosti" aria-labelledby="cinnosti-nadpis" className="mx-auto max-w-[1320px] scroll-mt-20 px-[clamp(20px,3vw,40px)] py-[clamp(80px,9vw,128px)]">
      <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
        <div>
          <p className="text-sm font-bold text-[var(--color-teal-dark)]">Publikácia a vzdelávanie</p>
          <h2 id="cinnosti-nadpis" className="mt-2.5 text-[clamp(32px,3.6vw,50px)] leading-[1.06] font-extrabold tracking-[-.025em] text-balance">Pre správcov, ktorí chcú vedieť viac</h2>
        </div>
        <p className="max-w-[42ch] text-[17px] font-medium text-pretty text-[#3a5068]">Učebnica s aktuálnou legislatívou, medzinárodná konferencia a akreditovaný kurz na jednom mieste.</p>
      </div>
      <div className="mt-[clamp(36px,4vw,56px)] grid gap-4 min-[760px]:grid-cols-2 min-[1060px]:grid-cols-3">
        {educationItems.map((item) => (
          <article key={item.title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-40px_rgba(6,59,143,.45)]">
            <div className="relative aspect-video"><Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1060px) 33vw, (min-width: 760px) 50vw, 100vw" className={item.imageClass} /></div>
            <div className="flex flex-1 flex-col p-[clamp(24px,2.6vw,32px)]">
              <p className={`text-sm font-bold ${item.eyebrowClass}`}>{item.eyebrow}</p>
              <h3 className="mt-2 text-[clamp(22px,2vw,26px)] leading-[1.15] font-extrabold tracking-[-.01em]">{item.title}</h3>
              <p className="mt-2.5 mb-6 text-base font-medium text-pretty text-[#3a5068]">{item.description}</p>
              <Link href={item.href} className={`mt-auto inline-flex min-h-[50px] items-center self-start rounded-[10px] px-5 text-[15px] font-bold whitespace-nowrap no-underline ${item.buttonClass}`}>{item.cta}</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

