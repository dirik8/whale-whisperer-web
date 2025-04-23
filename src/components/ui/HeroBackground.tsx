
import React from "react";

type HeroBackgroundProps = {
  image: string;
  brightness?: number; // 0 to 1, optional
};

const HeroBackground: React.FC<HeroBackgroundProps> = ({ image, brightness = 0.35 }) => {
  return (
    <>
      <img
        src={image}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover animate-fade-in pointer-events-none select-none"
        style={{
          zIndex: 0,
          opacity: brightness,
        }}
        aria-hidden
        draggable={false}
      />
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-midnight/90 to-charcoal/60"
        style={{ zIndex: 1 }}
        aria-hidden
      ></div>
    </>
  );
};

export default HeroBackground;
