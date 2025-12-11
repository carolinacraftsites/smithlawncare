import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/manicured_lawn_hero_background.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Beautiful manicured lawn"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl space-y-6 animate-in slide-in-from-bottom-5 fade-in duration-700">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
            Serving Asheville, NC since 2010
          </div>
          
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Professional Lawn Care & Landscaping
          </h1>
          
          <p className="max-w-[600px] text-lg text-white/90 md:text-xl">
            We provide top-tier landscape maintenance, mulching, and snow removal services. 
            Clean, reliable, and family-owned.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="h-14 gap-2 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground border-none"
              onClick={scrollToContact}
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 border-white text-white hover:bg-white hover:text-primary bg-transparent text-lg font-semibold"
              asChild
            >
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
