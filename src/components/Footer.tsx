import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-[hsl(20_25%_12%)] text-foreground">
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
            fill="hsl(20 25% 12%)"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
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
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-2 flex flex-col items-start">
              <a href="tel:+14015551234" className="text-white hover:text-gray-300 transition-colors">
                Phone
              </a>
              <a href="mailto:info@godsvoiceministries.com" className="text-white hover:text-gray-300 transition-colors">
                Email
              </a>
            </div>
          </div>

          {/* Partner With Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Partner With Us</h3>
            <div className="space-y-2 flex flex-col items-start">
              <a href="https://pushpay.com/g/gvmincranston?campusId=&clickOrigin=&itemId=" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                Give
              </a>
              <a href="mailto:info@godsvoiceministries.com?subject=Team%20Invitation" className="text-white hover:text-gray-300 transition-colors">
                Invite Our Team
              </a>
              <a href="https://gvmincranston.ccbchurch.com/login.php" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                CCB Login
              </a>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Stay Connected</h3>
            <div className="space-y-2 flex flex-col items-start">
              <a href="https://gvmincranston.ccbchurch.com/goto/forms/43/responses/new" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                Connection Card
              </a>
              <a href="/get-the-app" className="text-white hover:text-gray-300 transition-colors">
                Get The App
              </a>
              <a href="https://instagram.com/godsvoiceministries" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                Instagram
              </a>
              <a href="https://youtube.com/@godsvoiceministries" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                Youtube
              </a>
              <a href="https://www.bible.com/users/godsvoiceministries" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                YouVersion
              </a>
              <a href="https://facebook.com/godsvoiceministries" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 God's Voice Ministries | All rights reserved.
          </p>
          {/* Heartbeat icon */}
          <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
