import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
const heroBackground = "/lovable-uploads/210b6c99-f1b1-4366-85ba-a9fafb61686d.png";

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
            Ian Miller
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Building innovative solutions through thoughtful engineering
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
                <span className="text-2xl text-white">📐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">CAD/CAM</h3>
              <p className="text-muted-foreground">
                3D modeling, parametric design, and computer-aided manufacturing
              </p>
            </Card>

            <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all">
              <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🔨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Fabrication</h3>
              <p className="text-muted-foreground">
                3D printing, machining, and custom part manufacturing
              </p>
            </Card>

            <Card className="p-8 text-center shadow-medium hover:shadow-large transition-all">
              <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🧪</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Testing</h3>
              <p className="text-muted-foreground">
                Materials testing, quality assurance, and process optimization
              </p>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;