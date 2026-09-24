import Link from "next/link";

import { AdvertisingSection } from "@/components/homepage/AdvertisingSection";
import { EducationSection } from "@/components/homepage/EducationSection";
import { HeroSection } from "@/components/homepage/HeroSection";
import { ImageBreakSection } from "@/components/homepage/ImageBreakSection";
import { MagazinesSection } from "@/components/homepage/MagazinesSection";
import { PartnersSection } from "@/components/homepage/PartnersSection";
import { StatsSection } from "@/components/homepage/StatsSection";
import { TopicsSection } from "@/components/homepage/TopicsSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Link href="#obsah" className="sr-only z-100 bg-[var(--color-ink)] px-4 py-3 font-bold text-white focus:fixed focus:top-2 focus:left-4 focus:not-sr-only">Preskočiť na obsah</Link>
      <Header />
      <main id="obsah">
        <HeroSection />
        <MagazinesSection />
        <PartnersSection />
        <StatsSection />
        <TopicsSection />
        <ImageBreakSection />
        <EducationSection />
        <AdvertisingSection />
      </main>
      <Footer />
    </>
  );
}
