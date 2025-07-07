import { Card } from "@/components/ui/card";

const BioSection = () => {
  return (
    <section id="bio" className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Artist photo */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/9065f9ca-b0b1-49c2-a80b-a3b0a8778a8f.png" 
                alt="Scighera artist photo" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-fog/20 rounded-2xl"></div>
            </div>
          </div>
          
          {/* Bio content */}
          <div className="order-1 md:order-2 space-y-6">
            <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-soft p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in text-center mb-6">
                Bio
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ho iniziato a suonare quando avevo 13 anni, in casa si è sempre respirato musica. Il rock e il pop, Da Lou Reed a Lucio Battisti, mi hanno sempre appassionato per la loro capacità di dire cose complesse in modo semplice e alla portata di tutti.
                </p>
                <p>
                  Nella Scighera ci si perde, come negli articoli di giornale, come su un campo di battaglia, come, forse, nella nostra quotidianità, fatta di opinioni, tecnologia, bolle e fanatismo.
                </p>
                <p>
                  Scighera vuole essere uno specchio nel quale potersi ritrovare, attraverso il quale ritrovare quel comune denominatore che ci fa inorridire, rasserenare, pensare, amare e sognare - come esseri umani e come individui.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;