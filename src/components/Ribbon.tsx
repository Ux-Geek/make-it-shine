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
    <div className="relative w-full overflow-hidden h-[80px] bg-black flex items-center">
      {/* Green edge strip */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-green-500/20" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-green-500/20" />

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
            <div className="flex items-center gap-3 text-green-500">
              {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight">{item.value}</span>
                <span className="text-xl font-bold tracking-tight opacity-90">{item.label}</span>
              </div>
            </div>
            {/* Green Circle Separator */}
            <div className="w-2 h-2 rounded-full bg-green-500/50 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

