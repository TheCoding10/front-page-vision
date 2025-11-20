import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-[#3a3a3a] text-white">
      {/* Wavy border at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
            fill="#3a3a3a"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              HEAR HIS VOICE<br />AND RESPOND.
            </h2>
            <div className="text-base text-white space-y-1">
              <p>Sundays @ 11am</p>
              <p>1370 Plainfield Street</p>
              <p>Cranston, RI 02920</p>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-3 flex flex-col items-start text-base">
              <a href="tel:+14015551234" className="text-white hover:opacity-70 transition-opacity">
                Phone
              </a>
              <a href="mailto:info@godsvoiceministries.com" className="text-white hover:opacity-70 transition-opacity">
                Email
              </a>
            </div>
          </div>

          {/* Partner With Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Partner With Us</h3>
            <div className="space-y-3 flex flex-col items-start text-base">
              <a href="https://pushpay.com/g/gvmincranston?campusId=&clickOrigin=&itemId=" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity">
                Give
              </a>
              <a href="mailto:info@godsvoiceministries.com?subject=Team%20Invitation" className="text-white hover:opacity-70 transition-opacity">
                Invite Our Team
              </a>
              <a href="https://gvmincranston.ccbchurch.com/login.php" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity">
                CCB Login
              </a>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3>
            <div className="space-y-3 flex flex-col items-start text-base">
              <a href="https://gvmincranston.ccbchurch.com/goto/forms/43/responses/new" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity">
                Connection Card
              </a>
              <a href="/get-the-app" className="text-white hover:opacity-70 transition-opacity">
                Get The App
              </a>
              <a href="https://instagram.com/godsvoiceministries" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity">
                Instagram
              </a>
              <a href="https://youtube.com/@godsvoiceministries" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity">
                Youtube
              </a>
              <a href="https://www.bible.com/users/godsvoiceministries" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity">
                YouVersion
              </a>
              <a href="https://facebook.com/godsvoiceministries" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-gray-600 py-8">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="text-sm text-white">
            © 2025 God's Voice Ministries | All rights reserved.
          </p>
          {/* Heartbeat icon */}
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
