import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "2+", label: "Years experience" },
  { value: "4.7", label: "Avg. client rating" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Ghost text */}
      <div
        aria-hidden
        className="hidden md:block absolute right-[-60px] top-1/2 -translate-y-1/2 font-display font-extrabold pointer-events-none select-none"
        style={{ fontSize: "320px", opacity: 0.015, lineHeight: 1 }}
      >
        UX
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-7 bg-lime" />
            <span className="font-mono-syne text-lime text-[11px] tracking-[0.22em] uppercase">
              UI / UX Designer · Lagos, NG
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display font-extrabold text-text leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.75rem, 8vw, 5.5rem)" }}
          >
            Design that
            <br />
            makes people
            <br />
            <span className="italic text-lime">feel</span> something.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body font-light text-muted-c text-[17px] leading-[1.6] mt-7 max-w-[480px]"
          >
            I craft intuitive digital products — from crypto wallets to fashion storefronts —
            that solve real problems and create moments worth returning to.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3 mt-9"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-lime text-bg font-display font-bold text-[14px] px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              View work →
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-border-c text-text font-display font-bold text-[14px] px-7 py-3.5 rounded-full hover:border-lime hover:text-lime transition-colors"
            >
              About me
            </a>
          </motion.div>
        </div>

        {/* Right column — stats (desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="hidden lg:flex flex-col items-end gap-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-right">
              <div className="font-display font-extrabold text-text text-[44px] leading-none">
                {s.value}
              </div>
              <div className="font-mono-syne text-muted-c text-[12px] tracking-[0.18em] uppercase mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="lg:hidden grid grid-cols-3 gap-4 mt-4 border-t border-border-c pt-6"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-text text-[28px] leading-none">
                {s.value}
              </div>
              <div className="font-mono-syne text-muted-c text-[10px] tracking-[0.15em] uppercase mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-6 md:left-12 lg:left-16 flex-col items-center gap-3">
        <span className="font-mono-syne text-muted-c text-[10px] tracking-[0.25em] uppercase [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <span className="block w-px h-12 bg-lime/60 animate-pulse-line" />
      </div>
    </section>
  );
};

export default HeroSection;
