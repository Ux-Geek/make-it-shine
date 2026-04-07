import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  { name: "Sarah J.", quote: "My home has never felt this light and clean. Truly transformative!", image: "https://i.pravatar.cc/150?u=sarah" },
  { name: "Michael R.", quote: "The attention to detail on my leather sofa was incredible.", image: "https://i.pravatar.cc/150?u=michael" },
  { name: "Elena W.", quote: "Professional, punctual, and the results speak for themselves.", image: "https://i.pravatar.cc/150?u=elena" },
  { name: "David K.", quote: "They handled my antique furniture with such gentle care.", image: "https://i.pravatar.cc/150?u=david" },
  { name: "Jessica M.", quote: "The deep clean they did before we moved in was perfect.", image: "https://i.pravatar.cc/150?u=jessica" },
  { name: "Robert L.", quote: "Finally found a cleaning service that actually cares about quality.", image: "https://i.pravatar.cc/150?u=robert" },
  { name: "Anna S.", quote: "The bathroom was sparkling like it was brand new again.", image: "https://i.pravatar.cc/150?u=anna" },
  { name: "Thomas B.", quote: "Excellent service, highly recommend for office cleaning too.", image: "https://i.pravatar.cc/150?u=thomas" }
];

export default function HexagonTestimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Split testimonials into rows for interlocking
  const rows = [
    [testimonials[0], testimonials[1], testimonials[2]],
    [testimonials[3], testimonials[4]],
    [testimonials[5], testimonials[6], testimonials[7]]
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-[13px] tracking-[1px] uppercase text-brand-text font-medium"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-medium"
          >
            What our customers say
          </motion.h2>
        </div>

        <div className="hexagon-container">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="hexagon-row">
              {row.map((t, i) => {
                const globalIndex = testimonials.indexOf(t);
                const isHovered = hoveredIndex === globalIndex;
                const isOtherHovered = hoveredIndex !== null && !isHovered;

                return (
                  <motion.div 
                    key={globalIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: globalIndex * 0.05 }}
                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="hexagon-item group"
                    style={{ 
                      zIndex: isHovered ? 100 : 1,
                    }}
                  >
                    <motion.div 
                      animate={{ 
                        scale: isHovered ? 2 : 1,
                        filter: isOtherHovered ? "blur(4px)" : "blur(0px)",
                        opacity: isOtherHovered ? 0.4 : 1
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="avatar-circle w-full h-full bg-white border-[2px] border-brand-border shadow-md overflow-hidden cursor-pointer relative"
                    >
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-brand-heading/60 flex items-center justify-center p-4"
                          >
                            <div className="text-center">
                              <p className="text-[8px] md:text-[10px] text-white font-bold mb-1">{t.name}</p>
                              <p className="text-[6px] md:text-[8px] text-white/90 leading-tight italic">"{t.quote}"</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
