import React from "react";
import { Link } from "react-router-dom";
import sermonImage from "@/assets/sermon-series-pressure-point.png";

const LatestSermonsSpotlight = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Text (hidden on mobile, shown after image) */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
              LATEST SERMONS
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Tell us in the comments
              <br />
              how the sermon impacted you
            </p>
          </div>

          {/* Right Column - Sermon Image Card */}
          <div className="order-1 md:order-2">
            <Link 
              to="/watch-online"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
                <img 
                  src={sermonImage} 
                  alt="The Pressure Point Sermon Series"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Line */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Accepted Jesus? We're here for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestSermonsSpotlight;
