interface StatCardProps {
  value: string;
  label: string;
  align?: "left" | "right" | "center";
}

const StatCard = ({ value, label, align = "left" }: StatCardProps) => (
  <div className={`flex flex-col ${align === "right" ? "items-end text-right" : align === "center" ? "items-center text-center" : "items-start"}`}>
    <span className="font-display font-extrabold text-lime text-[44px] md:text-[48px] leading-none">
      {value}
    </span>
    <span className="font-mono-syne text-muted-c text-[12px] tracking-[0.18em] uppercase mt-2">
      {label}
    </span>
  </div>
);

export default StatCard;
