import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import heartbeatLogo from "@/assets/heartbeat-logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { label: "HOME", path: "/" },
  { label: "WATCH ONLINE", path: "/watch-online" },
  { label: "PARTNER", path: "/partner" },
  { label: "ABOUT US", path: "/about-us" },
  { label: "VISIT US", path: "/visit-us" },
  { label: "GET THE APP", path: "/get-the-app" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

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
        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button 
              className="text-primary-foreground hover:text-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-muted">
            <nav className="flex flex-col gap-6 mt-12">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
