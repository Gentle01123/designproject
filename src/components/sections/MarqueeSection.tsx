import { marqueeItems } from "@/data/skills";

const MarqueeSection = () => {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <section className="bg-surface border-y border-border-c py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-3 px-7 shrink-0">
            <span className="w-[5px] h-[5px] rounded-full bg-lime shrink-0" />
            <span className="font-display font-semibold text-muted-c text-[14px] uppercase tracking-[0.18em]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
