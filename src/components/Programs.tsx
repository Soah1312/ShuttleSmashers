import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      level: "Beginner",
      title: "Foundation Program",
      badge: "Age 6 onward",
      description: "Perfect for young players starting their badminton journey. Focus on basic techniques, footwork, and game fundamentals.",
      duration: "3 months",
      frequency: "2x per week",
      coach: "Coach Sarah",
      features: [
        "Basic grip & stance",
        "Fundamental strokes",
        "Court movement basics",
        "Fun games & drills",
      ],
      color: "success",
    },
    {
      level: "Intermediate",
      title: "Development Program",
      badge: "",
      description: "Build on fundamentals with advanced techniques, tactical play, and competitive mindset development.",
      duration: "6 months",
      frequency: "3x per week",
      coach: "Coach Michael",
      features: [
        "Advanced stroke techniques",
        "Tactical game play",
        "Match strategies",
        "Physical conditioning",
      ],
      color: "primary",
    },
    {
      level: "Advanced",
      title: "Performance Program",
      badge: "",
      description: "High-intensity training for serious players aiming for competitive excellence and tournament success.",
      duration: "12 months",
      frequency: "4-5x per week",
      coach: "Coach Michael",
      features: [
        "Tournament preparation",
        "Video analysis sessions",
        "Strength & conditioning",
        "Mental coaching",
      ],
      color: "accent",
    },
    {
      level: "Competitive",
      title: "Elite Squad",
      badge: "Selection Based",
      description: "For top-tier players competing at state and national levels. Intensive training with personalized coaching.",
      duration: "Ongoing",
      frequency: "5-6x per week",
      coach: "Both Coaches",
      features: [
        "Professional training regimen",
        "Tournament support",
        "Nutrition planning",
        "Sports psychology",
      ],
      color: "destructive",
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Training Programs</span>
          </h2>
          <p className="text-xl md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured programs designed for every skill level and age group
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="glass-card hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between min-h-[2.5rem]">
                  {program.badge ? (
                    <Badge
                      variant="secondary"
                      className={`
                        ${program.color === "success" ? "bg-success/10 text-success hover:bg-success/20" : ""}
                        ${program.color === "primary" ? "bg-primary/10 text-primary hover:bg-primary/20" : ""}
                        ${program.color === "accent" ? "bg-accent/10 text-accent hover:bg-accent/20" : ""}
                        ${program.color === "destructive" ? "bg-destructive/10 text-destructive hover:bg-destructive/20" : ""}
                      `}
                    >
                      {program.badge}
                    </Badge>
                  ) : <span />}
                  <span className="text-sm font-semibold text-muted-foreground">{program.level}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{program.title}</h3>
                <p className="text-base text-muted-foreground">{program.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-base">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>Frequency: {program.frequency}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>Coach: {program.coach}</span>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-base font-semibold text-foreground mb-2">What's Included:</p>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-base text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <div className="mt-auto">
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground group-hover:shadow-lg">
                    Sign Up for This Program
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
