import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Users, Trophy, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { locations, getLocationById } from "@/data/locations";
import { coaches } from "@/data/coaches";

const LocationDetail = () => {
  const { id } = useParams();
  const location = getLocationById(id as string);

  if (!location) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const locationCoaches = coaches.filter(coach => location.coaches.includes(coach.id));

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: "Locations", href: "/#locations" },
            { label: location.shortName }
          ]} />

          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                    {location.name}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    {location.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">{location.address}</p>
                        <p className="text-sm text-muted-foreground">{location.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1">
                      <Calendar className="mr-2 w-4 h-4" />
                      Book Trial Class
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      <Phone className="mr-2 w-4 h-4" />
                      Call Now
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-6 border">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Clock className="mr-2 w-4 h-4" />
                      Operating Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>{location.operatingHours.monday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>{location.operatingHours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>{location.operatingHours.sunday}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-6 border">
                    <h3 className="font-semibold mb-3">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{location.features.filter(f => f.includes('Court')).length}</div>
                        <div className="text-sm text-muted-foreground">Professional Courts</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{location.coaches.length}</div>
                        <div className="text-sm text-muted-foreground">Expert Coaches</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Facilities & Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {location.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coaches at this location */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <Users className="mr-2 w-5 h-5" />
                Meet Our Coaches
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locationCoaches.map((coach) => (
                  <Card key={coach.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-bold text-white">{coach.name}</h3>
                        <p className="text-white/90 text-sm">{coach.specialization}</p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {coach.bio}
                      </p>
                      <Link to={`/coach/${coach.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          View Profile
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Programs Available */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <Trophy className="mr-2 w-5 h-5" />
                Programs Available
              </h2>
              <div className="bg-secondary rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  This location offers the following training programs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {location.programs.map((program, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card rounded border">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="capitalize text-muted-foreground">
                        {program.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us at {location.shortName} Center and experience world-class badminton training
                with our expert coaches and modern facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 w-4 h-4" />
                  Call {location.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LocationDetail;
