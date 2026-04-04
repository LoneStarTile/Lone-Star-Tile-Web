import { Link, useLocation } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.webp";

interface NavBarProps {
  isTransparent: boolean;
}

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Residential", to: "/residential" },
  { label: "Commercial", to: "/commercial" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function NavBar({ isTransparent }: NavBarProps) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // Only hide on mobile (window width < 768px)
    const isMobile = window.innerWidth < 768;
    if (isMobile && latest > previous && latest > 150 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const textColor = isTransparent && !menuOpen ? "text-white" : "text-black";
  const barColor = isTransparent && !menuOpen ? "bg-white" : "bg-black";

  return (
    <>
      {/* ── Header bar (always on top) ──────────────────── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center justify-between px-8 py-3 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link to="/" className="relative z-10" onClick={() => setMenuOpen(false)}>
            <motion.img
              src={imgLogo}
              alt="Lone Star Tile"
              className="h-[60px] w-auto object-contain"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative switz-medium text-[17px] tracking-wider ${textColor} transition-colors duration-300 group`}
              >
                {link.label.toUpperCase()}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] transition-all duration-300 ${
                    isTransparent ? "bg-white" : "bg-black"
                  } ${location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger — animated to X */}
          <button
            className="md:hidden relative z-[60] flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              className={`block w-6 h-0.5 origin-center ${barColor} transition-colors duration-300`}
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.span
              className={`block w-6 h-0.5 ${barColor} transition-colors duration-300`}
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block w-6 h-0.5 origin-center ${barColor} transition-colors duration-300`}
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            />
          </button>
        </div>
      </motion.header>

      {/* ── Full-screen overlay ──────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#fffae7", transformOrigin: "top" }}
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col items-center gap-2 w-full px-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  className="w-full overflow-hidden border-b border-black/10 last:border-b-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.55 + i * 0.06 }}
                >
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.55,
                      delay: 0.3 + i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center py-5 group w-full"
                    >
                      <span className="cab-black text-[44px] tracking-[-1.5px] leading-none text-black group-hover:text-[#c1272d] transition-colors duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}