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
    
    // Explicitly update body background to fix iOS Safari overscroll/notch coloring
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;
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
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <NavBar isTransparent={isTransparent} />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}