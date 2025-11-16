import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Partner = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Partner With Us</h1>
        <p className="text-lg text-muted-foreground">
          Join us in spreading God's voice to the world.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Partner;
