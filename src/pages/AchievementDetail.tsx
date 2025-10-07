import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import tournamentImage from "@/assets/tournament-1.jpg";
import successImage from "@/assets/success-1.jpg";
import trainingImage from "@/assets/training-1.jpg";
import heroImage from "@/assets/hero-badminton.jpg";

const AchievementDetail = () => {
  const { id } = useParams();

  const achievements = {
    "winter-cup-2024": {
      title: "Winter Cup 2024",
      date: "December 2024",
      description: "Our students dominated the Winter Cup, securing top positions across all categories. This tournament showcased exceptional skill and determination from our academy members.",
      images: [tournamentImage, successImage, trainingImage, heroImage, tournamentImage],
      highlights: [
        "12 students qualified for finals",
        "5 gold medals in individual categories",
        "Team championship victory",
        "Best coach award for Abhinav Singh"
      ]
    },
    "state-junior-championship": {
      title: "State Junior Championship",
      date: "October 2024",
      description: "Outstanding performance with multiple medal winners in the state championships. Our junior players proved their mettle against the best competition in the state.",
      images: [successImage, tournamentImage, trainingImage, heroImage, successImage],
      highlights: [
        "3 Gold medals",
        "5 Silver medals",
        "2 Bronze medals",
        "State record for youngest finalist"
      ]
    },
    "regional-finals-2024": {
      title: "Regional Finals 2024",
      date: "August 2024",
      description: "Our players reached the finals in multiple regional tournaments, demonstrating consistent excellence and competitive spirit.",
      images: [trainingImage, heroImage, tournamentImage, successImage, trainingImage],
      highlights: [
        "5 players in finals",
        "3 category wins",
        "Regional ranking improvement",
        "Technical excellence awards"
      ]
    }
  };

  const achievement = achievements[id as keyof typeof achievements];

  if (!achievement) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Achievement Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: "Achievements", href: "/#achievements" },
            { label: achievement.title }
          ]} />

          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                {achievement.title}
              </h1>
              <p className="text-lg text-muted-foreground">{achievement.date}</p>
            </div>

            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {achievement.description}
              </p>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Key Highlights</h3>
                <ul className="space-y-2">
                  {achievement.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievement.images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image}
                      alt={`${achievement.title} - Image ${index + 1}`}
                      loading="lazy"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AchievementDetail;
