import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const active = useActiveSection(isHome ? links.map((l) => l.id) : []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    if (!isHome) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-border-c/40"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-16 h-14 md:h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-extrabold text-text text-xl tracking-tight">
          jsh<span className="text-lime">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((link) =>
            isHome ? (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className="relative font-body text-[13px] text-text/80 hover:text-text transition-colors"
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime" />
                )}
              </button>
            ) : (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className="font-body text-[13px] text-text/80 hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="mailto:gentlejoshua12@gmail.com"
            className="hidden md:inline-flex items-center gap-2 bg-lime text-bg font-display font-bold text-[13px] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Hire me →
          </a>
          <button
            className="md:hidden text-text p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-border-c/40">
          <div className="px-6 py-8 flex flex-col gap-5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className="text-left font-display font-bold text-2xl text-text"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:gentlejoshua12@gmail.com"
              className="mt-2 inline-block bg-lime text-bg font-display font-bold text-[13px] px-5 py-3 rounded-full w-fit"
            >
              Hire me →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
