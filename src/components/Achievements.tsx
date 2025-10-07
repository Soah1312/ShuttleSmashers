import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import tournamentImage from "@/assets/tournament-1.jpg";
import successImage from "@/assets/success-1.jpg";
import trainingImage from "@/assets/training-1.jpg";

const Achievements = () => {
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
    <section id="achievements" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Recent <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating our students' successes and milestones
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement) => (
            <Link key={achievement.id} to={`/achievement/${achievement.id}`}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
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
                  <p className="text-sm text-muted-foreground mb-3">{achievement.date}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
