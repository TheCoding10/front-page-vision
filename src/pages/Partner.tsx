import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import partnerHero from "@/assets/partner-hero.jpg";
import underTheTarpVideo from "@/assets/under-the-tarp.mp4";

const Partner = () => {
  return (
    <div className="min-h-screen">
      <Header variant="transparent" />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${partnerHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#D4AF37]">
            THE GOSPEL IN ACTION
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 font-light">
            Because love it's just a feeling - it's an action.
          </p>
          
          <p className="text-base md:text-lg text-white mb-12 leading-relaxed max-w-5xl mx-auto">
            At GVM, we believe generosity is how we live out our values of love, truth, community, and justice in real time. Whether it's filling backpacks with school supplies, connecting neighbors to resources, or creating space for conversations about hope – giving is how we show up.
          </p>
          
          <Button
            asChild
            className="bg-white text-foreground hover:bg-white/90 text-lg px-12 py-6 h-auto font-semibold"
          >
            <a 
              href="https://pushpay.com/g/gvmincranston?campusId=&clickOrigin=&itemId="
              target="_blank"
              rel="noopener noreferrer"
            >
              GIVE TODAY
            </a>
          </Button>
        </div>
      </section>

      {/* How Your Giving Is Reaching Others Section */}
      <section className="py-20 bg-[#E8E3DD]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            HOW YOUR GIVING IS REACHING OTHERS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Video Section */}
            <div className="relative aspect-[9/16] max-h-[700px] mx-auto w-full max-w-[400px]">
              <video
                src={underTheTarpVideo}
                controls
                className="w-full h-full object-cover rounded-lg shadow-lg"
                poster=""
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                UNDER THE TARP
              </h3>
              
              <p className="text-lg text-foreground leading-relaxed">
                Think carnival meets community care — that's <strong>Under the Tarp</strong>. Every year, we bring the fun (games, food, face painting) and team up with community partners, first responders, and local businesses to deliver what people actually need – backpacks, books, Narcan, free haircuts and more – all in one place.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                It's part block party, part resource hub, and all about showing up with Jesus' love in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;
