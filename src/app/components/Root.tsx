import { Outlet, useLocation } from "react-router";
import { useState, useEffect, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    let color: string | null = "#fffae7";
    if (location.pathname === "/") color = null;
    if (location.pathname === "/residential") color = "#fffae7";
    if (location.pathname === "/commercial") color = "#fffae7";
    if (location.pathname === "/about") color = "#af2828";
    
    // Update theme-color meta tag instantly before browser paint
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (color) {
      if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.setAttribute("name", "theme-color");
        document.head.appendChild(metaThemeColor);
      }
      metaThemeColor.setAttribute("content", color);
      document.body.style.backgroundColor = color;
      document.documentElement.style.backgroundColor = color;
    } else {
      if (metaThemeColor) metaThemeColor.remove();
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
    }
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