import Image from "next/image";
import Link from "next/link";

import { magazines } from "@/data/homepage";

export function MagazinesSection() {
  return (
    <section id="casopisy" aria-label="Odborné časopisy" className="relative z-[5] mx-auto -mt-24 max-w-[1320px] scroll-mt-20 px-[clamp(20px,3vw,40px)]">
      <div className="flex flex-wrap overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(6,59,143,.45)]">
        {magazines.map((magazine) => (
          <article key={magazine.id} aria-labelledby={magazine.id} className={`relative flex min-h-[400px] min-w-0 flex-1 basis-[480px] items-stretch bg-gradient-to-br ${magazine.gradient} text-white`}>
            <div className="relative z-[1] flex flex-[1_1_55%] flex-col justify-between gap-7 p-[clamp(28px,3.5vw,48px)]">
              <div>
                <p className="text-sm font-bold text-white opacity-90">{magazine.eyebrow}</p>
                <h2 id={magazine.id} className="mt-2.5 text-[clamp(28px,2.8vw,40px)] leading-[1.08] font-extrabold tracking-[-.02em]">{magazine.title}</h2>
                <p className="mt-4 max-w-[34ch] font-medium text-pretty text-white">{magazine.description}</p>
              </div>
              <div>
                <Link href={magazine.href} className="inline-flex min-h-[52px] items-center gap-3 rounded-[10px] bg-white px-[22px] text-base font-bold text-[var(--color-ink)] no-underline hover:bg-[var(--color-sky)] hover:text-[var(--color-ink)]">Otvoriť časopis <span aria-hidden="true">→</span></Link>
                <p className="mt-3.5 text-sm font-semibold text-white">{magazine.issue} · <Link href={magazine.sampleHref} className="text-white underline hover:text-white">náhľad PDF</Link></p>
              </div>
            </div>
            <div className="relative min-w-[150px] flex-[0_1_42%]">
              <Image src={magazine.image} alt={magazine.imageAlt} width={595} height={842} className={`absolute right-[clamp(20px,3vw,44px)] bottom-[-8%] aspect-[595/842] h-auto w-[min(100%,260px)] rounded-[3px] shadow-[0_36px_60px_-22px_rgba(6,26,45,.55)] ${magazine.rotation}`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

