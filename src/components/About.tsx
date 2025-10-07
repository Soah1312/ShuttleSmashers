import { Award, Users, Target, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";

const About = () => {
  const stats = [
    { icon: Trophy, label: "Championships Won", value: "50+" },
    { icon: Users, label: "Active Students", value: "500+" },
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Target, label: "Success Rate", value: "95%" },
  ];

  const coaches = [
    {
      name: "Coach Michael Chen",
      role: "Head Coach & Director",
      image: coach1,
      achievements: [
        "Former National Champion",
        "15+ years coaching experience",
        "BWF Level 3 Certified Coach",
        "Trained 20+ state champions",
      ],
    },
    {
      name: "Coach Sarah Williams",
      role: "Senior Coach",
      image: coach2,
      achievements: [
        "International Player (3 years)",
        "Youth Development Specialist",
        "BWF Level 2 Certified Coach",
        "Sports Psychology Diploma",
      ],
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 text-primary" />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Shuttle Smashers</span>
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground">
            <p>
              Founded in 2009, Shuttle Smashers has become the region's premier badminton training center.
              Our mission is to nurture talent, build character, and create champions both on and off the court.
            </p>
            <p>
              With state-of-the-art facilities featuring 12 professional courts, video analysis systems, 
              and strength & conditioning areas, we provide an environment where players can reach their full potential.
            </p>
            <p className="text-primary font-semibold">
              "Excellence is not a skill, it's an attitude."
            </p>
          </div>
        </div>

        {/* Coaches Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Meet Our <span className="text-primary">Expert Coaches</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coaches.map((coach, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">{coach.name}</h4>
                      <p className="text-primary font-medium">{coach.role}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {coach.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-sm md:text-base">
                        <Award className="w-4 h-4 text-success mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
