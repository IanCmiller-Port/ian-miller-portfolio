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
import bioprinterMain from "@/assets/project-photos/bioprinter-main.jpg";
import restomodWheels from "@/assets/project-photos/944-restomod-wheels.jpg";
import restomodWelding from "@/assets/project-photos/944-restomod-welding.jpg";

// 944 Restomod project photos
const restomodCover = "/lovable-uploads/5bcbb0b7-ff9a-493e-adca-7ba654d48d94.png";
const restomodGallery = [
  "/lovable-uploads/3bb257d8-9e59-4d17-9065-a5e3b997e77e.png",
  "/lovable-uploads/e14d57ac-f73d-4e85-9d83-d07febd4150b.png",
  "/lovable-uploads/12bc95c2-d55c-479b-90f0-4b6ecd6a6c83.png",
  "/lovable-uploads/83416923-65d7-4eff-8e5c-05af82562cb1.png",
  "/lovable-uploads/2c5d74b0-4c47-45ef-bbf8-5c0f8803c118.png",
  "/lovable-uploads/177595bf-0789-441e-8eaa-c27bf8c53379.png",
  restomodWheels,
  restomodWelding
];

// Bioprinter project photos
const bioprinterCover = bioprinterMain;
const bioprinterGallery = [
  bioprinterMain,
  "/lovable-uploads/1839ed07-a577-46c2-9839-a376a9f2c366.png",
  "/lovable-uploads/1c716f75-8b71-4fed-8062-7bde2ff91e61.png",
  "/lovable-uploads/1296f8f3-cbe4-4d50-b02a-e70fa816742f.png"
];

// CNC router project photos
const cncRouterCover = "/lovable-uploads/f90e94ad-f6ee-486c-8edf-6d57a7b9a130.png";
const cncRouterGallery = [
  "/lovable-uploads/f90e94ad-f6ee-486c-8edf-6d57a7b9a130.png"
];

// BIT-kit project photos
const bitkitCover = "/lovable-uploads/f26968ab-0ef7-4325-a3b6-a3b0aa7f0b0a.png";
const bitkitGallery = [
  "/lovable-uploads/66f1f7b0-558c-43e2-b3e3-5718c16e30f6.png",
  "/lovable-uploads/d9a1dffe-7ea4-40c8-a587-42b83bc0f6f1.png",
  "/lovable-uploads/7c6b7bc4-39dd-4b59-b7eb-3cca5a955d8d.png",
  "/lovable-uploads/f26968ab-0ef7-4325-a3b6-a3b0aa7f0b0a.png"
];

// Large scale FDM 3D printer project photos
const fdmPrinterCover = "/lovable-uploads/936cec2b-c729-4e18-aca5-74cb2b5e2bc1.png";
const fdmPrinterGallery = [
  "/lovable-uploads/936cec2b-c729-4e18-aca5-74cb2b5e2bc1.png"
];

// Machining project photos
const machiningCover = "/lovable-uploads/ff5d2c36-ebb2-4199-bbea-0162e86092fa.png";
const machiningGallery = [
  "/lovable-uploads/0392c66b-5d7c-4edb-a074-6300bab19b56.png",
  "/lovable-uploads/ff5d2c36-ebb2-4199-bbea-0162e86092fa.png", 
  "/lovable-uploads/37a9e13e-297b-45f5-8053-c1f889e890af.png",
  "/lovable-uploads/5924ad52-d70a-4bcb-97a7-123228d0ccba.png"
];

// Kneevive project photos
const kneeviveCover = "/lovable-uploads/e7f70991-80d7-495a-893c-9c40e8c5292a.png";
const kneeviveGallery = [
  "/lovable-uploads/e7f70991-80d7-495a-893c-9c40e8c5292a.png",
  "/lovable-uploads/3464462f-71c2-4e64-9c98-7822392f2c02.png",
  "/lovable-uploads/fe8c7824-1f07-4e61-8309-3e3a5ec8bf58.png",
  "/lovable-uploads/a30adf7c-4cd9-45e5-9361-40b9a9dd4b0a.png"
];

