import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import trainingImage from "@/assets/training-1.jpg";
import tournamentImage from "@/assets/tournament-1.jpg";
import successImage from "@/assets/success-1.jpg";
import heroImage from "@/assets/hero-badminton.jpg";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("training");
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const handleTabChange = (value: string) => {
    if (value === 'achievements' && activeTab === 'training') {
      setSlideDirection('right');
    } else if (value === 'training' && activeTab === 'achievements') {
      setSlideDirection('left');
    }
    setActiveTab(value);
  };

  const galleries = {
    training: [
      { image: trainingImage, title: "Training Session", description: "Daily practice drills" },
      { image: heroImage, title: "Court Practice", description: "Professional facilities" },
      { image: trainingImage, title: "Technique Training", description: "Focus on fundamentals" },
      { image: heroImage, title: "Group Training", description: "Team development" },
    ],
  };

  const achievements = [
    {
      id: "winter-cup-2024",
      title: "Winter Cup 2024",
      date: "December 2024",
      winners: "12 academy students",
      image: tournamentImage,
      description: "Our students dominated the Winter Cup, securing top positions across all categories."
    },
    {
      id: "state-junior-championship",
      title: "State Junior Championship",
      date: "October 2024",
      winners: "3 Gold, 5 Silver medals",
      image: successImage,
      description: "Outstanding performance with multiple medal winners in the state championships."
    },
    {
      id: "regional-finals-2024",
      title: "Regional Finals 2024",
      date: "August 2024",
      winners: "5 finalists",
      image: trainingImage,
      description: "Our players reached the finals in multiple regional tournaments."
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Academy <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our training sessions and recent achievements
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="mb-4">
            <TabsList className="flex w-full max-w-sm mx-auto space-x-2 overflow-x-auto scrollbar-hide px-2 transition-all duration-300 ease-in-out">
              <TabsTrigger value="training" className="transition-all duration-200 ease-in-out data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Training</TabsTrigger>
              <TabsTrigger value="achievements" className="transition-all duration-200 ease-in-out data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Achievements</TabsTrigger>
            </TabsList>
          </div>

          <div className="relative overflow-hidden">
            {Object.entries(galleries).map(([key, images]) => (
              <TabsContent key={key} value={key} className={`transition-all duration-500 ease-in-out ${
                activeTab === key 
                  ? 'opacity-100 transform translate-x-0' 
                  : slideDirection === 'right' 
                    ? 'opacity-0 transform -translate-x-full' 
                    : 'opacity-0 transform translate-x-full'
              }`}>
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
                          <p className="text-base text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}

            <TabsContent value="achievements" className={`transition-all duration-500 ease-in-out ${
              activeTab === 'achievements' 
                ? 'opacity-100 transform translate-x-0' 
                : slideDirection === 'right' 
                  ? 'opacity-0 transform translate-x-full' 
                  : 'opacity-0 transform -translate-x-full'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {achievements.map((achievement) => (
                  <Card className="overflow-hidden glass-card hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          loading="lazy"
                          className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center text-white">
                          <Trophy className="w-5 h-5 mr-2" />
                          <span className="font-semibold">{achievement.winners}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h4>
                      <p className="text-base text-muted-foreground mb-3">{achievement.date}</p>
                      <p className="text-base text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
