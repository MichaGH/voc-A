import { brands } from "@/data/homepage";

export function PartnersSection() {
  const items = [...brands, ...brands];
  return (
    <section aria-label="Partneri a inzerenti" className="mt-[clamp(56px,6vw,88px)] overflow-hidden bg-white pt-11 pb-12">
      <p className="mx-auto mb-8 max-w-[1320px] px-[clamp(20px,3vw,40px)] text-center text-lg font-extrabold tracking-[.16em] text-[#3a5068]">INZERUJÚ U NÁS</p>
      <div aria-hidden="true" className="marquee-mask overflow-hidden">
        <div className="brand-marquee flex w-max">
          {items.map((brand, index) => <span key={`${brand}-${index}`} className="shrink-0 px-[clamp(28px,3.5vw,56px)] text-[clamp(22px,2.2vw,30px)] font-extrabold tracking-[-.02em] whitespace-nowrap text-[#7d8fa5]">{brand}</span>)}
        </div>
      </div>
    </section>
  );
}

