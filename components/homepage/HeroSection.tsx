import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants";
import { heroCovers } from "@/data/homepage";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-nadpis" className="relative -mt-[76px] overflow-hidden bg-[linear-gradient(128deg,#063b8f_0%,#0552c4_45%,#006fe8_100%)] pt-[76px] text-white">
      <div aria-hidden="true" className="hero-grid absolute inset-0 pointer-events-none" />
      <div aria-hidden="true" className="absolute top-[4%] right-[-6%] aspect-square w-[62%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,232,.42)_0%,rgba(0,194,232,.14)_40%,transparent_66%)]" />
      <div aria-hidden="true" className="absolute top-[22%] right-[14%] aspect-square w-[30%] bg-[radial-gradient(circle,rgba(180,240,255,.22)_0%,transparent_62%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-[rgba(6,42,110,.45)]" />
      <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full">
        <path d="M-20 748 C 380 748, 560 708, 800 578 S 1180 328 1460 328" fill="none" stroke="#fff" strokeOpacity=".08" strokeWidth="30" />
        <path d="M-20 700 C 380 700, 560 660, 800 530 S 1180 280 1460 280" fill="none" stroke="#00c2e8" strokeWidth="2.5" />
        <path d="M-20 716 C 380 716, 560 676, 800 546 S 1180 296 1460 296" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="1.5" />
        <path d="M-20 732 C 380 732, 560 692, 800 562 S 1180 312 1460 312" fill="none" stroke="#00c2e8" strokeOpacity=".55" strokeWidth="1.5" />
        <path d="M-20 796 C 420 796, 620 760, 860 650 S 1220 440 1460 440" fill="none" stroke="#00c2e8" strokeOpacity=".3" strokeWidth="1" strokeDasharray="4 10" />
        <path d="M331 683 V 920" fill="none" stroke="#00c2e8" strokeOpacity=".6" strokeWidth="2" />
        <path d="M345 699 V 920" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="1.5" />
        <path d="M1040 404 V 120 H 1460" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="1.5" />
        <path d="M1058 393 V 138 H 1460" fill="none" stroke="#00c2e8" strokeOpacity=".35" strokeWidth="1.5" />
        <circle cx="1040" cy="404" r="5" fill="#063b8f" stroke="#7fe3f5" strokeWidth="2" />
        <circle cx="1040" cy="120" r="3" fill="#7fe3f5" />
        <circle cx="331" cy="683" r="7" fill="#063b8f" stroke="#00c2e8" strokeWidth="2.5" />
        <circle cx="523" cy="646" r="4" fill="#fff" />
        <circle cx="523" cy="646" r="12" fill="none" stroke="#fff" strokeOpacity=".35" />
      </svg>
      <div className="relative mx-auto flex min-h-[min(86vh,860px)] max-w-[1320px] flex-wrap items-center gap-x-6 gap-y-10 px-[clamp(20px,3vw,40px)] pt-[clamp(28px,5vw,64px)] pb-[150px]">
        <div className="relative z-[2] min-w-0 max-w-[600px] flex-1 basis-[440px]">
          <h1 id="hero-nadpis" className="text-[clamp(40px,4.8vw,66px)] leading-[1.04] font-extrabold tracking-[-.03em] text-balance">Odborný svet budov na jednom mieste.</h1>
          <p className="mt-6 max-w-[48ch] text-[clamp(17px,1.5vw,20px)] leading-[1.55] font-medium text-pretty text-[#e6f2ff]">Časopisy, publikácie a odborné vzdelávanie pre správcov budov a profesionálov v oblasti technických zariadení budov.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#casopisy" className="inline-flex min-h-[54px] items-center gap-3 rounded-[10px] bg-[var(--color-coral)] px-[26px] text-[17px] font-extrabold text-[var(--color-ink)] no-underline hover:bg-[#ff6a52] hover:text-[var(--color-ink)]">Objaviť časopisy <span aria-hidden="true">↓</span></Link>
            <Link href={LINKS.about} className="inline-flex min-h-[54px] items-center rounded-[10px] border-2 border-white/70 px-[26px] text-[17px] font-bold text-white no-underline hover:border-white hover:bg-white hover:text-[var(--color-blue-dark)]">Spoznať VOC.SK</Link>
          </div>
        </div>
        <div role="group" aria-label="Titulné strany časopisov VOC.SK" className="relative ml-auto aspect-[10/9] min-w-[280px] max-w-[720px] flex-[1.25_1_460px]">
          {heroCovers.map((cover) => (
            <Image key={cover.image} src={cover.image} alt={cover.alt} width={595} height={842} priority className={`absolute aspect-[595/842] h-auto rounded-[3px] shadow-[0_40px_60px_-26px_rgba(6,26,45,.65)] ${cover.className}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

