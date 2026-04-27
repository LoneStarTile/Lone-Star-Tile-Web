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

  // Scroll to top and remount the page before the browser paints.
  // No page-level fade transition — the page appears instantly at the top
  // so the user sees a clean start and scroll-triggered animations only
  // fire as they scroll down.
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
      <div key={pageKey}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
