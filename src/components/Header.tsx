import React from "react";
import { Instagram } from "lucide-react";
import heartbeatLogo from "@/assets/heartbeat-logo.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={heartbeatLogo} 
            alt="Gods Voice Ministries Logo" 
            className="h-12 w-12 invert"
          />
          <div className="text-primary-foreground">
            <h1 className="text-lg font-bold tracking-tight">GODS VOICE</h1>
            <p className="text-xs tracking-wider">MINISTRIES</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
