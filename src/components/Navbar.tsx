import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    { id: "programs", label: "Programs" },
    { id: "events", label: "Events" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary-light transition-colors"
          >
            Ace Academy
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
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-background/95 backdrop-blur-md rounded-b-lg shadow-lg animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
