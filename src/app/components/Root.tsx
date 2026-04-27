import { useOutlet, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Root() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  // outletRef always holds the latest outlet element from React Router
  const outletRef = useRef(currentOutlet);
  outletRef.current = currentOutlet;

  // page.outlet is the *displayed* content — updated only AFTER scroll is reset
  const [page, setPage] = useState({ outlet: currentOutlet, key: location.pathname });
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // 1. Scroll to top immediately — this is synchronous
    window.scrollTo(0, 0);
    setScrollY(0);

    // 2. One animation frame later, swap in the new page content.
    //    By the time the RAF fires, the browser has already committed
    //    the scrollY=0 position, so Framer Motion's IntersectionObserver
    //    is created with the viewport starting at the top of the page.
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setPage({ outlet: outletRef.current, key: location.pathname });
    });

    return () => cancelAnimationFrame(rafRef.current);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isTransparent = (isHome && scrollY < 750) || (isAbout && scrollY < 600);

  return (
    <div style={{ minHeight: "100dvh" }}>
      <NavBar isTransparent={isTransparent} />
      <motion.div
        key={page.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {page.outlet}
      </motion.div>
      <Footer />
    </div>
  );
}
