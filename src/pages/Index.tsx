import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestSermonsImage from "@/components/LatestSermonsImage";
import SermonsSection from "@/components/SermonsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LatestSermonsImage />
      <SermonsSection />
      <Footer />
    </div>
  );
};

export default Index;
