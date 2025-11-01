import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrainingCenter from "@/components/TrainingCenter";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <TrainingCenter />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
