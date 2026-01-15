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
        <source src="/hero-video-2.mov" type="video/quicktime" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/60" />
      
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
