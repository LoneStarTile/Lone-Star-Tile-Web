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

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setScrollY(0);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isTransparent = (isHome && scrollY < 750) || (isAbout && scrollY < 600);

  return (
    <div style={{ backgroundColor: "#fffae7", minHeight: "100dvh" }}>
      <NavBar isTransparent={isTransparent} />
      <Outlet />
      <Footer />
    </div>
  );
}