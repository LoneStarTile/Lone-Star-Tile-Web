import { motion } from "motion/react";
import { Link } from "react-router";
import imgRectangle16 from "figma:asset/36c4134fe0d47689c7e4b6553b0525dd3a544698.png";
import imgRectangle15 from "figma:asset/1387bd8803ed9d617475ab0483c38dee54ea77a1.png";
import imgRectangle13 from "figma:asset/5d1b4f54067cb864eb79bc55d45a58e3bf5ded11.png";
import imgRectangle14 from "figma:asset/5e06adb64d8657513049d54e3e3ac77ebe34d283.png";
import imgRectangle12 from "figma:asset/296e21358e91d2fe6faeaf23c5ce1bfca10db4ca.png";
import imgRectangle17 from "figma:asset/dc2fccb0c18bff45d4fa9c5cb38a5f4fe49a4daf.png";

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
      initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0.5 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay, ease: [0.76, 0, 0.24, 1] }}
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

        {/* Scroll hint — bottom right */}
        <div className="flex justify-end">
          <motion.p
            className="switz-regular text-[18px] text-black tracking-[0.36px] opacity-60"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 0.6, y: [0, 8, 0] }}
            transition={{
              opacity: { duration: 1, delay: 1 },
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
          >
            (Scroll Down)
          </motion.p>
        </div>
      </section>

      {/* ── CUSTOM KITCHEN ───────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-16 md:pb-20">
        {/* Desktop */}
        <div className="hidden md:block max-w-[1200px]">
          <motion.div
            className="flex gap-6 items-end mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ImageReveal src={imgRectangle12} alt="Custom Kitchen" className="flex-1 h-[565px]" delay={0} />
            <div className="w-[200px] h-[200px] bg-[#d9d9d9] flex-shrink-0" />
          </motion.div>
          <motion.p className="switz-regular text-[22px] text-black tracking-[0.44px]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
            Custom Kitchen
          </motion.p>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          <ImageReveal src={imgRectangle12} alt="Custom Kitchen" className="w-full h-[255px]" delay={0} />
          <div className="flex items-start justify-between pt-1">
            <motion.p className="switz-regular text-[12px] text-black tracking-[0.24px] w-[92px]"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              Custom Kitchen
            </motion.p>
            <div className="w-[100px] h-[100px] bg-[#d9d9d9] flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* ── LIVING ROOM REMODEL ──────────────────────────────── */}
      <section className="px-8 md:px-16 pb-16 md:pb-20">
        {/* Desktop */}
        <div className="hidden md:block max-w-[1200px] ml-auto">
          <motion.div
            className="flex flex-col gap-6 items-end"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ImageReveal src={imgRectangle13} alt="Living Room" className="w-[640px] h-[550px]" delay={0} />
            <div className="flex gap-6 items-start w-[640px]">
              <ImageReveal src={imgRectangle14} alt="Living Room detail" className="flex-1 h-[460px]" delay={0.15} />
              <div className="w-[200px] h-[200px] bg-[#d9d9d9] flex-shrink-0" />
            </div>
            <motion.p className="w-[640px] switz-regular text-[22px] text-black tracking-[0.44px] text-left"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
              Living Room Remodel
            </motion.p>
          </motion.div>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          <ImageReveal src={imgRectangle13} alt="Living Room" className="w-full h-[211px]" delay={0} />
          <ImageReveal src={imgRectangle14} alt="Living Room detail" className="w-full h-[216px]" delay={0.1} />
          <div className="flex items-start justify-between pt-1">
            <div className="w-[100px] h-[100px] bg-[#d9d9d9] flex-shrink-0" />
            <motion.p className="switz-regular text-[12px] text-black tracking-[0.24px] w-[123px] text-right"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              Living Room Remodel
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── MASTER BATHROOM ──────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-16 md:pb-20">
        {/* Desktop */}
        <div className="hidden md:block max-w-[960px] mx-auto">
          <div className="flex flex-col gap-8">
            <ImageReveal src={imgRectangle16} alt="Master Bathroom" className="w-[427px] h-[477px]" delay={0} />
            <div className="flex gap-8 items-start">
              <div className="w-[249px] h-[224px] bg-[#d9d9d9] flex-shrink-0" />
              <div className="flex flex-col gap-3 w-[520px] flex-shrink-0">
                <ImageReveal src={imgRectangle15} alt="Bathroom detail" className="w-full h-[358px]" delay={0.15} />
                <motion.p className="switz-regular text-[22px] text-black tracking-[0.44px] text-right"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
                  Master Bathroom Renovation
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          <ImageReveal src={imgRectangle16} alt="Master Bathroom" className="w-full h-[233px]" delay={0} />
          <div className="flex gap-2 items-start">
            <ImageReveal src={imgRectangle15} alt="Bathroom detail" className="w-[231px] h-[199px] flex-shrink-0" delay={0.1} />
            <div className="w-[100px] h-[100px] bg-[#d9d9d9] flex-shrink-0" />
          </div>
          <motion.p className="switz-regular text-[12px] text-black tracking-[0.24px] w-full"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Master Bathroom Renovation
          </motion.p>
        </div>
      </section>

      {/* ── MODERN BACKSPLASH ────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-16 md:pb-20">
        {/* Desktop */}
        <div className="hidden md:block max-w-[1000px]">
          <div className="flex gap-6 items-end mb-4">
            <ImageReveal src={imgRectangle17} alt="Modern Backsplash" className="flex-1 h-[514px]" delay={0} />
            <div className="w-[200px] h-[200px] bg-[#d9d9d9] flex-shrink-0" />
          </div>
          <motion.p className="switz-regular text-[22px] text-black tracking-[0.44px] text-left"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
            Modern Backsplash
          </motion.p>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          <ImageReveal src={imgRectangle17} alt="Modern Backsplash" className="w-full h-[268px]" delay={0} />
          <div className="flex items-start justify-between pt-1">
            <div className="w-[100px] h-[100px] bg-[#d9d9d9] flex-shrink-0" />
            <motion.p className="switz-regular text-[12px] text-black tracking-[0.24px] whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              Modern Backsplash
            </motion.p>
          </div>
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