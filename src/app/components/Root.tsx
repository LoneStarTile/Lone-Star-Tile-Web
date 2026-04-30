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

const bundledImageModules = import.meta.glob("../../**/*.{webp,png,jpg,jpeg,gif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const bundledImageUrls = Object.values(bundledImageModules);

const pageImageUrls = [
  "/about-photo-1.webp",
  "/about-photo-2.webp",
  "/about-photo-3.webp",
  "/circle-k.webp",
  "/kitchen-backsplash.webp",
  "/living-room.webp",
  "https://images.unsplash.com/photo-1768413292551-10011d6c354e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHRpbGUlMjBtYXJibGUlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3NDc0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1666418093542-95ef85253732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBsYXlpbmclMjB0aWxlJTIwZmxvb3IlMjBpbnN0YWxsYXRpb24lMjB3b3JrZXJ8ZW58MXx8fHwxNzc0NzUwMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758548157195-67d141468467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjB0aWxlJTIwaW5zdGFsbGF0aW9uJTIwcmVzaWRlbnRpYWwlMjBob21lfGVufDF8fHx8MTc3NDc1MDE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1567238563567-b99d8ac66e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwd29ya2VyJTIwZ3JvdXRpbmclMjBmbG9vciUyMGNvbnN0cnVjdGlvbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ3NTAxODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1770822662831-c361f15790ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjb25zdHJ1Y3Rpb24lMjBjcmV3JTIwam9iJTIwc2l0ZSUyMHdvcmtpbmd8ZW58MXx8fHwxNzc0NzUwMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
];

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
  const [assetsReady, setAssetsReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [curtainPhase, setCurtainPhase] = useState<"idle" | "covering">("idle");
  const [curtainColor, setCurtainColor] = useState("#fffae7");
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);
  const timeoutRefs = useRef<number[]>([]);
  const rafRef = useRef<number>(0);

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
    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const image = new Image();
        image.decoding = "async";
        image.loading = "eager";
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = src;
      });

    const allImageUrls = Array.from(new Set([...bundledImageUrls, ...pageImageUrls]));
    Promise.all(allImageUrls.map((url) => preloadImage(url))).finally(() => setAssetsReady(true));
  }, []);

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
    if (location.pathname === displayedPath) return;

    cancelAnimationFrame(rafRef.current);
    const COVER_DURATION_MS = 650;
    const SWAP_DELAY_AFTER_COVER_MS = 30;

    timeoutRefs.current.forEach((id) => window.clearTimeout(id));
    timeoutRefs.current = [];

    if (!isDesktop) {
      setCurtainPhase("idle");
      rafRef.current = requestAnimationFrame(() => {
        scrollDocumentToTopInstant();
        setDisplayedPath(location.pathname);
      });
      return;
    }

    setCurtainColor(location.pathname === "/about" ? "#af2828" : "#fffae7");
    setCurtainPhase("covering");

    const swapTimeout = window.setTimeout(() => {
      scrollDocumentToTopInstant();
      setDisplayedPath(location.pathname);
      setCurtainPhase("idle");
      requestAnimationFrame(() => scrollDocumentToTopInstant());
    }, COVER_DURATION_MS + SWAP_DELAY_AFTER_COVER_MS);

    const cleanupTimeout = window.setTimeout(() => {
      setCurtainPhase("idle");
    }, COVER_DURATION_MS + SWAP_DELAY_AFTER_COVER_MS + 10);

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

  if (!assetsReady) {
    return (
      <div className="min-h-screen w-full bg-[#fffae7] flex items-center justify-center">
        <p className="switz-medium text-[16px] tracking-[0.32px] text-black/70">Loading assets...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100dvh" }}>
      <NavBar isTransparent={isTransparent} />
      <div key={displayedPath}>
        <PageForPath path={displayedPath} />
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
              : { y: "-105%" }
          }
          transition={{
            duration: curtainPhase === "covering" ? 0.65 : 0.02,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: curtainColor, opacity: 1 }}
          />
        </motion.div>
      )}
    </div>
  );
}
