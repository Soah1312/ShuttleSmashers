import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { locations } from "@/data/locations";

const Locations = () => {
  return (
    <section id="locations" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Locations</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect location for your badminton training journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {locations.map((location) => (
            <Card key={location.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1">{location.shortName} Center</h3>
                  <p className="text-white/90 text-sm">{location.city}</p>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{location.name}</CardTitle>
                <p className="text-muted-foreground">{location.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{location.address}</p>
                    <p className="text-sm text-muted-foreground">{location.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {location.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Operating Hours:</p>
                    <p>Mon-Fri: {location.operatingHours.monday}</p>
                    <p>Sat-Sun: {location.operatingHours.saturday}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Facilities & Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {location.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <Link to={`/location/${location.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      View Details
                      <ChevronRight className="ml-2" />
                    </Button>
                  </Link>
                  <Button className="flex-1">
                    Book Trial
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-lg p-6 max-w-2xl mx-auto border">
            <h3 className="text-lg font-semibold mb-2">Not sure which location is right for you?</h3>
            <p className="text-muted-foreground mb-4">
              Contact us and we'll help you choose the perfect center based on your location, schedule, and training goals.
            </p>
            <Button size="lg">
              Get Location Recommendations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
