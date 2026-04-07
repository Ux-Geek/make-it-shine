import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Ribbon() {
  const items = [
    { label: "HAPPY CUSTOMERS", value: "500+" },
    { icon: <Star size={20} className="fill-[#FFD700] text-[#FFD700]" />, label: "AVERAGE RATING", value: "4.9/5" },
    { label: "SATISFACTION GUARANTEED", value: "100%" },
  ];

  // Large set for marquee
  const marqueeItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden h-[80px] bg-[#EEF2F5] flex items-center border-y border-brand-border">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex items-center gap-10 whitespace-nowrap px-8"
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-[#2F2F2F]">
              {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight">{item.value}</span>
                <span className="text-xl font-bold tracking-tight opacity-90">{item.label}</span>
              </div>
            </div>
            {/* White Circle Separator */}
            <div className="w-3 h-3 rounded-full bg-white border border-brand-border flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

