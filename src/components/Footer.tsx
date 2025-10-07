import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold mb-1">Ace Academy</p>
            <p className="text-sm text-primary-foreground/80">
              Building Champions Since 2009
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-accent text-accent" />
            <span>by Ace Academy Team</span>
          </div>
          
          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            <p>© 2025 Ace Academy. All rights reserved.</p>
            <p className="mt-1">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              {" • "}
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
