import { Users, Calendar, Shield, TrendingUp, Bell, Accessibility } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: TrendingUp,
    title: "AI Crowd Prediction",
    description: "Advanced machine learning algorithms predict visitor footfall with 95% accuracy, helping you prepare in advance.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Users,
    title: "Smart Queue Management",
    description: "Dynamic slot allocation and real-time queue monitoring ensure smooth darshan experiences for all devotees.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Shield,
    title: "Emergency Response",
    description: "Real-time safety monitoring with instant alerts and emergency protocols to protect devotees.",
    gradient: "from-destructive to-primary"
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Plan festivals and special events with AI-powered crowd surge predictions and resource allocation.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Keep devotees informed with automated alerts for bookings, events, and important announcements.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Accessibility,
    title: "Accessibility Services",
    description: "Dedicated support for wheelchair access, priority queues, and special assistance for differently-abled devotees.",
    gradient: "from-accent to-secondary"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Manage Your Temple
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive features designed to enhance devotee experience while ensuring safety and efficiency.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-divine transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
