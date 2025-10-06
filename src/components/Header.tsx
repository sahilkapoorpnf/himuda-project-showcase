import { useState } from "react";
import { Menu, X, Phone, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+911772620115" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 177 2620115</span>
            </a>
            <a href="mailto:himuda@hp.gov.in" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">himuda@hp.gov.in</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-accent transition-colors text-sm">हिंदी</button>
            <button className="hover:text-accent transition-colors text-sm">A-</button>
            <button className="hover:text-accent transition-colors text-sm">A</button>
            <button className="hover:text-accent transition-colors text-sm">A+</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img 
                src="/placeholder.svg" 
                alt="HIMUDA Logo" 
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-primary">HIMUDA</h1>
                <p className="text-sm text-muted-foreground">Housing & Urban Development Authority</p>
                <p className="text-xs text-muted-foreground">Himachal Pradesh</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a href="/" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Home
              </a>
              <a href="/about" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                About Us
              </a>
              <a href="/projects" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Projects
              </a>
              <a href="/schemes" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Schemes
              </a>
              <a href="/tenders" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Tenders
              </a>
              <a href="/contact" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Contact
              </a>
            </nav>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden md:flex"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="mt-4 animate-fade-in">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <a href="/" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Home
              </a>
              <a href="/about" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                About Us
              </a>
              <a href="/projects" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Projects
              </a>
              <a href="/schemes" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Schemes
              </a>
              <a href="/tenders" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Tenders
              </a>
              <a href="/contact" className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
