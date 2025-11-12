import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
  {
    week: "Weeks 1-3",
    title: "AI & Machine Learning Foundations",
    topics: [
      "Introduction to AI and its applications",
      "Python programming for AI",
      "Linear algebra and statistics essentials",
      "Supervised and unsupervised learning",
    ],
  },
  {
    week: "Weeks 4-6",
    title: "Deep Learning & Neural Networks",
    topics: [
      "Neural network architecture",
      "Backpropagation and optimization",
      "Convolutional Neural Networks (CNNs)",
      "Building image classification models",
    ],
  },
  {
    week: "Weeks 7-9",
    title: "Advanced AI Techniques",
    topics: [
      "Natural Language Processing (NLP)",
      "Recurrent Neural Networks (RNNs)",
      "Transformer models and attention mechanisms",
      "Working with Large Language Models",
    ],
  },
  {
    week: "Weeks 10-12",
    title: "Real-World AI Projects",
    topics: [
      "Computer vision applications",
      "Chatbot development",
      "AI model deployment and MLOps",
      "Capstone project and portfolio building",
    ],
  },
];

const Curriculum = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Curriculum
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured 12-week journey from AI basics to advanced applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300"
            >
              <CardHeader>
                <div className="text-sm font-semibold text-primary mb-2">
                  {module.week}
                </div>
                <CardTitle className="text-2xl">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
