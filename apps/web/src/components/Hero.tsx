import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/temple-hero.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-primary/30 shadow-divine animate-glow">
              <Eye className="w-8 h-8 text-primary animate-pulse" />
              <span className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
                Trinetra
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Divine Technology for{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Sacred Spaces
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Empower your temple trust with AI-powered crowd analytics, real-time safety monitoring, and seamless devotee management.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/login")}
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:shadow-divine transition-all duration-300 hover:scale-105 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/dashboard")}
                className="text-lg px-8 py-6 border-2 hover:bg-accent/10 hover:border-accent transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary font-playfair">500K+</div>
                <div className="text-sm text-muted-foreground">Devotees Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary font-playfair">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent font-playfair">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-divine">
              <img 
                src={heroImage} 
                alt="Sacred Indian temple" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border/50 rounded-2xl p-6 shadow-divine backdrop-blur-sm animate-glow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">AI Prediction</div>
                  <div className="text-lg font-bold text-foreground">95% Accurate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
