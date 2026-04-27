import { motion } from "motion/react";
import imgMcDonalds from "figma:asset/15c98b41836eeaa78add4fa9a91fd641526aacea.webp";
import imgTexasRoadhouse from "figma:asset/5b0b7795deed69984ddf48a4635ea7bb59cf573e.webp";
import imgBillMiller from "figma:asset/1efe4766950d4d0199b295643f2f3a65cbe97b0d.webp";
import imgSubway from "figma:asset/1448da4ed4ef5ecb455a281a90fb72182f5aed03.webp";
import imgCircleK from "figma:asset/8e6420179bc554e900bad0b8cfe11e13e5460312.webp";
import imgPhoto1 from "figma:asset/f26fb1d57a685387a8c3565e4f0881a63d09178a.webp";
import imgPhoto2 from "figma:asset/e2d6e4ad96d967d9dbc1b8f647cf664c5ed1e92b.webp";
import imgPhoto3 from "figma:asset/8523aa1ed9c7a1dd94dcaa81f86286c397aa2005.webp";
import imgPhoto4 from "figma:asset/145af62ddf97091b2f85253440b42fc28843977e.webp";
import { InfiniteStrip } from "../components/InfiniteStrip";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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

function ImageReveal({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`overflow-hidden relative group ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="w-full h-full"
        variants={{
          hidden: { clipPath: "inset(100% 0% 0% 0%)" },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: { duration: 1.1, delay, ease: [0.76, 0, 0.24, 1] },
          },
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </motion.div>
    </motion.div>
  );
}

interface ProjectCardProps {
  title: string;
  category: string;
  img: string;
  points: string[];
  delay?: number;
}

function ProjectCard({ title, category, img, points, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* ── Stacked on mobile, side-by-side on desktop ────── */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-end">
        {/* Left / top: title + photo */}
        <div className="flex flex-col flex-1 min-w-0">
          <p className="switz-bold text-[22px] md:text-[32px] text-black tracking-[0.44px] md:tracking-[0.64px] leading-[1.3] md:leading-[48px] mb-2 md:mb-0">{title}</p>
          <ImageReveal src={img} alt={title} className="w-full aspect-[4/3] md:aspect-auto md:h-[562px]" delay={delay + 0.1} />
        </div>
        {/* Right / bottom: category + bullet points */}
        <div className="flex flex-col gap-4 md:gap-[27px] w-full md:w-[320px] lg:w-[357px] md:flex-shrink-0">
          <p className="switz-bold text-[18px] md:text-[32px] text-black tracking-[0.36px] md:tracking-[0.64px] leading-[1.3] md:leading-[48px]">{category}</p>
          <div className="flex flex-col">
            {points.map((point, i) => (
              <div
                key={i}
                className={`py-3 border-t-2 border-black ${i === points.length - 1 ? "border-b-2" : ""}`}
              >
                <p className="switz-regular text-[15px] md:text-[20px] text-black tracking-[0.3px] md:tracking-[0.4px] leading-[1.5]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CommercialPage() {
  return (
    <div style={{ backgroundColor: "#fffae7" }}>
      {/* ── HERO HEADING ────────────────────────────────────── */}
      <section className="relative flex flex-col justify-start md:justify-start px-8 md:px-16 pt-24 md:pt-48 pb-10" style={{ minHeight: "100vh", background: "#fffae7" }}>
        <div className="max-w-[900px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mobile text stacked */}
            <div className="md:hidden flex flex-col items-start pt-[10vh]">
              {["Texas sized projects", "Texas sized standards"].map((line, i) => (
                <div key={i} style={{ overflow: "hidden" }}>
                  <motion.p
                    className="switz-extrabold text-[22px] text-black tracking-[0.4px] leading-[1.3] whitespace-nowrap"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Desktop text */}
            <div className="hidden md:block">
              {["Texas sized projects", "Texas sized standards"].map((line, i) => (
                <div key={i} style={{ overflow: "hidden" }}>
                  <motion.p
                    className="switz-extrabold text-[40px] text-black tracking-[0.8px] leading-[1.4]"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint — center on mobile, right bottom on desktop */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-16 flex flex-col justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.p
            className="switz-regular text-[18px] text-black tracking-[0.36px] opacity-60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            (Scroll Down)
          </motion.p>
        </motion.div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-20">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
          <ProjectCard
            title="Jefferson Bank of San Antonio"
            category="Financial Institution"
            img={imgPhoto1}
            points={[
              "Completed on schedule during occupied building",
              "ADA-compliant transitions",
              "Coordinated with multiple trades",
            ]}
            delay={0}
          />

          {/* We speak contractor - text break */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-start py-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex flex-col gap-5 max-w-[640px]">
              <p className="switz-bold text-[26px] md:text-[30px] text-black tracking-[0.6px]">We speak contractor</p>
              <p className="switz-regular text-[16px] md:text-[20px] text-black tracking-[0.4px] leading-[1.7]">
                We understand your timeline is non-negotiable. That's why general contractors across San Antonio and Texas trust us for commercial tile installation that's completed on schedule, on spec, and on budget. From multi-location retail rollouts to occupied office buildings, we coordinate seamlessly with your project schedule and other trades.
                <br /><br />
                Our experience spans high-traffic restaurants, corporate headquarters, retail chains, and healthcare facilities. We're licensed, insured, and experienced with commercial building codes, ADA compliance, and franchise brand standards.
              </p>
            </div>
          </motion.div>

          <ProjectCard
            title="Child-Safe Headquarters"
            category="Corporate Office"
            img={imgPhoto2}
            points={[
              "Fast-track schedule met",
              "Zero punch-list items",
              "LEED considerations integrated",
            ]}
            delay={0.05}
          />

          <ProjectCard
            title="McDonald's"
            category="Food Service"
            img={imgPhoto3}
            points={[
              "High-traffic kitchen & dining area tile",
              "Grease-resistant, slip-rated flooring",
              "Franchise brand standards met",
            ]}
            delay={0.05}
          />

          {/* Where blueprints meet reality - text break */}
          <motion.div
            className="flex flex-col gap-5 max-w-[640px] py-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="switz-bold text-[26px] md:text-[30px] text-black tracking-[0.6px]">Where blueprints meet reality</p>
            <p className="switz-regular text-[16px] md:text-[20px] text-black tracking-[0.4px] leading-[1.7]">
              Our designs deserve flawless execution. Lone Star Tile works closely with commercial architects to bring specifications to life with precision craftsmanship and technical expertise. We understand commercial building codes, material performance requirements, and the importance of maintaining design integrity through installation.
              <br /><br />
              From concept to completion, we're a reliable partner for corporate offices, retail developments, restaurants, and healthcare facilities. Our portfolio includes landmark San Antonio projects like Jefferson Bank and projects for national brands including McDonald's, Circle K, and Valero.
            </p>
          </motion.div>

          <ProjectCard
            title="Circle K"
            category="Retail"
            img="/circle-k.webp"
            points={[
              "Rapid turnaround for remodels",
              "Consistent installation across locations",
              "Chain store specifications",
            ]}
            delay={0.05}
          />
        </div>
      </section>

      {/* ── NEED A FIX ───────────────────────────────────────── */}
      <section className="py-20 bg-[#d8d0b9]">
        <div className="max-w-[900px] mx-auto px-8 md:px-16 flex flex-col gap-12 items-center text-center">
          <motion.div
            className="flex flex-col gap-6 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="switz-extrabold text-[28px] md:text-[36px] text-black tracking-[0.72px] leading-[1.3]">
              Need a Fix?
            </p>
            <p className="switz-regular text-[16px] md:text-[20px] text-black tracking-[0.4px] leading-[1.8] max-w-[800px]">
              Keep your business running with our fast-response tile repair services. We work around your schedule to minimize disruption. Using quick-set materials, we get repaired areas back in service within hours. From cracked tiles to urgent damage, we handle repairs efficiently while keeping your doors open.
            </p>
            <p className="switz-bold text-[22px] md:text-[28px] text-black tracking-[0.56px]">
              "Trusted by businesses across Texas"
            </p>
          </motion.div>
        </div>

        {/* Brand logos */}
        <div className="mt-10">
          {/* Mobile infinite strip */}
          <div className="md:hidden">
            <InfiniteStrip
              items={[
                { src: imgMcDonalds, alt: "McDonald's" },
                { src: imgTexasRoadhouse, alt: "Texas Roadhouse" },
                { src: imgBillMiller, alt: "Bill Miller" },
                { src: imgSubway, alt: "Subway" },
                { src: imgCircleK, alt: "Circle K" },
              ]}
              direction={1}
              speed={30}
              gap={60}
              renderItem={(logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: 100, height: 60 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ width: 100, height: 60, objectFit: "contain" }}
                  />
                </div>
              )}
            />
          </div>

          {/* Desktop structured layout (transparent, matching Figma) */}
          <div className="hidden md:flex justify-between items-center max-w-[1000px] mx-auto gap-8 pt-8 px-12">
            {[
              { src: imgMcDonalds, alt: "McDonald's" },
              { src: imgTexasRoadhouse, alt: "Texas Roadhouse" },
              { src: imgBillMiller, alt: "Bill Miller" },
              { src: imgSubway, alt: "Subway" },
              { src: imgCircleK, alt: "Circle K" },
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-1 h-[70px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}