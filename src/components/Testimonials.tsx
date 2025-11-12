import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "ML Engineer at Google",
    content: "This course transformed my career. Within 3 months of completing it, I landed my dream job at Google. The hands-on projects were invaluable.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "AI Startup Founder",
    content: "The best AI course I've taken. The instructors are world-class, and the curriculum is perfectly structured. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Data Scientist at Microsoft",
    content: "I went from zero AI knowledge to building production-ready models. The mentorship and community support were exceptional.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who transformed their careers with our AI course
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
