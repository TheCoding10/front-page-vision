import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import partnerHero from "@/assets/partner-hero.jpg";
import underTheTarpVideo from "@/assets/under-the-tarp.mp4";
import partnerKitchen from "@/assets/partner-kitchen.jpg";
import partnerMeal from "@/assets/partner-meal.jpg";
import partnerOutreach from "@/assets/partner-outreach.jpg";

// Partner logos
import atmedLogo from "@/assets/partners/atmed.png";
import autismLearningLogo from "@/assets/partners/autism-learning-partners.png";
import cranstonFireLogo from "@/assets/partners/cranston-fire-dept.png";
import cranstonPoliceLogo from "@/assets/partners/cranston-police.png";
import cwLanesLogo from "@/assets/partners/cw-lanes.jpeg";
import franksRentalsLogo from "@/assets/partners/franks-rentals.png";
import hisPrisonMinistryLogo from "@/assets/partners/his-prison-ministry.jpeg";
import iggysLogo from "@/assets/partners/iggys.jpeg";
import motherBabyLogo from "@/assets/partners/mother-baby.png";
import mainEventBoxingLogo from "@/assets/partners/main-event-boxing.jpg";
import miriamHospitalLogo from "@/assets/partners/miriam-hospital.png";
import neighborhoodHealthLogo from "@/assets/partners/neighborhood-health-plan.png";
import ninetyNineLogo from "@/assets/partners/ninety-nine-restaurant.png";
import providenceRescueLogo from "@/assets/partners/providence-rescue-mission.png";
import stopTheWaitLogo from "@/assets/partners/stop-the-wait.png";
import texasRoadhouseLogo from "@/assets/partners/texas-roadhouse.jpg";
import upperCutzLogo from "@/assets/partners/upper-cutz.png";
import ymcaLogo from "@/assets/partners/ymca.png";

const partnerLogos = [
  { src: atmedLogo, alt: "atMed" },
  { src: autismLearningLogo, alt: "Autism Learning Partners" },
  { src: cranstonFireLogo, alt: "Cranston Fire Department" },
  { src: cranstonPoliceLogo, alt: "Cranston Police Department" },
  { src: cwLanesLogo, alt: "CW Lanes" },
  { src: franksRentalsLogo, alt: "Franks Rentals" },
  { src: hisPrisonMinistryLogo, alt: "His Prison Ministry" },
  { src: iggysLogo, alt: "Iggy's Creamery" },
  { src: motherBabyLogo, alt: "Mother & Baby Support" },
  { src: mainEventBoxingLogo, alt: "Main Event Boxing" },
  { src: miriamHospitalLogo, alt: "The Miriam Hospital" },
  { src: neighborhoodHealthLogo, alt: "Neighborhood Health Plan of Rhode Island" },
  { src: ninetyNineLogo, alt: "99 Restaurant" },
  { src: providenceRescueLogo, alt: "Providence Rescue Mission" },
  { src: stopTheWaitLogo, alt: "Stop The Wait RI" },
  { src: texasRoadhouseLogo, alt: "Texas Roadhouse" },
  { src: upperCutzLogo, alt: "Upper Cut'z" },
  { src: ymcaLogo, alt: "YMCA" },
];

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
          
          {/* Programs Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center leading-relaxed">
              Thanks to your donations, we've been able to be the hands and feet of Jesus and meet people in their need through
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Our Pantry Program */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground">
                  OUR PANTRY PROGRAM
                </h4>
                <p className="text-foreground">Through local and church donations, we are able to lighten the load of our community with groceries, personal care products and more.</p>
              </div>
              
              {/* Bringing a Meal */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground">
                  BRINGING A MEAL
                </h4>
                <p className="text-foreground">We partner with local organizations to bring a warm, home-cooked meal for anyone who needs it.</p>
              </div>
              
              {/* Evangelism */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground">
                  EVANGELISM
                </h4>
                <p className="text-foreground">Like Peter in Acts 3:6, in everything that we do and anyway that we can, we will share the love, freedom and salvation that was freely given to us.</p>
              </div>
            </div>
          </div>
          
          {/* Our Partners Section */}
          <div className="mt-20">
            {/* Three Images */}
            <div className="grid md:grid-cols-3 gap-0 mb-12">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={partnerKitchen} 
                  alt="Volunteers in kitchen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={partnerMeal} 
                  alt="Food being served" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={partnerOutreach} 
                  alt="Community outreach" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Partners Heading */}
            <h3 className="text-4xl font-bold text-foreground mb-12">
              OUR PARTNERS
            </h3>
            
            {/* Partner Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-12 max-w-5xl mx-auto">
              {partnerLogos.map((partner, i) => (
                <div key={i} className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm">
                  <img 
                    src={partner.src} 
                    alt={partner.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Footer Text */}
            <p className="text-center text-foreground text-lg">
              Interested in being a partner or volunteering? Connect with our team here.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;
