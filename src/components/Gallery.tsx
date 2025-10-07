import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import trainingImage from "@/assets/training-1.jpg";
import tournamentImage from "@/assets/tournament-1.jpg";
import successImage from "@/assets/success-1.jpg";
import heroImage from "@/assets/hero-badminton.jpg";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("training");

  const galleries = {
    training: [
      { image: trainingImage, title: "Training Session", description: "Daily practice drills" },
      { image: heroImage, title: "Court Practice", description: "Professional facilities" },
      { image: trainingImage, title: "Technique Training", description: "Focus on fundamentals" },
      { image: heroImage, title: "Group Training", description: "Team development" },
    ],
    tournaments: [
      { image: tournamentImage, title: "Championship Match", description: "Competitive action" },
      { image: tournamentImage, title: "Tournament Day", description: "Players in action" },
      { image: successImage, title: "Victory Moment", description: "Celebrating success" },
      { image: tournamentImage, title: "Finals", description: "High-stakes competition" },
    ],
    awards: [
      { image: successImage, title: "Trophy Winners", description: "Our champions" },
      { image: successImage, title: "Medal Ceremony", description: "Achievement recognition" },
      { image: successImage, title: "Success Stories", description: "Pride and glory" },
      { image: successImage, title: "Award Winners", description: "Excellence rewarded" },
    ],
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Academy <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our training, tournaments, and achievements
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-4">
            <TabsList className="flex w-full max-w-md mx-auto space-x-2 overflow-x-auto scrollbar-hide px-2">
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
              <TabsTrigger value="awards">Awards</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(galleries).map(([key, images]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {images.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/98 via-background/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="bg-card/95 backdrop-blur-sm p-3 rounded-lg">
                        <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
