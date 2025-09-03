import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: "✉️",
      title: "Email",
      value: "hello@portfolio.com",
      link: "mailto:hello@portfolio.com"
    },
    {
      icon: "💼",
      title: "LinkedIn", 
      value: "/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "/yourusername",
      link: "https://github.com/yourusername"
    }
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="p-8 shadow-medium">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Send Me a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project Collaboration"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    className="mt-1 min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-xl">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{info.title}</h3>
                        <a 
                          href={info.link}
                          className="text-primary hover:text-primary/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="p-6 mt-8 shadow-soft">
                <h3 className="font-semibold mb-3 text-card-foreground">Availability</h3>
                <p className="text-muted-foreground text-sm">
                  I'm currently available for new projects and collaborations. 
                  I typically respond to messages within 24 hours.
                </p>
              </Card>

              <Card className="p-6 mt-4 shadow-soft">
                <h3 className="font-semibold mb-3 text-card-foreground">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Based in Your City, open to remote work and occasional travel for projects.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;