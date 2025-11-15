import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mov" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/60" />
      
      {/* Decorative Wavy Border */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-[5]" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 50 50 Q 100 30, 150 50 T 250 50 T 350 50 Q 500 70, 650 50 T 850 50 T 1050 50 Q 1200 30, 1350 50 L 1390 50 L 1390 100 Q 1380 150, 1390 200 L 1390 700 Q 1380 750, 1390 800 L 1390 850 L 1350 850 Q 1200 870, 1050 850 T 850 850 T 650 850 Q 500 830, 350 850 T 150 850 T 50 850 L 50 800 Q 60 750, 50 700 L 50 200 Q 60 150, 50 100 Z" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 max-w-4xl mx-auto leading-tight">
          WHAT IF MY PURSUIT OF PURPOSE WAS<br />
          REALLY THE PURSUIT OF HIM?
        </h1>
        
        <Button 
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 py-6 rounded-sm"
          onClick={() => {
            const sermonsSection = document.querySelector('section.bg-background');
            sermonsSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Meet Jesus
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
