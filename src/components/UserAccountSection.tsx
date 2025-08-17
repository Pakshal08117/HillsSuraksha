import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Shield, 
  Heart, 
  Phone, 
  Lock, 
  Eye, 
  Download,
  Settings,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const UserAccountSection = () => {
  return (
    <section id="account" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Personal Safety Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete control over your emergency profile, privacy settings, and safety preferences. 
            Designed for transparency and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={dashboardImage} 
                alt="HimSuraksha user dashboard interface" 
                className="w-full h-auto"
              />
            </div>
            {/* Overlay badges */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-success text-success-foreground">
                <CheckCircle className="w-3 h-3 mr-1" />
                Profile Verified
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-warning text-warning-foreground">
                <AlertTriangle className="w-3 h-3 mr-1" />
                2FA Enabled
              </Badge>
            </div>
          </div>

          {/* Account Features */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Account Overview</h3>
              <p className="text-muted-foreground">
                Your emergency profile at a glance with instant access to critical settings and safety status.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Last SOS</div>
                <div className="text-xs text-muted-foreground">Never used</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Coverage</div>
                <div className="text-xs text-muted-foreground">15 regions</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Contacts</div>
                <div className="text-xs text-muted-foreground">3 emergency</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Security</div>
                <div className="text-xs text-muted-foreground">High level</div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-card transition-smooth">
            <CardHeader>
              <div className="w-10 h-10 bg-gradient-emergency rounded-lg flex items-center justify-center mb-3">
                <User className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Profile & Medical Info</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Secure storage of personal details, medical conditions, allergies, and emergency preferences 
                with granular privacy controls.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Medical tags and allergies</li>
                <li>• Blood group and medications</li>
                <li>• Photo ID verification</li>
                <li>• Language preferences</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-smooth">
            <CardHeader>
              <div className="w-10 h-10 bg-gradient-emergency rounded-lg flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Manage trusted contacts with priority ranking and instant notification capabilities 
                during emergencies.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Priority contact ranking</li>
                <li>• One-tap "Notify Now" button</li>
                <li>• Share live location</li>
                <li>• SMS and call integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-smooth">
            <CardHeader>
              <div className="w-10 h-10 bg-gradient-emergency rounded-lg flex items-center justify-center mb-3">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Security & Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Multi-factor authentication, device management, and session security 
                for ultimate account protection.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• SMS and app-based 2FA</li>
                <li>• Trusted device management</li>
                <li>• Session monitoring</li>
                <li>• Biometric authentication</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-smooth">
            <CardHeader>
              <div className="w-10 h-10 bg-gradient-emergency rounded-lg flex items-center justify-center mb-3">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Privacy Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Complete transparency and control over your data with detailed privacy controls 
                and consent management.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Data usage transparency</li>
                <li>• Sharing preferences</li>
                <li>• Auto-delete settings</li>
                <li>• Consent audit log</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-smooth">
            <CardHeader>
              <div className="w-10 h-10 bg-gradient-emergency rounded-lg flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Medical Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Emergency medical card visible to responders during SOS with privacy-first design 
                and verification controls.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Emergency medical card</li>
                <li>• Responder visibility toggle</li>
                <li>• Critical health info</li>
                <li>• Emergency medications</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-smooth">
            <CardHeader>
              <div className="w-10 h-10 bg-gradient-emergency rounded-lg flex items-center justify-center mb-3">
                <Download className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Data Export & Control</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Download your data, manage retention periods, and control account deletion 
                with full transparency.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Complete data export</li>
                <li>• Retention policy controls</li>
                <li>• Account deletion</li>
                <li>• Access audit logs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-mountain rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Take Control of Your Emergency Preparedness
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Set up your comprehensive safety profile in minutes. Your privacy and security are our top priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emergency" size="lg">
              <Settings className="w-5 h-5" />
              Create Your Account
            </Button>
            <Button variant="outline" size="lg">
              View Privacy Policy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAccountSection;