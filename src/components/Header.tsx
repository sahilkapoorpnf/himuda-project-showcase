import { useState } from "react";
import { Phone, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import himudaLogo from "@/assets/himuda-logo.png";

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm">
      {/* Top Bar - Government Style */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+911772620115" className="flex items-center gap-2 hover:underline">
              <Phone className="h-3 w-3" />
              <span>+91 177 2620115</span>
            </a>
            <a href="mailto:himuda@hp.gov.in" className="flex items-center gap-2 hover:underline">
              <Mail className="h-3 w-3" />
              <span>himuda@hp.gov.in</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hover:underline text-xs">हिंदी</button>
            <span className="text-xs">|</span>
            <button className="hover:underline text-xs">English</button>
            <span className="text-xs">|</span>
            <button className="hover:underline text-xs">Screen Reader</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img 
                src={himudaLogo} 
                alt="HIMUDA Logo" 
                className="h-14 w-14 object-contain"
              />
              <div className="border-l-2 border-primary pl-3">
                <h1 className="text-xl font-bold text-primary leading-tight">HIMUDA</h1>
                <p className="text-xs text-foreground font-medium">Housing & Urban Development Authority</p>
                <p className="text-[10px] text-muted-foreground">Government of Himachal Pradesh</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="mt-4 animate-fade-in">
              <Input
                type="search"
                placeholder="Search on this site..."
                className="w-full max-w-2xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu - Desktop Only Government Style */}
      <div className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto">
          <nav className="flex items-center justify-center divide-x divide-primary-foreground/20">
            <a href="/" className="px-8 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition-all">
              HOME
            </a>
            <a href="/about" className="px-8 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition-all">
              ABOUT US
            </a>
            <a href="/organization" className="px-8 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition-all">
              ORGANIZATION
            </a>
            <a href="/schemes" className="px-8 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition-all">
              SCHEMES
            </a>
            <a href="/projects" className="px-8 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition-all">
              PROJECTS
            </a>
            <a href="/tenders" className="px-8 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition-all">
              TENDERS
            </a>
            <a href="/rti" className="px-8 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition-all">
              RTI
            </a>
            <a href="/contact" className="px-8 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition-all">
              CONTACT US
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
