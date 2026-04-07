import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-border"
    >
      <div className="container-custom h-20 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl font-bold text-brand-heading tracking-tight">
          Make It <span className="text-brand-accent-hover">Shine</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-brand-accent-hover transition-colors">Services</a>
          <a href="#why-us" className="text-sm font-medium hover:text-brand-accent-hover transition-colors">Why Us</a>
          <a 
            href="tel:+12676424898" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-border text-sm font-medium hover:bg-brand-accent transition-all"
          >
            <Phone size={14} />
            +1 (267) 642-4898
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
