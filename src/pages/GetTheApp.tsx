import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GetTheApp = () => {
  return (
    <div className="min-h-screen">
      <Header variant="solid" />
      <main className="container mx-auto px-6 pt-12 pb-16">
        <h1 className="text-4xl font-bold mb-8">Get The App</h1>
        <p className="text-lg text-muted-foreground">
          Download our mobile app to stay connected.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default GetTheApp;
