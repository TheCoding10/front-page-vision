import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import appQrCode from "@/assets/app-qr-code.png";
import appPhoneMockup from "@/assets/app-phone-mockup.png";

const GetTheApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="solid" />
      
      <main className="flex-1 bg-[#E5DDD5] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto">
            {/* Phone Mockup - Left Side */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={appPhoneMockup} 
                alt="God's Voice Ministries App" 
                className="w-[320px] md:w-[400px] lg:w-[480px] h-auto object-contain"
              />
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg className="w-24 h-16" viewBox="0 0 100 50" fill="none">
                <path d="M5 25 H70 M70 25 L55 15 M70 25 L55 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* QR Code and Text - Right Side */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide">
                Stay Connected By<br />Downloading Our App
              </h1>
              
              <div className="mb-6">
                <img 
                  src={appQrCode} 
                  alt="Download App QR Code" 
                  className="w-64 h-64 border-4 border-black"
                />
              </div>
              
              <p className="text-lg italic text-gray-700">
                Available in iOS and Android
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetTheApp;
