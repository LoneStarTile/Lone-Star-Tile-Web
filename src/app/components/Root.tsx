import { Outlet, useLocation } from "react-router";
import { useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Root() {
  const location = useLocation();
  // pageKey is updated inside useLayoutEffect so the key change and the scroll
  // reset both happen before the browser ever paints the new page.
  const [pageKey, setPageKey] = useState(location.pathname);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update the page key synchronously before the browser paints so the new
  // page always mounts fresh (resetting all Framer Motion whileInView state).
  // We intentionally do NOT force-scroll here — the browser stays at its
  // current position so the user can scroll down at their own pace and
  // experience every animation as they go.
  useLayoutEffect(() => {
    setPageKey(location.pathname);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isTransparent = (isHome && scrollY < 750) || (isAbout && scrollY < 600);

  return (
    <div style={{ minHeight: "100dvh" }}>
      <NavBar isTransparent={isTransparent} />
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Outlet />
      </motion.div>
      <Footer />
    </div>
  );
}
