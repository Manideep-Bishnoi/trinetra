import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Elevate Your Temple Management?
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join the digital transformation. Get started with Trinetra today and experience the future of temple administration.
          </p>

          {/* CTA Form */}
          <div className="max-w-md mx-auto space-y-4 pt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="pl-12 h-14 bg-white/95 backdrop-blur-sm border-white/20 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button size="lg" className="h-14 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-white/80">
              No credit card required • Free 30-day trial • Setup in minutes
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-playfair mb-2">50+</div>
              <div className="text-sm text-white/80">Active Temples</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-playfair mb-2">500K+</div>
              <div className="text-sm text-white/80">Monthly Visitors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white font-playfair mb-2">24/7</div>
              <div className="text-sm text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
