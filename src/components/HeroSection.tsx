import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-emergency.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mountain rescue and emergency response" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white font-medium">Hills Emergency Response Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Rapid Response for
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Hill Emergencies
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect instantly with rescue teams, share real-time location, and get emergency assistance in hill areas with our comprehensive safety platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              Get Emergency Help Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="emergency" className="text-lg px-8 py-4 animate-pulse-emergency">
              EMERGENCY SOS
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">&lt; 2 min</div>
              <div className="text-white/80 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Rescue Teams</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/80 text-sm">Hill Stations</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-white/80 text-sm">Protection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full">
          <div className="w-1 h-8 bg-white rounded-full animate-slide-up"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;