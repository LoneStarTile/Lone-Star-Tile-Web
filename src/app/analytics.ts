import { useEffect } from "react";

// Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX).
// Set this to your GA4 stream's Measurement ID to enable tracking.
// Can also be provided via the VITE_GA_MEASUREMENT_ID environment variable.
const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || "";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

function loadGoogleAnalytics(id: string) {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  // Disable automatic page_view; we send them manually on route change.
  window.gtag("config", id, { send_page_view: false });
}

function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function useGoogleAnalytics(pathname: string) {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    loadGoogleAnalytics(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
}
