import { Card } from "@/components/ui/card";
import artistPhoto from "../assets/artist-photo.jpg";

const BioSection = () => {
  return (
    <section id="bio" className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Artist photo */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src={artistPhoto} 
                alt="Scighera artist photo" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-fog/20 rounded-2xl"></div>
            </div>
          </div>
          
          {/* Bio content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
              Chi è Scighera
            </h2>
            
            <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-soft p-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Scighera nasce dalle strade nebbiose di Milano, dove la malinconia urbana 
                  si fonde con melodie indie-pop che raccontano storie di vita quotidiana.
                </p>
                <p>
                  Il nome stesso evoca quella nebbia che avvolge la città lombarda, 
                  creando un'atmosfera unica che caratterizza ogni brano del progetto.
                </p>
                <p>
                  Tra synth analogici e chitarre sognanti, Scighera dipinge paesaggi sonori 
                  che parlano di nostalgia, speranza e quella particolare bellezza che si 
                  trova nei momenti più semplici.
                </p>
              </div>
            </Card>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground italic">
                "La musica è come la nebbia: arriva quando meno te l'aspetti e ti avvolge completamente"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;