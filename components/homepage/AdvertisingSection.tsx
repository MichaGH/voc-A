import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants";
import { mediaChannels, services } from "@/data/homepage";

export function AdvertisingSection() {
  return (
    <section id="sluzby" aria-labelledby="sluzby-nadpis" className="relative scroll-mt-20 overflow-hidden bg-[linear-gradient(160deg,#063b8f_0%,#0548b0_60%,#0552c4_100%)] text-white">
      <div aria-hidden="true" className="services-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1320px] px-[clamp(20px,3vw,40px)] py-[clamp(72px,8vw,112px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <div className="min-w-0 max-w-[680px] flex-1 basis-[480px]">
            <p className="text-sm font-bold text-[var(--color-cyan-light)]">Pre inzerentov a partnerov</p>
            <h2 id="sluzby-nadpis" className="mt-3 text-[clamp(32px,3.6vw,50px)] leading-[1.06] font-extrabold tracking-[-.025em] text-balance">Oslovte odborníkov, ktorí budovy spravujú, navrhujú a udržiavajú.</h2>
          </div>
          <div className="min-w-0 flex-[0_1_420px]">
            <p className="text-[17px] leading-[1.6] font-medium text-pretty text-[#e6f2ff]">Viac ako 20 rokov prinášame recenzované odborné informácie správcom budov a profesiám TZB. Vašu firmu predstavíme v tlači aj online.</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href={LINKS.advertisingEmail} className="inline-flex min-h-[54px] items-center gap-3 rounded-[10px] bg-[var(--color-coral)] px-[26px] text-[17px] font-extrabold text-[var(--color-ink)] no-underline hover:bg-[#ff6a52] hover:text-[var(--color-ink)]">Dohodnúť inzerciu <span aria-hidden="true">→</span></Link>
              <Link href={LINKS.services} className="inline-flex min-h-11 items-center text-base font-bold text-white hover:text-[var(--color-cyan-light)]">Všetky služby</Link>
            </div>
          </div>
        </div>

        <ul aria-label="Služby vydavateľstva" className="mt-[clamp(48px,5vw,72px)] grid list-none gap-4 p-0 min-[760px]:grid-cols-2 min-[1060px]:grid-cols-4">
          {services.map((service) => (
            <li key={service.number} className={`flex flex-col overflow-hidden rounded-2xl bg-white ${service.featured ? "min-[760px]:col-span-2 min-[1060px]:row-span-2" : ""}`}>
              <div className={`relative bg-[var(--color-sky)] ${service.featured ? "min-h-[280px] flex-1" : "aspect-[16/10] shrink-0"}`}>
                <Image src={service.image} alt={service.alt} fill sizes={service.featured ? "(min-width: 1060px) 50vw, (min-width: 760px) 100vw, 100vw" : "(min-width: 1060px) 25vw, (min-width: 760px) 50vw, 100vw"} className="object-cover" />
              </div>
              <div className={service.featured ? "px-[30px] pt-7 pb-[30px]" : "px-[22px] pt-5 pb-6"}>
                <span aria-hidden="true" className="block text-sm font-extrabold text-[var(--color-teal-dark)]">{service.number}</span>
                <h3 className={`mt-2 leading-[1.2] font-extrabold tracking-[-.01em] text-[var(--color-ink)] ${service.featured ? "text-[26px]" : "text-[19px]"}`}>{service.title}</h3>
                <p className={`mt-2 max-w-[46ch] leading-[1.55] font-medium text-pretty text-[#3a5068] ${service.featured ? "text-base" : "text-[15px]"}`}>{service.description}</p>
              </div>
            </li>
          ))}
          <li className="flex flex-col overflow-hidden rounded-2xl bg-white">
            <div aria-hidden="true" className="relative aspect-[16/10] shrink-0 overflow-hidden bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-blue)]">
              <Image src="/images/sbd-2-2026.jpg" alt="" width={595} height={842} className="absolute top-[16%] left-[16%] aspect-[595/842] h-auto w-[30%] -rotate-[8deg] rounded-sm shadow-[0_18px_30px_-14px_rgba(6,26,45,.6)]" />
              <Image src="/images/pvk-4-2026.jpg" alt="" width={595} height={842} className="absolute top-[10%] left-[36%] aspect-[595/842] h-auto w-[30%] rotate-3 rounded-sm shadow-[0_18px_30px_-14px_rgba(6,26,45,.6)]" />
              <Image src="/images/tzb-portal.jpg" alt="" width={176} height={200} className="absolute top-[30%] left-[58%] aspect-[176/200] h-auto w-[26%] rotate-[9deg] rounded-sm object-cover shadow-[0_18px_30px_-14px_rgba(6,26,45,.6)]" />
            </div>
            <div className="px-[22px] pt-5 pb-6">
              <span aria-hidden="true" className="block text-sm font-extrabold text-[var(--color-teal-dark)]">05</span>
              <h3 className="mt-2 text-[19px] leading-[1.2] font-extrabold tracking-[-.01em] text-[var(--color-ink)]">Zľavy pri kumulovanej inzercii</h3>
              <p className="mt-2 max-w-[46ch] text-[15px] leading-[1.55] font-medium text-pretty text-[#3a5068]">Výhodnejšie podmienky pri inzercii vo viacerých našich médiách.</p>
            </div>
          </li>
        </ul>

        <div className="mt-[clamp(48px,5vw,64px)] flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/20 pt-7">
          <h3 className="flex-1 basis-full text-[15px] font-extrabold text-white">Kde vás uvidia</h3>
          <ul className="grid min-w-0 flex-1 basis-full list-none gap-3 p-0 min-[1060px]:grid-cols-3">
            {mediaChannels.map((channel) => (
              <li key={channel.title}>
                <Link href={channel.href} className="flex h-full items-center gap-[18px] rounded-xl bg-white py-4 pr-5 pl-4 text-[var(--color-ink)] no-underline hover:bg-[var(--color-sky)] hover:text-[var(--color-blue-dark)]">
                  <Image src={channel.image} alt="" width={52} height={74} className={`h-[74px] w-[52px] shrink-0 rounded-[3px] shadow-[0_6px_14px_-8px_rgba(6,26,45,.5)] ${channel.imageClass}`} />
                  <span className="min-w-0 flex-1"><span className="block text-base leading-[1.3] font-extrabold">{channel.title}</span><span className="mt-0.5 block text-sm font-semibold text-[#3a5068]">{channel.subtitle}</span></span>
                  <span aria-hidden="true" className="shrink-0 font-extrabold text-[var(--color-blue)]">{channel.arrow}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

