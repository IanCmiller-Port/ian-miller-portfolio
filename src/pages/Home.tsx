import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-subtle"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Engineering
            <span className="block text-accent">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Crafting innovative solutions through thoughtful engineering and clean code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-foreground">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all">
              <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Backend Development</h3>
              <p className="text-muted-foreground">
                Scalable APIs, microservices, and robust system architecture
              </p>
            </Card>

            <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all">
              <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Frontend Development</h3>
              <p className="text-muted-foreground">
                Modern React applications with exceptional user experiences
              </p>
            </Card>

            <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all">
              <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">DevOps & Infrastructure</h3>
              <p className="text-muted-foreground">
                Cloud deployment, CI/CD pipelines, and monitoring solutions
              </p>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;