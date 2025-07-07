import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Music, Mail, ExternalLink } from "lucide-react";

const SocialSection = () => {
  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@scighera_music",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-500"
    },
    {
      platform: "Spotify",
      handle: "Scighera",
      icon: Music,
      url: "#",
      color: "hover:text-green-500"
    },
    {
      platform: "Email",
      handle: "scigheraofficial@gmail.com",
      icon: Mail,
      url: "#",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-subtle/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in">
          Seguici
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <Card 
              key={social.platform}
              className="bg-card/60 backdrop-blur-sm border-border/50 shadow-soft p-6 hover:shadow-card transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex justify-center">
                  <social.icon className={`h-8 w-8 text-muted-foreground group-hover:scale-110 transition-all duration-300 ${social.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{social.platform}</h3>
                  <p className="text-sm text-muted-foreground">{social.handle}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-border/50 hover:bg-muted/50 group-hover:border-primary/50 transition-colors"
                >
                  Segui
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Contact form teaser */}
        <Card className="bg-card/40 backdrop-blur-sm border-border/50 shadow-soft p-8 max-w-md mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Resta in contatto
            </h3>
            <p className="text-muted-foreground text-sm">
              Iscriviti per ricevere aggiornamenti sui nuovi brani e concerti
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="flex-1 px-3 py-2 bg-input border border-border/50 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Iscriviti
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SocialSection;