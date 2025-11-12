import * as React from "react";
import latestSermonsImage from "@/assets/latest-sermons-section.png";

const LatestSermonsImage = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <img 
          src={latestSermonsImage} 
          alt="Latest Sermons - The Pressure Point series. Tell us in the comments how the sermon impacted you"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default LatestSermonsImage;
