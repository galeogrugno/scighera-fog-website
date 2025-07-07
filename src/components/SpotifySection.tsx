import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2 } from "lucide-react";

const SpotifySection = () => {
  return (
    <section id="music" className="py-16 px-4 bg-gradient-subtle/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in">
          Ascolta Scighera
        </h2>
        
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card max-w-md mx-auto p-6">
          <div className="space-y-6">
            {/* Spotify-like widget */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-fog rounded-lg flex items-center justify-center">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-foreground">Scighera</h3>
                <p className="text-muted-foreground text-sm">Scighera • 2025</p>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Heart className="h-4 w-4 mr-2" />
                Segui su Spotify
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 hover:bg-muted/50"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Spotify embed placeholder */}
            <div className="bg-muted/50 rounded-lg p-4 text-muted-foreground text-sm">
              <p>Spotify widget will appear here</p>
              <p className="text-xs mt-1">Use: spotify:artist:YOUR_ARTIST_ID</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SpotifySection;