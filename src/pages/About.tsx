import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "Git"
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers."
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022", 
      description: "Built end-to-end solutions from database design to user interface implementation."
    },
    {
      title: "Junior Developer",
      company: "Development Agency",
      period: "2018 - 2020",
      description: "Developed client websites and learned modern development practices."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate engineer with a love for creating elegant solutions to complex problems
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Bio */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a software engineer with over 5 years of experience building 
                  scalable web applications and systems. My journey started with a 
                  curiosity about how things work, which led me to pursue computer 
                  science and fall in love with programming.
                </p>
                <p>
                  I specialize in full-stack development with expertise in modern 
                  JavaScript frameworks, cloud architecture, and agile development 
                  practices. I believe in writing clean, maintainable code and 
                  creating user-centered solutions.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or enjoying the outdoors.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Professional Experience
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 shadow-medium">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;