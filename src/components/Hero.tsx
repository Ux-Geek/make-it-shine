import { motion } from "motion/react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function Hero() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-[620px]"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block mb-4 text-[13px] tracking-[1px] uppercase text-brand-text font-medium"
          >
            Make It Shine
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[54px] leading-[1.12] font-medium"
          >
            Thorough cleaning for interiors and household furniture
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl leading-[1.7] tracking-[0.5px] text-brand-text"
          >
            Make It Shine delivers careful, detail-led cleaning that refreshes your home,
            restores comfort, and helps every space feel lighter, cleaner, and beautifully maintained.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="h-[54px] px-[44px] rounded-full bg-brand-accent text-brand-heading font-medium inline-flex items-center hover:bg-brand-accent-hover hover:-translate-y-1 transition-all duration-300"
            >
              Book a Cleaning
            </a>
            <a
              href="tel:+12676424898"
              className="h-[54px] px-[44px] rounded-full border border-brand-border text-brand-heading font-medium inline-flex items-center hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Call Us: +1 (267) 642-4898
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 1.06 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-[400px] md:h-[500px] lg:h-[620px]"
        >
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80" 
            afterImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
          />
        </motion.div>
      </div>
    </section>
  );
}
