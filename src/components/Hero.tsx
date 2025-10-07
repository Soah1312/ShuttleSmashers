import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-badminton.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image — keep it behind everything and bias it to the right so the shuttlecock stays visible */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Badminton Training"
          className="w-full h-full object-cover object-right-top filter brightness-75"
        />

        {/* Stronger left-to-right gradient so left text stays readable on all screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        {/* subtle radial vignette at edges */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: big headline and CTAs */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-sm text-white/70 uppercase tracking-wider mb-4">Premier Badminton Academy</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              <span className="block">Coaching for Peak</span>
              <span className="block text-accent-400">Performance</span>
            </h1>

            <p className="mt-5 text-white/90 max-w-xl text-lg md:text-xl">
              Expert coaches, world-class facilities and a community that pushes you to be your best. Join training, camps and competitive programs for all ages.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/95 text-accent-foreground text-lg px-6 py-3 shadow-lg"
                aria-label="Enroll now"
              >
                Enroll Now
                <ArrowRight className="ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("programs")}
                className="text-white border-white/20 hover:bg-white/5 px-6 py-3"
                aria-label="Schedule a trial"
              >
                <Play className="mr-2" size={16} />
                Schedule a Trial
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/80">
              <span>🏅 Professional Coaches</span>
              <span>•</span>
              <span>🏟️ World-class Facilities</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden md:inline">Proven Results</span>
            </div>
          </div>

          {/* Right: framed image card to echo the hero image and create visual anchor */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="hidden sm:block w-full max-w-md md:max-w-sm lg:max-w-md rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/30">
              <img
                src={heroImage}
                alt="Players training"
                className="w-full h-72 object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Small scroll indicator for affordance */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center items-start p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-down-up" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