// Other projects photos
const otherProjectsCover = "/lovable-uploads/a4bbd03c-65a5-4ca5-990e-2d2946e8d197.png";
const otherProjectsGallery = [
  "/lovable-uploads/1096932f-4e6c-4fc7-bcc2-c5e251fb1ff8.png",
  "/lovable-uploads/7a4bcb59-9616-40d1-924a-961c7d298754.png",
  "/lovable-uploads/fe9038f0-f175-4415-9d86-4050a9b09af6.png",
  "/lovable-uploads/a4bbd03c-65a5-4ca5-990e-2d2946e8d197.png",
  "/lovable-uploads/48c8f770-db0e-48ea-975b-0eb1583dfca4.png",
  "/lovable-uploads/501df425-ce26-4653-8731-bf56c421a60f.png",
  "/lovable-uploads/a0693d29-8c83-49e2-aa4c-a16e42e7037c.png"
];

const Projects = () => {
  const projects = [
    {
      title: "Large Scale Fresh Bioprinter",
      description: "Using SLS like wiper technology to increase speed an accuracy at scale for FRESH bioprinting",
      technologies: ["Machining", "CAD", "Plasma Cutting", "Motion system Design", "Electrical Wiring"],
      coverImage: bioprinterCover,
      image: "🧪",
      photos: bioprinterGallery
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
      title: "Kneevive Osteoarthritis Traction Device",
      description: "Led a team of engineers in developing an innovative at-home osteoarthritis traction device, while mentoring teammates by teaching CAD skills and core engineering concepts",
      technologies: ["Project management", "Medical device Design", "Market research", "CAD", "Test development"],
      coverImage: kneeviveCover,
      image: "🦵",
      photos: kneeviveGallery
    },
    {
      title: "CNC router",
      description: "Originally setting out to build a \"Dremel CNC\", I was unimpressed by the lack of rigidity and power, so with parts that I had on hand i designed and built this machine.",
      technologies: ["GRBL", "Motion Systems", "Electronics", "Machining"],
      coverImage: cncRouterCover,
      image: "🔧",
      photos: cncRouterGallery
    },
    {
      title: "BIT-kit Biomaterial test platform (Ender 3)",
      description: "Born at a hackathon, my idea for a low-cost open source biomaterial test platform using the widely available Ender 3 manifested itself as BIT-kit",
      technologies: ["Rapid Prototyping", "Electronics", "Gear systems", "Sleep Deprivation"],
      coverImage: bitkitCover,
      image: "🤖",
      photos: bitkitGallery
    },
    {
      title: "Machining",
      description: "Some professional and personal machining I've done",
      technologies: ["CNC machining", "Manual Machining", "Precision measurement"],
      coverImage: machiningCover,
      image: "⚙️",
      photos: machiningGallery
    },
    {
      title: "Large scale FDM 3d printer",
      description: "Make 3d printing large models like car body panels affordable for hobbyists. I built this 3d printer for only 450$. This was my first time building a 3d printer from scratch.",
      technologies: ["Soldering", "Electronics", "CAD", "Documentation", "Open source design"],
      coverImage: fdmPrinterCover,
      image: "🖨️",
      photos: fdmPrinterGallery
    },
    {
      title: "Other projects",
      description: "I take on a lot of smaller projects that showcase my skills and creativity, you can find some of them here",
      technologies: [],
      coverImage: otherProjectsCover,
      image: "💰",
      photos: otherProjectsGallery
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
            
            {/* CTA Card */}
            <Card className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 group bg-gradient-subtle">
              <div className="bg-gradient-hero h-48 flex items-center justify-center text-6xl">
                💬
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  Have a Project in Mind?
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  I'm always interested in new challenges and opportunities to create something amazing
                </p>
                
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Let's Talk
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;