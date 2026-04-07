import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ShieldCheck, Sparkles, Heart, Clock } from "lucide-react";

const reasons = [
  { 
    icon: <Sparkles size={20} />, 
    title: "Thorough", 
    desc: "We don't just clean; we deep-clean every detail.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  },
  { 
    icon: <ShieldCheck size={20} />, 
    title: "Trusted", 
    desc: "Vetted professionals you can feel safe with in your home.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
  },
  { 
    icon: <CheckCircle2 size={20} />, 
    title: "Detail-focused", 
    desc: "Precision in every stroke, from corners to surfaces.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80"
  },
  { 
    icon: <Heart size={20} />, 
    title: "Gentle Care", 
    desc: "Safe cleaning methods that protect your furniture.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
  },
  { 
    icon: <Clock size={20} />, 
    title: "Reliable", 
    desc: "Always on time, always professional, every single visit.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why-us" className="section-padding bg-[#F8FCFF]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block mb-4 text-[13px] tracking-[1px] uppercase text-brand-text font-medium">
              Why choose us
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-12">
              Careful, detail-led cleaning that restores comfort.
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-4 items-start pb-4">
                    <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${activeIndex === index ? 'bg-brand-accent text-brand-heading' : 'bg-white text-brand-text'}`}>
                      {reason.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium mb-1 transition-colors duration-300 ${activeIndex === index ? 'text-brand-heading' : 'text-brand-text'}`}>
                        {reason.title}
                      </h4>
                      <p className="text-sm text-brand-text">{reason.desc}</p>
                    </div>
                  </div>
                  
                  {/* Loading bar */}
                  <div className="h-1 w-full bg-brand-border rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: activeIndex === index ? "100%" : "0%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="h-full bg-brand-accent-hover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative h-[500px] md:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl"
              >
                <img 
                  src={reasons[activeIndex].image} 
                  alt={reasons[activeIndex].title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-accent/5 mix-blend-multiply" />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-brand-border z-10">
              <p className="text-4xl font-serif font-bold text-brand-accent-hover mb-1">100%</p>
              <p className="text-sm font-medium text-brand-text uppercase tracking-wider">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
