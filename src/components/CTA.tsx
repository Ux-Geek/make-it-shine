import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden p-12 md:p-20 rounded-[32px] bg-gradient-to-b from-white to-[#F5FBFF] border border-brand-border flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left"
        >
          <div className="max-w-[600px]">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] leading-[1.18] font-medium mb-6">
              Let your space feel clean, calm, and fully refreshed.
            </h2>
            <p className="text-lg text-brand-text">
              Experience the transformation of a truly deep clean. Our team is ready to restore the shine to your home.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <a 
              href="tel:+12676424898" 
              className="h-[64px] px-10 rounded-full bg-brand-accent text-brand-heading font-medium inline-flex items-center justify-center hover:bg-brand-accent-hover hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-brand-accent/20"
            >
              Call Make It Shine: +1 (267) 642-4898
            </a>
            <p className="text-xs text-brand-text uppercase tracking-[2px] font-medium">
              Available Mon — Sat, 8am — 6pm
            </p>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
