import { motion } from "motion/react";
import { Users, Star, Award } from "lucide-react";

export default function Ribbon() {
  const items = [
    { icon: <Users size={20} />, label: "Happy Customers", value: "500+" },
    { icon: <Star size={20} />, label: "Average Rating", value: "4.9/5" },
    { icon: <Award size={20} />, label: "Satisfaction Guaranteed", value: "100%" },
  ];

  // Duplicate items for seamless marquee
  const marqueeItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden h-[72px] bg-black flex items-center">
      {/* Green strip at the edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-green-500" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500" />

      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex items-center gap-16 whitespace-nowrap px-8"
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-green-500">
            <div className="flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">{item.value}</span>
              <span className="text-[10px] uppercase tracking-[2px] font-bold opacity-80">{item.label}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
