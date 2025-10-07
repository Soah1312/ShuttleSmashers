import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import successImage from "@/assets/success-1.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "State Champion 2024",
      image: successImage,
      text: "Ace Academy transformed my game completely. The coaches' attention to detail and personalized training helped me win my first state championship!",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      role: "Advanced Program",
      image: successImage,
      text: "The facilities are world-class and the coaching is exceptional. My son has improved tremendously in just 6 months. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Chen",
      role: "Junior Player",
      image: successImage,
      text: "I love coming to practice! The coaches make learning fun and I've made so many friends. I can't wait for the next tournament!",
      rating: 5,
    },
    {
      name: "David Kumar",
      role: "Parent",
      image: successImage,
      text: "As a parent, I appreciate the academy's focus on both skill development and character building. The values taught here go beyond badminton.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our students and parents about their journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-base md:text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20 bg-card flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
