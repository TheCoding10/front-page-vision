import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg text-muted-foreground">
          Learn more about Gods Voice Ministries and our mission.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
