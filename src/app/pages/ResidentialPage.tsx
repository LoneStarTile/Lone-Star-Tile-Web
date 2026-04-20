import { motion } from "motion/react";
import { Link } from "react-router";
import imgRectangle16 from "figma:asset/36c4134fe0d47689c7e4b6553b0525dd3a544698.webp";
import imgRectangle15 from "figma:asset/1387bd8803ed9d617475ab0483c38dee54ea77a1.webp";
import imgRectangle13 from "figma:asset/5d1b4f54067cb864eb79bc55d45a58e3bf5ded11.webp";
import imgRectangle14 from "figma:asset/5e06adb64d8657513049d54e3e3ac77ebe34d283.webp";
import imgRectangle12 from "figma:asset/296e21358e91d2fe6faeaf23c5ce1bfca10db4ca.webp";
import imgRectangle17 from "figma:asset/dc2fccb0c18bff45d4fa9c5cb38a5f4fe49a4daf.webp";

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
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </motion.div>
  );
}

export default function ResidentialPage() {
  return (
    <div style={{ backgroundColor: "#fffae7" }}>
      {/* ── HERO LETTER ──────────────────────────────────────── */}
      <section className="relative flex flex-col px-8 md:px-16 pt-36 pb-10" style={{ minHeight: "100vh" }}>
        {/* Letter text — vertically centered in full viewport */}
        <div className="flex-1 flex items-center" style={{ paddingBottom: "12vh" }}>
          <div className="max-w-[700px]">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {[
                "Dear Residents,",
                " ",
                "This is what the inside of your home could look like.",
                " ",
                "Sincerely,",
                "Lone Star Tile",
              ].map((line, i) => (
                <div key={i} style={{ overflow: "hidden" }}>
                  <motion.p
                    className="switz-extrabold text-[28px] md:text-[36px] text-black tracking-[0.8px] leading-[1.5]"
                    variants={{
                      hidden: { y: "110%", opacity: 0 },
                      visible: {
                        y: "0%",
                        opacity: 1,
                        transition: { duration: 0.75, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
                      },
                    }}
                  >
                    {line === " " ? "\u00A0" : line}
                  </motion.p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint — center on mobile, right on desktop */}
        <div className="flex justify-center md:justify-end">
          <motion.p
            className="switz-regular text-[18px] text-black tracking-[0.36px] opacity-60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            (Scroll Down)
          </motion.p>
        </div>
      </section>

      {/* ── CUSTOM KITCHEN ───────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-16 md:pb-20">
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-4 max-w-[1200px]">
          <ImageReveal src={imgRectangle12} alt="Custom Kitchen" className="w-full h-[565px]" delay={0} />
          <motion.p className="switz-regular text-[22px] text-black tracking-[0.44px]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
            Custom Kitchen
          </motion.p>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          <ImageReveal src={imgRectangle12} alt="Custom Kitchen" className="w-full h-[255px]" delay={0} />
          <motion.p className="switz-regular text-[12px] text-black tracking-[0.24px]"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Custom Kitchen
          </motion.p>
        </div>
      </section>

      {/* ── LIVING ROOM REMODEL ──────────────────────────────── */}
      <section className="px-8 md:px-16 pb-16 md:pb-20">
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-6 items-end max-w-[1200px] ml-auto">
          <ImageReveal src={imgRectangle13} alt="Living Room" className="w-[60%] h-[550px]" delay={0} />
          <ImageReveal src={imgRectangle14} alt="Living Room detail" className="w-full h-[460px]" delay={0.15} />
          <motion.p className="w-full switz-regular text-[22px] text-black tracking-[0.44px] text-left"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
            Living Room Remodel
          </motion.p>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          <ImageReveal src={imgRectangle13} alt="Living Room" className="w-full h-[211px]" delay={0} />
          <ImageReveal src={imgRectangle14} alt="Living Room detail" className="w-full h-[216px]" delay={0.1} />
          <motion.p className="switz-regular text-[12px] text-black tracking-[0.24px]"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Living Room Remodel
          </motion.p>
        </div>
      </section>

      {/* ── MASTER BATHROOM ──────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-16 md:pb-20">
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-8 max-w-[960px] mx-auto">
          <ImageReveal src={imgRectangle16} alt="Master Bathroom" className="w-[45%] h-[477px]" delay={0} />
          <div className="flex flex-col gap-3 w-[55%] self-end">
            <ImageReveal src={imgRectangle15} alt="Bathroom detail" className="w-full h-[358px]" delay={0.15} />
            <motion.p className="switz-regular text-[22px] text-black tracking-[0.44px] text-right"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
              Master Bathroom Renovation
            </motion.p>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          <ImageReveal src={imgRectangle16} alt="Master Bathroom" className="w-full h-[233px]" delay={0} />
          <ImageReveal src={imgRectangle15} alt="Bathroom detail" className="w-full h-[199px]" delay={0.1} />
          <motion.p className="switz-regular text-[12px] text-black tracking-[0.24px]"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Master Bathroom Renovation
          </motion.p>
        </div>
      </section>

      {/* ── MODERN BACKSPLASH ────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-16 md:pb-20">
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-4 max-w-[1000px]">
          <ImageReveal src={imgRectangle17} alt="Modern Backsplash" className="w-full h-[514px]" delay={0} />
          <motion.p className="switz-regular text-[22px] text-black tracking-[0.44px]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
            Modern Backsplash
          </motion.p>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          <ImageReveal src={imgRectangle17} alt="Modern Backsplash" className="w-full h-[268px]" delay={0} />
          <motion.p className="switz-regular text-[12px] text-black tracking-[0.24px]"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Modern Backsplash
          </motion.p>
        </div>
      </section>

      {/* ── LOWER TEXT ───────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-[750px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="switz-extrabold text-[26px] md:text-[32px] text-black tracking-[0.64px] leading-[1.4] mb-6">
              Your home is your biggest investment and most personal space.
            </p>
            <p className="switz-regular text-[18px] md:text-[22px] text-black tracking-[0.44px] leading-[1.7] mb-8">
              Whether you're renovating a historic gem or building your dream kitchen, we guide you through every decision. From selecting the perfect tile to coordinating colors that complement your style. We respect your home, work on your schedule, and deliver results you'll love for decades. We understand your vision demands precision. Our team works seamlessly with architects and designers to execute detailed specifications, meet tight timelines, and maintain the highest standards of craftsmanship.
            </p>
            <Link to="/about">
              <motion.div
                className="inline-flex items-center justify-center bg-[#af2828] rounded-[40px] px-6 h-[44px] cursor-pointer w-fit"
                whileHover={{ scale: 1.04, backgroundColor: "#9a2222" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <span className="cab-extrabold text-[18px] text-white tracking-[0.36px] leading-none whitespace-nowrap">
                  About Us
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}