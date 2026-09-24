import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[#c9d6e3]">
      <div className="mx-auto max-w-[1320px] px-[clamp(20px,3vw,40px)] pt-11 pb-7">
        <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-7">
          <div className="min-w-0 flex-1 basis-[300px]">
            <Image src="/images/voc-logo-white.png" alt="V.O.Č. SLOVAKIA" width={2188} height={351} className="h-7 w-auto" />
            <address className="mt-4 text-[15px] leading-[1.7] not-italic">
              V.O.Č. SLOVAKIA s.r.o., Školská 23, 040 11 Košice<br />
              <Link href={LINKS.email} className="font-bold text-white hover:text-[var(--color-cyan)]">voc@voc.sk</Link> ·{" "}
              <Link href={LINKS.phone} className="font-bold whitespace-nowrap text-white hover:text-[var(--color-cyan)]">+421 55 678 28 08</Link>
            </address>
          </div>
          <nav aria-label="Päta" className="min-w-0 flex-1 basis-[420px]">
            <ul className="flex list-none flex-wrap gap-x-6 p-0 text-[15px] font-semibold">
              {navigation.map((item) => <li key={item.href}><Link href={item.href} className="inline-flex min-h-11 items-center text-white no-underline hover:text-[var(--color-cyan)]">{item.label}</Link></li>)}
              <li><Link href={LINKS.tzbPortal} className="inline-flex min-h-11 items-center text-[var(--color-cyan)] no-underline hover:text-white">TZBportal.sk ↗</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-7 flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-white/14 pt-[18px] text-sm">
          <p>© {new Date().getFullYear()} V.O.Č. SLOVAKIA s.r.o. Všetky práva vyhradené.</p>
          <p className="flex flex-wrap gap-x-5">
            <Link href={LINKS.gdpr} className="text-[#c9d6e3] hover:text-white">Ochrana osobných údajov (GDPR)</Link>
            <Link href={LINKS.history} className="text-[#c9d6e3] hover:text-white">História</Link>
            <Link href={LINKS.services} className="text-[#c9d6e3] hover:text-white">Služby</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

