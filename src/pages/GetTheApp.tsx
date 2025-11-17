import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import appQrCode from "@/assets/app-qr-code.png";

const GetTheApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="solid" />
      
      <main className="flex-1 bg-[#E5DDD5] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto">
            {/* Phone Mockup - Left Side */}
            <div className="flex-shrink-0">
              <div className="relative w-[280px] md:w-[320px]">
                {/* Phone frame */}
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-black text-white px-6 py-2 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <span>▮▮▮▮</span>
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="bg-[#2C2C2C]">
                      {/* App header */}
                      <div className="flex justify-center py-4 relative">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Navigation sections */}
                      <div className="space-y-0">
                        <div className="relative h-24 flex items-center justify-center text-white text-xl font-bold bg-gradient-to-b from-black/40 to-black/20">
                          WATCH ONLINE
                        </div>
                        <div className="relative h-24 flex items-center justify-center text-white text-xl font-bold bg-gradient-to-b from-black/40 to-black/20">
                          ON THE CALENDAR
                        </div>
                        <div className="relative h-24 flex items-center justify-center text-white text-xl font-bold bg-gradient-to-b from-black/40 to-black/20">
                          HOW CAN WE HELP?
                        </div>
                        <div className="relative h-24 flex items-center justify-center text-white text-xl font-bold bg-gradient-to-b from-black/40 to-black/20">
                          PARTNER WITH US
                        </div>
                      </div>
                      
                      {/* Bottom navigation */}
                      <div className="flex justify-around py-4 border-t border-gray-700">
                        <div className="flex flex-col items-center gap-1 text-blue-400">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                          </svg>
                          <span className="text-xs">Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-gray-400">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                          </svg>
                          <span className="text-xs">Groups</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-gray-400">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                          <span className="text-xs">Give</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-gray-400">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                          </svg>
                          <span className="text-xs">Sermons</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-gray-400">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="6" cy="12" r="2"/>
                            <circle cx="12" cy="12" r="2"/>
                            <circle cx="18" cy="12" r="2"/>
                          </svg>
                          <span className="text-xs">More</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
