import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchComponent from "@/components/SearchComponent";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "locations", label: "Locations" },
    { id: "programs", label: "Programs" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="text-base sm:text-lg md:text-2xl font-bold text-primary hover:text-primary-light transition-colors flex-shrink-0"
          >
            Shuttle Smashers
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {link.label}
              </button>
            ))}
            <SearchComponent />
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground px-3 lg:px-4"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-2">
            <div className="px-4 py-4 bg-background/95 backdrop-blur-md rounded-b-lg shadow-lg animate-fade-in border-t">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors rounded-md mb-1"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 text-base font-semibold shadow-md"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
