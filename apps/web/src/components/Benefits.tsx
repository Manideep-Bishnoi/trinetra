import { CheckCircle } from "lucide-react";

const benefits = [
  "Reduce waiting times by up to 60% with smart queue management",
  "Prevent overcrowding with AI-powered crowd predictions",
  "Enhance devotee safety with real-time emergency response",
  "Increase donation transparency with digital tracking",
  "Optimize staff deployment based on visitor patterns",
  "Improve accessibility for differently-abled devotees",
  "Streamline festival planning with resource forecasting",
  "Generate comprehensive analytics for informed decisions"
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Temple Operations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join leading temple trusts across India in providing world-class devotee experiences
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-2xl font-playfair font-semibold mb-2 text-foreground">
              Trusted by 50+ Temple Trusts
            </p>
            <p className="text-muted-foreground">
              Serving over 500,000 devotees monthly with seamless experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
