const Footer = () => {
  return (
    <footer className="bg-gradient-fog/30 backdrop-blur-sm border-t border-border/50 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 Scighera. Tutti i diritti riservati.
          </div>
          <div className="text-muted-foreground text-sm italic">
            Come la nebbia che avvolge Milano
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;