import { Music } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-gradient-fog/50 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music className="h-5 w-5 text-primary" />
          <span className="text-lg font-medium text-foreground">Scighera</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#music" className="text-muted-foreground hover:text-foreground transition-colors">
            Music
          </a>
          <a href="#bio" className="text-muted-foreground hover:text-foreground transition-colors">
            Bio
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;