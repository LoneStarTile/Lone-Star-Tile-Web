import { motion } from "motion/react";
import { Link } from "react-router";
import imgPhoto from "figma:asset/faf500b9452a4888d24838c5d28723781c96a6d1.webp";
import imgCommercialPic from "figma:asset/7e9192c43542e58faa7d59e306090b76a167c788.webp";
import imgStar1 from "figma:asset/51d3a45f3e71b06a862572a28cbf214fd43b2333.webp";
import { InfiniteStrip } from "../components/InfiniteStrip";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const imageReveal = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.6 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
  },
};

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
      viewport={{ once: true, margin: "-80px" }}
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

const reviews = [
  {
    name: "Ysa Maldonado",
    text: "David and Faye set the bar high... beautiful patterns and functional design effortlessly. Great communication and professional work, top notch!",
  },
  {
    name: "Mark Fassold",
    text: "I hired Lone Star Tile to tile my bathroom, and I could not be happier with the result. The workmanship is outstanding. The tile lines are clean and straight, the cuts are precise, and the entire space looks sharp.",
  },
  {
    name: "Tracey Smith",
    text: "Lone Star Tile installed wood look tile and remodeled two bathrooms... done quickly, professionally, and I am very pleased with it!",
  },
  {
    name: "Bar S Customs",
    text: "Lone Star Tile has been an outstanding trade partner... David and his team consistently deliver high-quality workmanship, professionalism, and dependable service.",
  },
  {
    name: "Prime Construction Services",
    text: "These guys do an amazing job... always on time and do quality work. I would definitely recommend them for any tile work!",
  },
];

