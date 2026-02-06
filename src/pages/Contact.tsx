import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: "✉️",
      title: "Email",
      value: "Ianmiller@umass.edu",
      link: "mailto:Ianmiller@umass.edu"
    },
    {
      icon: "💼",
      title: "LinkedIn", 
      value: "in/ian-miller-um",
      link: "https://linkedin.com/in/ian-miller-um"
    }
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
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

            <Card className="p-6 mt-8 shadow-soft">
              <h3 className="font-semibold mb-3 text-card-foreground">Location</h3>
              <p className="text-muted-foreground text-sm">
                Currently based in Lexington, MA, open to remote work and internship opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;