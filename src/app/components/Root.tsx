import { Outlet, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Root() {
  const location = useLocation();
  const [pageKey, setPageKey] = useState(location.pathname);
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [curtainPhase, setCurtainPhase] = useState<"idle" | "covering" | "revealing">("idle");
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);
  const previousPathRef = useRef(location.pathname);
  const timeoutRefs = useRef<number[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (location.pathname === previousPathRef.current) return;
    previousPathRef.current = location.pathname;

    cancelAnimationFrame(rafRef.current);
    const COVER_DURATION_MS = 650;
    const REVEAL_DURATION_MS = 700;

    timeoutRefs.current.forEach((id) => window.clearTimeout(id));
    timeoutRefs.current = [];

    setVisible(false);
    window.scrollTo(0, 0);
    setScrollY(0);

    if (!isDesktop) {
      setCurtainPhase("idle");
      rafRef.current = requestAnimationFrame(() => {
        setPageKey(location.pathname);
        setVisible(true);
      });
      return;
    }

    setCurtainPhase("covering");

    const swapTimeout = window.setTimeout(() => {
      window.scrollTo(0, 0);
      setScrollY(0);
      setPageKey(location.pathname);
      setVisible(true);
      setCurtainPhase("revealing");
    }, COVER_DURATION_MS);

    const cleanupTimeout = window.setTimeout(() => {
      setCurtainPhase("idle");
    }, COVER_DURATION_MS + REVEAL_DURATION_MS);

    timeoutRefs.current = [swapTimeout, cleanupTimeout];
  }, [location.pathname, isDesktop]);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((id) => window.clearTimeout(id));
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isTransparent = (isHome && scrollY < 750) || (isAbout && scrollY < 600);

  return (
    <div style={{ minHeight: "100dvh" }}>
      <NavBar isTransparent={isTransparent} />
      <div key={pageKey} style={{ visibility: visible ? "visible" : "hidden" }}>
        <Outlet />
      </div>
      <Footer />

      {isDesktop && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
          initial={false}
          animate={
            curtainPhase === "covering"
              ? { y: "0%" }
              : curtainPhase === "revealing"
                ? { y: "-105%" }
                : { y: "-105%" }
          }
          transition={{
            duration: curtainPhase === "covering" ? 0.65 : 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="absolute inset-0 bg-[#fffae7]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.65),rgba(255,255,255,0)_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(193,39,45,0.16),rgba(193,39,45,0)_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.06),rgba(0,0,0,0))]" />
        </motion.div>
      )}
    </div>
  );
}
