import { Card } from "@/components/ui/card";
import { GraduationCap, Monitor, Award, BookOpen } from "lucide-react";
import trainingCenter from "@/assets/training-center.jpg";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Trainers",
    description: "Skilled instructors with real-world industry experience",
  },
  {
    icon: Monitor,
    title: "Demo Systems",
    description: "Full access to cutting-edge demo environments and tools",
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Industry-recognized training and certification paths",
  },
  {
    icon: BookOpen,
    title: "Custom Curriculum",
    description: "Tailored training programs for your specific needs",
  },
];

const TrainingCenter = () => {
  return (
    <section id="training" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Training Center in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skopje</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art facilities equipped to develop world-class talent
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={trainingCenter}
                alt="Professional training center in Skopje with modern technology setup"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">World-Class Training Infrastructure</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our training center in Skopje is equipped with modern facilities, demo systems, and
                expert trainers ready to upskill your team or train new resources from scratch.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 bg-card border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
              <p className="text-foreground font-medium">
                🎯 We can train resources on your specific technology stack and business requirements,
                ensuring they hit the ground running from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCenter;
