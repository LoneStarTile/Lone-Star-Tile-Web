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

  // useLayoutEffect fires synchronously after React commits the DOM but BEFORE
  // the browser paints.  By resetting scroll and updating the key here, the
  // browser's first paint of the new page is always at scroll = 0, so Framer
  // Motion's IntersectionObserver is initialised with the viewport at the top
  // and every whileInView animation is guaranteed to be fresh.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setScrollY(0);
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
