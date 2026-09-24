import { stats } from "@/data/homepage";

export function StatsSection() {
  return (
    <section aria-label="VOC.SK v číslach" className="overflow-hidden bg-[linear-gradient(128deg,#063b8f_0%,#0552c4_45%,#006fe8_100%)] text-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-y-11 px-[clamp(20px,3vw,40px)] py-[clamp(46px,5vw,74px)] min-[1060px]:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className={`px-[clamp(16px,2.5vw,40px)] text-center ${index % 2 === 1 || index === 2 ? "border-l border-white/22" : ""} ${index === 2 ? "max-[1059px]:border-l-0" : ""}`}>
            <p className="text-[clamp(46px,4.6vw,72px)] leading-[.95] font-extrabold tracking-[-.04em] text-white">{stat.value}</p>
            <p className="mt-3.5 text-base font-medium text-[#cfe3ff]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

