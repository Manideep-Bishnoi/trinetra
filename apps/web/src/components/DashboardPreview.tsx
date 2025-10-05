import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-divine border border-border/50">
              <img 
                src={dashboardImage} 
                alt="Trinetra Dashboard Interface" 
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 pointer-events-none" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-card border border-border/50 rounded-xl p-4 shadow-divine backdrop-blur-sm animate-glow">
              <div className="text-sm text-muted-foreground mb-1">Live Visitors</div>
              <div className="text-3xl font-bold text-primary font-playfair">12,847</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Real-time Analytics</span>
              </div>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">
              Powerful Dashboard,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Divine Insights
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Get a complete view of your temple operations with our intuitive dashboard. Monitor crowd levels, manage bookings, track donations, and ensure devotee safety - all from one unified interface.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Real-time Monitoring</h4>
                  <p className="text-muted-foreground">Track visitor counts, queue lengths, and safety metrics as they happen.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Predictive Analytics</h4>
                  <p className="text-muted-foreground">AI-powered forecasts help you plan resources and manage peak hours effectively.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Comprehensive Reports</h4>
                  <p className="text-muted-foreground">Generate detailed analytics and export data for informed decision-making.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-divine transition-all duration-300 hover:scale-105 group">
              Explore Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
