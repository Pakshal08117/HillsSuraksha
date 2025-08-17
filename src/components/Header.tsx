import { Button } from "@/components/ui/button";
import { Shield, Bell, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-emergency rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HimSuraksha</h1>
              <p className="text-xs text-muted-foreground">Emergency Response</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#response" className="text-foreground hover:text-primary transition-smooth">
              Response
            </a>
            <a href="#safety" className="text-foreground hover:text-primary transition-smooth">
              Safety
            </a>
            <a href="#account" className="text-foreground hover:text-primary transition-smooth">
              Account
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="outline">
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button variant="emergency">
              Emergency SOS
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-foreground hover:text-primary transition-smooth">
                Features
              </a>
              <a href="#response" className="text-foreground hover:text-primary transition-smooth">
                Response
              </a>
              <a href="#safety" className="text-foreground hover:text-primary transition-smooth">
                Safety
              </a>
              <a href="#account" className="text-foreground hover:text-primary transition-smooth">
                Account
              </a>
            </nav>
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="w-full">
                <User className="w-4 h-4" />
                Sign In
              </Button>
              <Button variant="emergency" className="w-full">
                Emergency SOS
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;