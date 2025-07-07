import albumCover from "../assets/album-cover.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background album cover with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={albumCover} 
          alt="Scighera album cover" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-6 animate-fade-in">
          Scighera
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
          Indie-pop dall'anima milanese
        </p>
      </div>
      
      {/* Floating elements */}
    </section>
  );
};

export default HeroSection;