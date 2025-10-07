import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import tournamentImage from "@/assets/tournament-1.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Spring Championships 2025",
      date: "March 15-17, 2025",
      location: "Ace Academy Courts",
      category: "Tournament",
      participants: "200+ players",
      status: "Registration Open",
    },
    {
      title: "Junior Summer Camp",
      date: "June 1-15, 2025",
      location: "Main Training Center",
      category: "Camp",
      participants: "60 spots",
      status: "Early Bird",
    },
    {
      title: "Advanced Skills Workshop",
      date: "April 20, 2025",
      location: "Court 1-3",
      category: "Workshop",
      participants: "30 spots",
      status: "Limited Seats",
    },
    {
      title: "Inter-Academy Challenge",
      date: "May 10-12, 2025",
      location: "Sports Complex",
      category: "Tournament",
      participants: "150+ players",
      status: "Coming Soon",
    },
  ];

  const pastEvents = [
    {
      title: "Winter Cup 2024",
      date: "December 2024",
      winners: "12 academy students",
      image: tournamentImage,
    },
    {
      title: "State Junior Championship",
      date: "October 2024",
      winners: "3 Gold, 5 Silver medals",
      image: tournamentImage,
    },
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Events & <span className="text-primary">Tournaments</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete, learn, and grow through our organized events
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
                    <Badge variant="outline" className="border-accent text-accent">{event.status}</Badge>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground">{event.title}</h4>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>{event.participants}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events Highlights */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center text-success mb-2">
                      <Trophy className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{event.winners}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
