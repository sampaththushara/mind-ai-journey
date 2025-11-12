import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const features = [
    "12 weeks of comprehensive AI training",
    "15+ hands-on projects and assignments",
    "Weekly live sessions with experts",
    "1-on-1 mentorship and code reviews",
    "Industry-recognized certificate",
    "Lifetime access to all materials",
    "Private community access",
    "Job placement assistance",
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in your future with our comprehensive AI course
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-primary/20 border-2 shadow-glow">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl mb-2">Complete AI Course</CardTitle>
              <CardDescription className="text-lg">
                Everything you need to master AI
              </CardDescription>
              <div className="mt-6">
                <div className="text-5xl font-bold text-foreground">
                  $1,499
                </div>
                <div className="text-muted-foreground mt-2">
                  One-time payment • Lifetime access
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full text-lg py-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                Enroll Now
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                30-day money-back guarantee • Start learning today
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
