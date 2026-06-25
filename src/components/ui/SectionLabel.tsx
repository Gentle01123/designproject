interface SectionLabelProps {
  children: string;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="h-px w-7 bg-lime" />
    <span className="font-mono-syne text-lime text-[11px] tracking-[0.2em] uppercase">
      {children}
    </span>
  </div>
);

export default SectionLabel;
