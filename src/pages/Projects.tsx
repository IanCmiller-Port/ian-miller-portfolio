import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectGallery from "@/components/ProjectGallery";

// Import project photos
import taskApp1 from "@/assets/project-photos/task-app-1.jpg";
import taskApp2 from "@/assets/project-photos/task-app-2.jpg";
import analytics1 from "@/assets/project-photos/analytics-1.jpg";
import analytics2 from "@/assets/project-photos/analytics-2.jpg";
import weather1 from "@/assets/project-photos/weather-app-1.jpg";
import chatbot1 from "@/assets/project-photos/chatbot-1.jpg";
import wallet1 from "@/assets/project-photos/wallet-1.jpg";

// 944 Restomod project photos
const restomodCover = "/lovable-uploads/5bcbb0b7-ff9a-493e-adca-7ba654d48d94.png";
const restomodGallery = [
  "/lovable-uploads/3bb257d8-9e59-4d17-9065-a5e3b997e77e.png",
  "/lovable-uploads/e14d57ac-f73d-4e85-9d83-d07febd4150b.png",
  "/lovable-uploads/12bc95c2-d55c-479b-90f0-4b6ecd6a6c83.png",
  "/lovable-uploads/83416923-65d7-4eff-8e5c-05af82562cb1.png",
  "/lovable-uploads/2c5d74b0-4c47-45ef-bbf8-5c0f8803c118.png",
  "/lovable-uploads/177595bf-0789-441e-8eaa-c27bf8c53379.png"
];

const Projects = () => {
  const projects = [
    {
      title: "Large Scale Fresh Bioprinter",
      description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
      technologies: ["Metal Fab", "Body work", "Electrical Wiring", "3D Printing"],
      image: "🛒",
      photos: [taskApp1, taskApp2]
    },
    {
      title: "944 Restomod", 
      description: "Making my perfect 944 one step at a time, everything from basic repairs to custom body and exhaust work",
      technologies: ["Metal Fab", "Body work", "Electrical Wiring", "3D Printing"],
      coverImage: restomodCover,
      image: "🏎️",
      photos: restomodGallery
    },
    {
      title: "Large scale FDM 3d printer",
      description: "Real-time data visualization dashboard for business metrics with customizable charts and reports.",
      technologies: ["Metal Fab", "Body work", "Electrical Wiring", "3D Printing"],
      image: "📊",
      photos: [analytics1, analytics2]
    },
    {
      title: "CNC router",
      description: "Cross-platform weather application with location services, forecasts, and weather alerts.",
      technologies: ["Metal Fab", "Body work", "Electrical Wiring", "3D Printing"],
      image: "🌤️",
      photos: [weather1]
    },
    {
      title: "BIT-kit Biomaterial test platform (Ender 3)",
      description: "Intelligent chatbot with natural language processing for customer support automation.",
      technologies: ["Metal Fab", "Body work", "Electrical Wiring", "3D Printing"],
      image: "🤖",
      photos: [chatbot1]
    },
    {
      title: "Blacksmithing",
      description: "Secure cryptocurrency wallet with multi-currency support and transaction history.",
      technologies: ["Metal Fab", "Body work", "Electrical Wiring", "3D Printing"],
      image: "💰",
      photos: [wallet1]
    },
    {
      title: "Machining",
      description: "Advanced machining projects and fabrication work.",
      technologies: ["Metal Fab", "Body work", "Electrical Wiring", "3D Printing"],
      image: "⚙️",
      photos: [wallet1]
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
                <div className="bg-gradient-hero h-48 flex items-center justify-center text-6xl overflow-hidden">
                  {project.coverImage ? (
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    project.image
                  )}
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
                    <ProjectGallery photos={project.photos} projectTitle={project.title} />
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