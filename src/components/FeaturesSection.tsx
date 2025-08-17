import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Users, 
  Phone, 
  Shield, 
  Clock, 
  Heart, 
  Satellite, 
  Camera,
  Bell,
  Lock
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "Share your exact location with rescue teams instantly, even in remote hill areas with offline map capabilities."
  },
  {
    icon: Phone,
    title: "Emergency Communication",
    description: "Multi-channel communication including voice, SMS, and satellite connectivity when cellular networks fail."
  },
  {
    icon: Users,
    title: "Community Response Network",
    description: "Connect with verified local volunteers and rescue teams who know the terrain and can respond quickly."
  },
  {
    icon: Shield,
    title: "Personal Safety Profile",
    description: "Secure medical information, emergency contacts, and safety preferences accessible to authorized responders only."
  },
  {
    icon: Clock,
    title: "Rapid Response Coordination",
    description: "Automated alert system that notifies the nearest available rescue teams and emergency services simultaneously."
  },
  {
    icon: Heart,
    title: "Medical Emergency Support",
    description: "Immediate access to medical professionals with specialized knowledge of altitude and terrain-related health issues."
  },
  {
    icon: Satellite,
    title: "Offline Capabilities",
    description: "Works even without internet connectivity using satellite communication and pre-downloaded emergency protocols."
  },
  {
    icon: Camera,
    title: "Visual Evidence Sharing",
    description: "Share photos and videos of the emergency situation to help responders assess and prepare appropriately."
  },
  {
    icon: Bell,
    title: "Smart Alert System",
    description: "Intelligent notifications based on weather conditions, terrain risks, and real-time safety assessments."
  },
  {
    icon: Lock,
    title: "Privacy & Security First",
    description: "End-to-end encryption, secure data handling, and granular privacy controls for all personal information."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-mountain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Emergency Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature designed with hill terrain challenges in mind, ensuring reliable emergency response when and where you need it most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-smooth border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-emergency rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to enhance your safety in the hills?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-emergency text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-smooth">
              Download the App
            </button>
            <button className="border border-border bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-smooth">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;