import { Outlet, useLocation } from "react-router";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Root() {
  const location = useLocation();
  const [pageKey, setPageKey] = useState(location.pathname);
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    // Step 1 (synchronous, before paint): hide the current page and snap scroll
    // to top.  The browser paints a blank frame — imperceptible at 60 fps.
    setVisible(false);
    window.scrollTo(0, 0);
    setScrollY(0);

    // Step 2 (after one frame): swap in the new page.  By this point the
    // browser has committed scroll = 0, so Framer Motion's IntersectionObserver
    // initialises at the true top of the page and whileInView animations are
    // completely fresh — firing only as the user scrolls down.
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setPageKey(location.pathname);
      setVisible(true);
    });

    return () => cancelAnimationFrame(rafRef.current);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isTransparent = (isHome && scrollY < 750) || (isAbout && scrollY < 600);

  return (
    <div style={{ minHeight: "100dvh" }}>
      <NavBar isTransparent={isTransparent} />
      <div key={pageKey} style={{ visibility: visible ? "visible" : "hidden" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
