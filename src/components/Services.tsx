import { motion } from "motion/react";

const services = [
  { 
    title: "Interior Deep Cleaning", 
    description: "Comprehensive cleaning for every corner of your living space.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-2 lg:row-span-2"
  },
  { 
    title: "Office Spaces", 
    description: "Professional extraction and sanitization for productive environments.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-1 lg:row-span-1"
  },
  { 
    title: "Toilet & Bathroom", 
    description: "Deep sanitization of high-touch surfaces and fixtures.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-1 lg:row-span-1"
  },
  { 
    title: "Sofa & Upholstery", 
    description: "Deep sanitization to ensure a healthy and clean sleep environment.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-1 lg:row-span-2"
  },
  { 
    title: "Dirty Household Recovery", 
    description: "Transforming extremely cluttered or dirty spaces into sparkling homes.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-1 lg:row-span-1"
  },
  { 
    title: "Detail Surface Care", 
    description: "Focusing on the small details that make a big difference.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-1 lg:row-span-1"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-[760px] mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-[13px] tracking-[1px] uppercase text-brand-text font-medium"
          >
            What we clean
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-[38px] leading-[1.18] font-medium"
          >
            Clean spaces. Refreshed furniture. A home that feels lighter.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">
          {services.map((service, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[32px] border border-brand-border ${service.className}`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-medium text-white mb-2 transition-all duration-500">
                  {service.title}
                </h3>
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                  <p className="text-white/90 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
