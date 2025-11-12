import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-course.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Neural Network" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Master AI in 12 Weeks</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Transform Your Career with{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Learn cutting-edge AI technologies from industry experts. Build real-world projects and launch your AI career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button size="lg" className="text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-all duration-300">
            Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
            View Curriculum
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>12 Weeks • Self-Paced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>15+ Real Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Certificate Included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
