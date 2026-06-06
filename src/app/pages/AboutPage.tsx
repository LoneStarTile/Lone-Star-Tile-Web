import { motion } from "motion/react";
import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";
import imgWbenc1 from "figma:asset/7e27992e65e400ea38d2f812589f267a66267c3b.webp";
import imgEsbe1 from "figma:asset/424bd3c3707da0546d139b0904459970bfed6dfd.webp";
import imgSbe1 from "figma:asset/0786cc7b78ef1bbda4088710bb6325da20a18966.webp";
import imgHsbe1 from "figma:asset/6949fe3412ea28ac01b4f393aa2f91e9b6e05ba8.webp";
import imgCtef from "figma:asset/881ba30fe7f6037167dbfb246539b56b86c83cb1.webp";
import { InfiniteStrip } from "../components/InfiniteStrip";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.div
      className={className}
      style={{ display: "flex", flexWrap: "wrap", gap: "0 0.28em" }}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span
            style={{ display: "block" }}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

const photoPairs = [
  {
    img: "/about-photo-1.webp",
    text: "Founded on the principles of craftsmanship and integrity, Lone Star Tile has grown from serving local San Antonio communities to becoming a trusted partner for commercial projects statewide. We've worked alongside general contractors, architects, interior designers, and homeowners to bring countless visions to life—from the professional elegance of major banking institutions' corporate spaces to the intimate beauty of historic district bathroom renovations.",
    reverse: false,
  },
  {
    img: "/about-photo-2.webp",
    text: "What truly sets us apart isn't just our technical expertise—though we bring years of combined experience to every project. It's our commitment to being genuine partners in your success. We listen to your vision, offer honest guidance when you need it, and deliver results that exceed expectations.",
    reverse: true,
  },
  {
    img: "/about-photo-3.webp",
    text: "Whether you're a homeowner dreaming of the perfect kitchen backsplash or a general contractor managing a multi-location commercial build, we approach every project with the same dedication to excellence. Our work speaks for itself across the city's most prestigious residential communities and in some of its most recognizable commercial landmarks.",
    reverse: false,
  },
];

const whyChoose = [
  {
    title: "Quality Without Compromise",
    text: "Every tile is set with precision, every grout line is perfect, and every project reflects our commitment to excellence. We don't cut corners because your project—and your trust—deserve better.",
  },
  {
    title: "Reliability You Can Count On",
    text: "In construction, timing is everything. We show up when we say we will, coordinate seamlessly with your schedule, and complete projects on time. Your timeline isn't just important to you—it's important to us.",
  },
  {
    title: "Expert Guidance",
    text: "Not sure which tile is right for your space? Wondering about color coordination or material durability? We share our expertise freely to help you make confident decisions you'll love for years to come.",
  },
  {
    title: "Woman-Owned Excellence",
    text: "We're proud to bring diverse perspectives and unwavering standards to the San Antonio tile industry. Our woman-owned business status reflects our commitment to excellence and innovation in every project.",
  },
];

const certLogos = [
  { src: imgWbenc1, alt: "WBENC" },
  { src: imgEsbe1, alt: "ESBE" },
  { src: imgSbe1, alt: "SBE" },
  { src: imgHsbe1, alt: "HSBE" },
  { src: imgCtef, alt: "CTEF" },
];

// Two copies for a perfectly seamless -50% loop
const pairedCerts = [...certLogos, ...certLogos];