// Split into two rows of 3 (with slight overlap so all 5 show across both)
const topRowReviews = [reviews[0], reviews[1], reviews[2]];
const bottomRowReviews = [reviews[2], reviews[3], reviews[4]];

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div
      className="flex-shrink-0 w-[240px] md:w-[360px] bg-[#fffae7] flex flex-col items-center justify-start text-center pt-5 px-5 pb-4 md:pt-8 md:px-8"
      style={{ border: "10px solid #d8d0b9", aspectRatio: "1 / 1" }}
    >
      <p className="switz-bold text-[15px] md:text-[22px] text-black tracking-[0.44px] leading-[1.4] mb-2">{name}</p>
      <div className="flex gap-0.5 justify-center mb-2">
        {[...Array(5)].map((_, j) => (
          <img key={j} src={imgStar1} alt="★" className="w-3.5 h-3.5 md:w-5 md:h-5 object-cover" />
        ))}
      </div>
      <p className="switz-regular text-[10px] md:text-[16px] text-black tracking-[0.24px] leading-[1.6]">{text}</p>
    </div>
  );
}

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1695191388218-f6259600223f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYmFja3NwbGFzaCUyMHRpbGUlMjBtb2Rlcm58ZW58MXx8fHwxNzc0NzQ5MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Custom Kitchen Backsplash",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1768413292551-10011d6c354e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHRpbGUlMjBtYXJibGUlMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3NDc0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Master Bath Renovation",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1719782758766-f0a4a3808afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0aWxlJTIwZmxvb3JpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ3NDkzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Living Room Remodel",
    size: "wide",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#fffae7" }}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={imgPhoto}
            alt="Lone Star Tile hero"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
        </motion.div>

        {/* Scroll hint — center bottom */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.span
            className="switz-regular text-[18px] text-white tracking-[0.36px]"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            (Scroll Down)
          </motion.span>
        </motion.div>
      </section>

      {/* ── ABOUT INTRO ──────────────────────────────────────── */}
      <section className="pt-20 pb-16 px-8 md:px-16 max-w-[1200px] mx-auto">
        <WordReveal
          text="Quality tile installation for the finest homes and businesses in Texas"
          className="cab-black text-[40px] md:text-[56px] lg:text-[67px] tracking-[-1.34px] text-black mb-16 leading-[1.05]"
        />

        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          <motion.div
            className="w-full md:w-[533px] flex flex-col gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              className="overflow-hidden"
              variants={imageReveal}
            >
              <img
                src={imgCommercialPic}
                alt="Craftsmanship"
                className="w-full aspect-[525/416] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.p
              className="switz-bold text-[24px] md:text-[28px] text-black tracking-[0.5px] leading-[1.3]"
              variants={fadeUp}
            >
              Where Craftsmanship Meets Texas Pride
            </motion.p>

            <motion.p
              className="switz-regular text-[18px] md:text-[20px] text-black tracking-[0.4px] leading-[1.7]"
              variants={fadeUp}
            >
              Lone Star Tile isn't just another tile contractor—we're your partners in bringing vision to reality. As a woman-owned business serving San Antonio and throughout Texas, we've built our reputation on quality work delivered on time, every time.
              <br /><br />
              From the sleek floors of commercial institutions to custom kitchens, bathrooms, and floors in San Antonio's most prestigious neighborhoods, we approach every project with impeccable craftsmanship, honest communication, and results that last.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link to="/about">
                <motion.div
                  className="inline-flex items-center justify-center bg-[#af2828] px-6 h-[44px] cursor-pointer"
                  style={{ borderRadius: 40 }}
                  whileHover={{ scale: 1.04, backgroundColor: "#9a2222" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="cab-extrabold text-[20px] text-white tracking-[0.4px] leading-none whitespace-nowrap">
                    Learn more about us
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS — dual row, opposite directions ───────────── */}
      <section className="py-12 overflow-hidden flex flex-col gap-4">
        {/* Desktop - single row */}
        <div className="hidden md:block">
          <InfiniteStrip
            items={reviews}
            direction={1}
            speed={35}
            gap={24}
            renderItem={(review, i) => (
              <ReviewCard key={i} name={review.name} text={review.text} />
            )}
          />
        </div>
        
        {/* Mobile - dual row */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Row 1 — scrolls left */}
          <InfiniteStrip
            items={topRowReviews}
            direction={1}
            speed={35}
            gap={16}
            renderItem={(review, i) => (
              <ReviewCard key={i} name={review.name} text={review.text} />
            )}
          />
          {/* Row 2 — scrolls right */}
          <InfiniteStrip
            items={bottomRowReviews}
            direction={-1}
            speed={35}
            gap={16}
            renderItem={(review, i) => (
              <ReviewCard key={i} name={review.name} text={review.text} />
            )}
          />
        </div>
      </section>

      {/* ── PORTFOLIO HIGHLIGHTS ─────────────────────────────── */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-4">
            <WordReveal
              text="Portfolio Highlights"
              className="cab-black text-[48px] md:text-[67px] tracking-[-1.34px] text-black leading-[1.05]"
            />
            <motion.p
              className="switz-extrabold text-[20px] md:text-[28px] text-black tracking-[0.56px] leading-[1.3] text-right self-end md:mt-24"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Here's a Preview
            </motion.p>
          </div>

          {/* Portfolio - flowing staggered layout (desktop) */}
          <div className="hidden md:block pb-8">

            {/* Photo 1 — large, center-left */}
            <motion.div
              className="flex flex-col gap-3"
              style={{ width: "52%", marginLeft: "18%" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="overflow-hidden"
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              >
                <img
                  src={portfolioImages[0].src}
                  alt={portfolioImages[0].label}
                  className="w-full h-[560px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <p className="switz-regular text-[18px] text-black tracking-[0.36px]">{portfolioImages[0].label}</p>
            </motion.div>

            {/* Photo 2 — medium, right */}
            <motion.div
              className="flex flex-col gap-3"
              style={{ width: "40%", marginLeft: "52%", marginTop: "80px" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="overflow-hidden"
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
              >
                <img
                  src={portfolioImages[1].src}
                  alt={portfolioImages[1].label}
                  className="w-full h-[560px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <p className="switz-regular text-[18px] text-black tracking-[0.36px]">{portfolioImages[1].label}</p>
            </motion.div>

            {/* Photo 3 — wide, left */}
            <motion.div
              className="flex flex-col gap-3"
              style={{ width: "55%", marginLeft: "10%", marginTop: "80px" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, delay: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="overflow-hidden"
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, delay: 0.22, ease: [0.76, 0, 0.24, 1] }}
              >
                <img
                  src={portfolioImages[2].src}
                  alt={portfolioImages[2].label}
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <p className="switz-regular text-[18px] text-black tracking-[0.36px]">{portfolioImages[2].label}</p>
            </motion.div>
          </div>

          {/* Portfolio - stacked layout (mobile) */}
          <div className="flex flex-col gap-10 md:hidden">
            {portfolioImages.map((img, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="overflow-hidden"
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                >
                  <img src={img.src} alt={img.label} className="w-full h-[300px] object-cover" />
                </motion.div>
                <p className="switz-regular text-[16px] text-black tracking-[0.32px]">{img.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVER OUR EXPERTISE ──────────────────────────── */}
      <section className="py-20 px-8 md:px-16 max-w-[1000px]">
        <WordReveal
          text="Discover Our Expertise"
          className="cab-black text-[48px] md:text-[67px] tracking-[-1.34px] text-black mb-12 leading-[1.05]"
        />

        <div className="flex flex-col gap-16">
          {/* Residential */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="switz-regular text-[18px] md:text-[24px] text-black tracking-[0.48px] leading-[1.7]">
              From historic renovations to custom builds throughout San Antonio, we transform homes with expert tile installation. Homeowners trust us to guide them through every decision; from selecting the perfect backsplash to coordinating colors that complement their style. Architects value our precision in executing their residential designs with meticulous attention to detail. Whether it's a spa-like master bath or a stunning kitchen, we bring craftsmanship and care to every home project.
            </p>
            <Link to="/residential">
              <motion.div
                className="inline-flex items-center justify-center bg-[#af2828] px-6 h-[44px] cursor-pointer w-fit"
                style={{ borderRadius: 40 }}
                whileHover={{ scale: 1.04, backgroundColor: "#9a2222" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <span className="cab-extrabold text-[18px] text-white tracking-[0.36px] leading-none whitespace-nowrap">
                  View residential work
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Commercial */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="switz-regular text-[18px] md:text-[24px] text-black tracking-[0.48px] leading-[1.7]">
              General contractors across Texas rely on Lone Star Tile for commercial projects that demand reliability, speed, and quality. From polished corporate spaces to multi-location rollouts for franchise businesses, we deliver on-schedule installations that pass inspection the first time. Commercial architects trust our ability to execute complex specifications while maintaining design integrity. Whether it's high-traffic retail, restaurant kitchens, or corporate headquarters, we coordinate seamlessly with your timeline and other trades—every single time.
            </p>
            <Link to="/commercial">
              <motion.div
                className="inline-flex items-center justify-center bg-[#af2828] px-6 h-[44px] cursor-pointer w-fit"
                style={{ borderRadius: 40 }}
                whileHover={{ scale: 1.04, backgroundColor: "#9a2222" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <span className="cab-extrabold text-[18px] text-white tracking-[0.36px] leading-none whitespace-nowrap">
                  View commercial work
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}