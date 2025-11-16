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
            <h2 className="text-2xl font-bold text-white mb-6">
              HEAR HIS VOICE<br />AND RESPOND.
            </h2>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Sundays @ 11am</p>
              <p>1370 Plainfield Street</p>
              <p>Cranston, RI 02920</p>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto" asChild>
                <a href="tel:">Phone</a>
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="mailto:">Email</a>
              </Button>
            </div>
          </div>

          {/* Partner With Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Partner With Us</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="#">CCB Login</a>
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="#">Give</a>
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="#">Invite Our Team</a>
              </Button>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="#">Bible App</a>
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="#">Connection Card</a>
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="#">Get The App</a>
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </Button>
              <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto block" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
              </Button>
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
