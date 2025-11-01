import { Card } from "@/components/ui/card";
import { Globe, Clock, Zap, Users, Briefcase, Target } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Intelligent Talent Matching",
    description: "We connect you with top-tier professionals perfectly aligned with your specific needs and culture.",
  },
  {
    icon: Globe,
    title: "Technology Agnostic",
    description: "From legacy systems to cutting-edge frameworks, our talent pool covers the entire technology spectrum.",
  },
  {
    icon: Clock,
    title: "24/7 Service Coverage",
    description: "Round-the-clock support with resources capable of covering all time zones and business hours.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick onboarding and integration of skilled professionals to accelerate your projects.",
  },
  {
    icon: Briefcase,
    title: "Nearshore Excellence",
    description: "Strategic proximity for seamless collaboration, cultural alignment, and optimal time zone overlap.",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Tailored staffing strategies designed to meet your unique business objectives and challenges.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive talent solutions designed to scale your business and drive innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 animate-fade-in bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Choose Intelevo?</h3>
            <p className="text-lg text-muted-foreground">
              We're not just a staffing agency – we're your strategic partner in building exceptional teams.
              Our technology-agnostic approach, combined with 24/7 availability and world-class training,
              ensures you always have access to the right talent at the right time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
