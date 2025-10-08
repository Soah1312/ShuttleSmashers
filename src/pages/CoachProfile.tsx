import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Award, Users, Star, CheckCircle, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import { coaches, getCoachById } from "@/data/coaches";
import { getLocationsByCoach } from "@/data/locations";

const CoachProfile = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const coach = getCoachById(id as string);

  if (!coach) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Coach Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const coachLocations = getLocationsByCoach(coach.id);

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for your booking.");
      return;
    }
    alert(`Booking request sent for ${coach.name} on ${selectedDate} at ${selectedTime}. We'll contact you soon!`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: "About", href: "/#about" },
            { label: "Our Coaches" },
            { label: coach.name }
          ]} />

          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="max-w-6xl mx-auto">
            {/* Coach Header */}
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    loading="lazy"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm p-4 rounded-lg">
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{coach.name}</h1>
                    <p className="text-primary font-medium">{coach.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{coach.experience} experience</p>
                    {coachLocations.length > 0 && (
                      <div className="flex items-center gap-1 mt-2">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {coachLocations.map(loc => loc.shortName).join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About {coach.name}</h2>
                    <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="w-5 h-5 mr-2 text-primary" />
                          Key Achievements
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {coach.achievements.slice(0, 3).map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Users className="w-5 h-5 mr-2 text-primary" />
                          Specializations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {coach.specializations.slice(0, 4).map((spec, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Tabs */}
            <Tabs defaultValue="specializations" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specializations">Specializations</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="booking">Book Session</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="specializations" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Areas of Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {coach.specializations.map((spec, index) => (
                        <div key={index} className="flex items-center p-3 bg-secondary rounded-lg">
                          <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Achievements & Awards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {coach.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <Award className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {coach.certifications.map((cert, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="booking" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Session Pricing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(coach.pricing).map(([type, price]) => (
                          <div key={type} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                            <span className="font-medium">{type}</span>
                            <span className="text-primary font-bold">{price}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Book a Session</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Select Date</label>
                        <select
                          className="w-full p-2 border rounded-md"
                          value={selectedDate || ""}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        >
                          <option value="">Choose a date</option>
                          {coach.availability.map((day, index) => (
                            <option key={index} value={day.day}>{day.day}</option>
                          ))}
                        </select>
                      </div>

                      {selectedDate && (
                        <div>
                          <label className="block text-sm font-medium mb-2">Select Time</label>
                          <select
                            className="w-full p-2 border rounded-md"
                            value={selectedTime || ""}
                            onChange={(e) => setSelectedTime(e.target.value)}
                          >
                            <option value="">Choose a time</option>
                            {coach.availability.find(day => day.day === selectedDate)?.slots.map((slot, index) => (
                              <option key={index} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      <Button
                        onClick={handleBooking}
                        className="w-full"
                        disabled={!selectedDate || !selectedTime}
                      >
                        Book Session with {coach.name}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div className="space-y-6">
                  {coach.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <div className="flex items-center mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CoachProfile;
