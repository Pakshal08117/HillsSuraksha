import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-emergency rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HimSuraksha</h3>
                <p className="text-sm text-background/70">Emergency Response</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Comprehensive emergency response platform for hill areas, ensuring rapid assistance when you need it most.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-background/80 hover:text-background transition-smooth">Features</a></li>
              <li><a href="#response" className="text-background/80 hover:text-background transition-smooth">Emergency Response</a></li>
              <li><a href="#safety" className="text-background/80 hover:text-background transition-smooth">Safety Guidelines</a></li>
              <li><a href="#account" className="text-background/80 hover:text-background transition-smooth">Account Management</a></li>
              <li><a href="#privacy" className="text-background/80 hover:text-background transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Emergency Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">24/7 Helpline: 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">emergency@himsuraksha.in</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/80">50+ Hill Stations Covered</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-background/80">&lt; 2 min Response Time</span>
              </div>
            </div>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get the App</h4>
            <p className="text-background/80">
              Download the HimSuraksha app for instant emergency access and offline capabilities.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-background text-foreground px-4 py-2 rounded-lg font-medium hover:bg-background/90 transition-smooth">
                Download for iOS
              </button>
              <button className="w-full bg-background text-foreground px-4 py-2 rounded-lg font-medium hover:bg-background/90 transition-smooth">
                Download for Android
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2024 HimSuraksha. All rights reserved. | Built for emergency response in hill areas.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#terms" className="text-background/70 hover:text-background transition-smooth">Terms of Service</a>
            <a href="#privacy" className="text-background/70 hover:text-background transition-smooth">Privacy Policy</a>
            <a href="#accessibility" className="text-background/70 hover:text-background transition-smooth">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;