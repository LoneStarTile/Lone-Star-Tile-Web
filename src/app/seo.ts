import { useEffect } from "react";

const SITE_NAME = "Lone Star Tile";

export const PAGE_SEO: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: SITE_NAME,
    description:
      "Lone Star Tile is a woman-owned tile installation company serving San Antonio and Texas. Expert residential and commercial tile work for homes, businesses, and contractors.",
  },
  "/about": {
    title: `About | ${SITE_NAME}`,
    description:
      "Learn about Lone Star Tile, a woman-owned tile contractor in San Antonio, TX. Built on craftsmanship, reliability, and lasting relationships across residential and commercial projects.",
  },
  "/residential": {
    title: `Residential Tile Installation | ${SITE_NAME}`,
    description:
      "Residential tile installation in San Antonio by Lone Star Tile. Kitchen backsplashes, bathrooms, flooring, and custom home tile work with precision craftsmanship.",
  },
  "/commercial": {
    title: `Commercial Tile Installation | ${SITE_NAME}`,
    description:
      "Commercial tile installation for banks, restaurants, retail, and corporate spaces across Texas. Lone Star Tile delivers reliable timelines and quality craftsmanship.",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Contact Lone Star Tile for residential or commercial tile installation in San Antonio and throughout Texas. Request a quote or discuss your project today.",
  },
};

const DEFAULT_SEO = PAGE_SEO["/"];

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function applyPageMeta(pathname: string) {
  const seo = PAGE_SEO[pathname] ?? DEFAULT_SEO;
  document.title = seo.title;
  setMetaDescription(seo.description);
}

export function usePageMeta(pathname: string) {
  useEffect(() => {
    applyPageMeta(pathname);
  }, [pathname]);
}
