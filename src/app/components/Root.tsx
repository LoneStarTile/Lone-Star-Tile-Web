import { Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Root() {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let color = "#fffae7";
    if (location.pathname === "/") color = "#000000";
    if (location.pathname === "/about") color = "#af2828";
    
    // Update theme-color meta tag
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    } else {
      const meta = document.createElement('meta');
      meta.name = "theme-color";
      meta.content = color;
      document.head.appendChild(meta);
    }
    
    // Explicitly update body background to always be cream so footer overscroll is flush
    document.body.style.backgroundColor = "#fffae7";
    document.documentElement.style.backgroundColor = "#fffae7";
  }, [location.pathname]);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setScrollY(0);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isTransparent = (isHome && scrollY < 750) || (isAbout && scrollY < 600);

  return (
    <div style={{ minHeight: "100dvh" }}>
      <NavBar isTransparent={isTransparent} />
      <Outlet />
      <Footer />
    </div>
  );
}