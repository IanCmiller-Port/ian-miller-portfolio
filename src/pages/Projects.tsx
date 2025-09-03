import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "944 Restomod",
      description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      image: "🛒",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App", 
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      image: "📋",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard for business metrics with customizable charts and reports.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      image: "📊",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Mobile Weather App",
      description: "Cross-platform weather application with location services, forecasts, and weather alerts.",
      technologies: ["React Native", "TypeScript", "Weather API"],
      image: "🌤️",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing for customer support automation.",
      technologies: ["Python", "TensorFlow", "Flask", "Docker"],
      image: "🤖",
      liveUrl: "#", 
      codeUrl: "#"
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-currency support and transaction history.",
      technologies: ["React", "Web3.js", "Solidity", "Ethereum"],
      image: "💰",
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 group">
                {/* Project Image/Icon */}
                <div className="bg-gradient-hero h-48 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Have a Project in Mind?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new challenges and opportunities to create something amazing
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Let's Talk
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;