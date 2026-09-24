import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants";

export function ImageBreakSection() {
  return (
    <section aria-label="Pre koho píšeme" className="relative mt-[clamp(80px,9vw,128px)] flex min-h-[min(84vh,800px)] items-end overflow-hidden bg-[var(--color-ink)] text-white">
      <Image src="/images/building-facade.jpg" alt="Fasáda bytového domu s balkónmi" fill sizes="100vw" className="object-cover object-[center_30%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,26,45,.92)_0%,rgba(6,42,110,.45)_50%,rgba(6,59,143,.1)_100%)]" />
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-wrap items-end justify-between gap-x-16 gap-y-8 px-[clamp(20px,3vw,40px)] py-[clamp(56px,7vw,104px)]">
        <p className="max-w-[14em] flex-1 basis-[560px] text-[clamp(36px,4.8vw,76px)] leading-[1.02] font-extrabold tracking-[-.035em] text-balance">Pre tých, ktorí budovy <span className="text-[var(--color-cyan-light)]">spravujú, navrhujú a udržiavajú.</span></p>
        <Link href={LINKS.about} className="inline-flex min-h-[54px] shrink-0 items-center gap-3 rounded-[10px] border-2 border-white/70 px-[26px] text-[17px] font-bold text-white no-underline hover:border-white hover:bg-white hover:text-[var(--color-blue-dark)]">Spoznať VOC.SK →</Link>
      </div>
    </section>
  );
}

