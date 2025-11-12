import { Brain, Code, Rocket, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Fundamentals",
    description: "Master the core concepts of machine learning, neural networks, and deep learning from scratch.",
  },
  {
    icon: Code,
    title: "Hands-On Projects",
    description: "Build 15+ real-world AI applications using Python, TensorFlow, and cutting-edge frameworks.",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Get job-ready with portfolio projects, interview prep, and direct mentorship from AI professionals.",
  },
  {
    icon: Award,
    title: "Industry Certificate",
    description: "Earn a recognized certification that validates your AI expertise to potential employers.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from AI engineers at top tech companies with weekly live sessions and code reviews.",
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "Enjoy unlimited access to all course materials, updates, and our exclusive community forever.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Our AI Course?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become an AI expert and land your dream job
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
