import { useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ResidentialPage from "../pages/ResidentialPage";
import CommercialPage from "../pages/CommercialPage";
import ContactPage from "../pages/ContactPage";
import imgHomeHero from "figma:asset/faf500b9452a4888d24838c5d28723781c96a6d1.webp";

function PageForPath({ path }: { path: string }) {
  switch (path) {
    case "/":
      return <HomePage />;
    case "/about":
      return <AboutPage />;
    case "/residential":
      return <ResidentialPage />;
    case "/commercial":
      return <CommercialPage />;
    case "/contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default function Root() {
  const location = useLocation();
  /** Routes URL updates immediately; we defer swapping page content until the curtain fully covers (desktop). */
  const [displayedPath, setDisplayedPath] = useState(location.pathname);
  const [scrollY, setScrollY] = useState(0);
  const [curtainPhase, setCurtainPhase] = useState<"idle" | "covering" | "fading-home">("idle");
  const [curtainColor, setCurtainColor] = useState("#fffae7");
  const [curtainUsesHomePhoto, setCurtainUsesHomePhoto] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);
  const timeoutRefs = useRef<number[]>([]);
  const rafRef = useRef<number>(0);
  const shouldAnimateNextNavigationRef = useRef(false);

  /** Forces top reset without any smooth-scroll interpolation on route changes. */
  const scrollDocumentToTopInstant = () => {
    const prevHtmlBehavior = document.documentElement.style.scrollBehavior;
    const prevBodyBehavior = document.body.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.documentElement.style.scrollBehavior = prevHtmlBehavior;
    document.body.style.scrollBehavior = prevBodyBehavior;
    setScrollY(0);
  };

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
    // Keep transition safety surfaces in sync even when nav doesn't animate.
    setCurtainUsesHomePhoto(location.pathname === "/");
    setCurtainColor(location.pathname === "/about" ? "#af2828" : "#fffae7");
  }, [location.pathname]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[data-page-transition]");
      shouldAnimateNextNavigationRef.current = anchor?.getAttribute("data-page-transition") === "curtain";
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  useEffect(() => {
    if (location.pathname === displayedPath) return;

    const shouldAnimate = shouldAnimateNextNavigationRef.current;
    shouldAnimateNextNavigationRef.current = false;

    cancelAnimationFrame(rafRef.current);
    const COVER_DURATION_MS = isDesktop ? 650 : 550;
    const SWAP_DELAY_AFTER_COVER_MS = 30;

    timeoutRefs.current.forEach((id) => window.clearTimeout(id));
    timeoutRefs.current = [];

    if (!shouldAnimate) {
      setCurtainPhase("idle");
      rafRef.current = requestAnimationFrame(() => {
        scrollDocumentToTopInstant();
        setDisplayedPath(location.pathname);
      });
      return;
    }

    setCurtainPhase("covering");

    const swapTimeout = window.setTimeout(() => {
      scrollDocumentToTopInstant();
      setDisplayedPath(location.pathname);
      setCurtainPhase(location.pathname === "/" ? "fading-home" : "idle");
      requestAnimationFrame(() => scrollDocumentToTopInstant());
    }, COVER_DURATION_MS + SWAP_DELAY_AFTER_COVER_MS);

    const cleanupTimeout = window.setTimeout(() => {
      setCurtainPhase("idle");
    }, COVER_DURATION_MS + SWAP_DELAY_AFTER_COVER_MS + (location.pathname === "/" ? 340 : 10));

    timeoutRefs.current = [swapTimeout, cleanupTimeout];
  }, [location.pathname, displayedPath, isDesktop]);

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
      <div key={displayedPath}>
        <PageForPath path={displayedPath} />
      </div>
      <Footer />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
        initial={false}
        animate={
          curtainPhase === "covering"
            ? { y: "0%", opacity: 1 }
            : curtainPhase === "fading-home"
              ? { y: "0%", opacity: 0 }
              : { y: "-105%", opacity: 0 }
        }
        transition={{
          duration: curtainPhase === "covering" ? (isDesktop ? 0.65 : 0.55) : curtainPhase === "fading-home" ? 0.38 : 0.12,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {curtainUsesHomePhoto ? (
          <img
            src={imgHomeHero}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: curtainColor, opacity: 1 }}
          />
        )}
        <div
          className="absolute inset-x-0 bottom-0 bg-[#fffae7]"
          style={{ height: "max(18px, env(safe-area-inset-bottom))" }}
        />
      </motion.div>

    </div>
  );
}
