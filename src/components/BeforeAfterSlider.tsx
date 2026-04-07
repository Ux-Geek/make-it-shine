import React, { useState, useRef } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="slider-container rounded-[28px] shadow-2xl"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onTouchMove={handleMove}
      onMouseDown={handleMove}
    >
      <img 
        src={afterImage} 
        alt="After" 
        className="slider-image"
        referrerPolicy="no-referrer"
      />
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="slider-image"
          style={{ width: `${10000 / sliderPosition}%` }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
          Before
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-brand-accent/80 text-brand-heading px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
        After
      </div>
      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-button">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-brand-accent-hover rounded-full" />
            <div className="w-1 h-4 bg-brand-accent-hover rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