function InfiniteCertCarousel() {
  return (
    <div className="py-6 w-full">
      {/* Mobile */}
      <div className="md:hidden">
        <InfiniteStrip
          items={certLogos}
          direction={1}
          speed={80}
          gap={60}
          renderItem={(cert, i) => (
            <div
              key={i}
              style={{ width: 110, height: 70, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                style={{ maxHeight: 60, maxWidth: 100, width: "auto", height: "auto", objectFit: "contain" }}
              />
            </div>
          )}
        />
      </div>
      {/* Desktop — slower, larger */}
      <div className="hidden md:block">
        <InfiniteStrip
          items={certLogos}
          direction={1}
          speed={30}
          gap={120}
          renderItem={(cert, i) => (
            <div
              key={i}
              style={{ width: 200, height: 130, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                style={{ maxHeight: 110, maxWidth: 180, width: "auto", height: "auto", objectFit: "contain" }}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -500 : 500, behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#fffae7" }}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full flex flex-col items-center justify-center px-8 md:px-16" style={{ minHeight: "100vh", backgroundColor: "#af2828" }}>
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
          <motion.h1
            className="cab-black text-[36px] md:text-[60px] text-white tracking-[-1.2px] mb-6 leading-[1.05] text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Built on reputation,<br />one tile at a time
          </motion.h1>
          <motion.p
            className="switz-regular text-[18px] md:text-[24px] text-white tracking-[1.8px] leading-[1.8] max-w-[820px] text-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Lone Star Tile isn't just about laying tile—it's about building relationships that last as long as our installations. As a proud woman-owned business serving San Antonio and throughout Texas, we've earned our reputation one project at a time through unwavering quality, reliable timelines, and genuine care for every space we transform.
          </motion.p>
        </div>
      </section>

      {/* ── ALTERNATING PHOTO/TEXT ────────────────────────────── */}
      {photoPairs.map((pair, i) => (
        <section
          key={i}
          className={`flex flex-col ${pair.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          {/* Photo side — outer div is the IntersectionObserver target (always visible);
              inner motion.div runs the clipPath wipe via variants */}
          <motion.div
            className="w-full md:w-1/2 relative overflow-hidden"
            style={{ backgroundColor: "#d8d0b9", minHeight: "360px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              style={{ position: "absolute", inset: "20px" }}
              variants={{
                hidden: { clipPath: "inset(100% 0% 0% 0%)" },
                visible: {
                  clipPath: "inset(0% 0% 0% 0%)",
                  transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                },
              }}
            >
              <img
                src={pair.img}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-16 bg-[#fffae7]"
            initial={{ opacity: 0, x: pair.reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="switz-regular text-[16px] md:text-[22px] text-black tracking-[0.32px] md:tracking-[2px] leading-[1.8] max-w-[520px]">
              {pair.text}
            </p>
          </motion.div>
        </section>
      ))}

      {/* ── WHY CHOOSE ────────────────────────────────────────── */}
      <section className="py-16 bg-[#fffae7]">
        <div className="max-w-[1280px] mx-auto">
          {/* Header row */}
          <div className="px-8 md:px-16 mb-0">
            <WordReveal
              text="Why Choose Lone Star Tile:"
              className="cab-black text-[36px] md:text-[67px] tracking-[-1.34px] text-black leading-[1.05]"
            />
          </div>

          {/* Horizontal scroll — all breakpoints */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-12 md:gap-24 overflow-x-auto px-8 md:px-16 py-10 scroll-smooth"
              style={{ scrollbarWidth: "none" }}
            >
              {whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[260px] md:w-[480px] flex flex-col gap-4 md:gap-6"
                >
                  <p className="switz-extrabold text-[18px] md:text-[30px] text-black tracking-[0.36px] md:tracking-[0.6px] leading-[1.3]">{item.title}</p>
                  <p className="switz-bold text-[14px] md:text-[22px] text-black tracking-[0.28px] md:tracking-[0.44px] leading-[1.7]">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Right gradient fade */}
            <motion.div
              className="absolute top-0 right-0 h-full w-24 md:w-40 pointer-events-none"
              style={{ background: "linear-gradient(to left, #fffae7 20%, transparent 100%)" }}
              animate={{ opacity: canScrollRight ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Scroll indicator — left-aligned, line spans to edge */}
          <div className="px-8 md:px-16 pb-4 flex items-center gap-4">
            <span className="switz-regular text-[11px] tracking-[3px] text-black/40 uppercase flex-shrink-0">scroll</span>
            <div className="relative h-px flex-1 overflow-hidden" style={{ backgroundColor: "rgba(0,0,0,0.12)" }}>
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ width: "45%", backgroundColor: "#000000" }}
                animate={{ x: ["-100%", "230%"] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.3, ease: [0.4, 0, 0.6, 1] }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS (Infinite Carousel) ───────────────── */}
      <section className="py-8 bg-[#fffae7]">
        <InfiniteCertCarousel />
      </section>
    </div>
  );
}