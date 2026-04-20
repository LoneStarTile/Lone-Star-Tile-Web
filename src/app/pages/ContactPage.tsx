import { motion } from "motion/react";

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
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block", paddingBottom: "0.12em", marginBottom: "-0.12em", paddingTop: "0.05em" }}>
          <motion.span
            style={{ display: "block" }}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.75, delay: 0.1 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#fffae7" }}>
      {/* ── HEADING ──────────────────────────────────────────── */}
      <section className="pt-36 pb-0 px-8 md:px-16 border-b-2 border-black">
        <WordReveal
          text="Let's Talk About Your Project"
          className="cab-black text-[48px] md:text-[80px] lg:text-[100px] tracking-[-2px] text-black leading-[1.0] pb-10"
        />
      </section>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left: contact info — shown below description on mobile */}
          <motion.div
            className="w-full md:w-[280px] flex-shrink-0 flex flex-col gap-12 order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="switz-bold text-[26px] md:text-[32px] text-black tracking-[0.64px] leading-[48px]">Email</p>
              <p className="switz-regular text-[14px] md:text-[16px] text-black tracking-[0.32px] leading-[36px]">
                Lonestartile1@yahoo.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <p className="switz-bold text-[26px] md:text-[32px] text-black tracking-[0.64px] leading-[48px]">Phone</p>
              <p className="switz-regular text-[14px] md:text-[16px] text-black tracking-[0.32px] leading-[36px]">
                (210) 789-6361
              </p>
              <p className="switz-regular text-[14px] md:text-[16px] text-black tracking-[0.32px] leading-[36px]">
                (210) 843-9852
              </p>
            </div>


          </motion.div>

          {/* Right: description — shown first on mobile */}
          <div className="flex-1 flex flex-col gap-10 order-1 md:order-2">
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="switz-extrabold text-[22px] md:text-[36px] text-black tracking-[0.44px] md:tracking-[0.72px] leading-[1.3]">
                Ready to bring your vision to life?
              </p>
              <p className="switz-regular text-[16px] md:text-[22px] text-black tracking-[0.32px] md:tracking-[0.44px] leading-[1.8] max-w-[600px]">
                From the first consultation to the final grout line, we're with you every step of the way. Whether you're a homeowner dreaming of the perfect kitchen or a contractor managing a commercial project, Lone Star Tile delivers quality craftsmanship, transparent communication, and results that exceed expectations. Contact us today for your free project estimate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}