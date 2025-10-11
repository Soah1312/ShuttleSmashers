import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Navigation } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!supabase) {
      toast.error("Supabase client is not configured. Please check your environment variables.");
      return;
    }

    setIsSubmitting(true);

    try {
      const inquiryPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message,
      };

      const { error } = await supabase.from("inquiries").insert(inquiryPayload);

      if (error) {
        throw error;
      }

      toast.success("Thank you! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (submissionError) {
      console.error("Inquiry submission failed", submissionError);
      toast.error("We couldn't submit your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@shuttlesmashers.com", "coaching@shuttlesmashers.com"],
    },
    {
      icon: MapPin,
      title: "Centers",
      details: ["Vidya Vikasini Badminton Court", "DC Club"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sun: 6:00 AM - 9:00 PM", "Office: 9:00 AM - 6:00 PM"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Twitter, url: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your badminton journey? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <info.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location Maps */}
            <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
              {/* Vidya Vikasini Center Map */}
              <Card className="glass-card overflow-hidden flex flex-col h-full">
                <div className="p-4 bg-muted">
                  <h4 className="font-bold text-foreground text-center">Vidya Vikasini Badminton Court</h4>
                </div>
                <div className="w-full h-80 md:h-96 bg-muted flex-1">
                  <iframe
                    title="Vidya Vikasini Badminton Court Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.0977132676626!2d72.84040033399617!3d19.408281321765966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9006015d2d9%3A0x75e9921f8dc60fda!2sVidya%20Vikasini%20Badminton%20Court!5e0!3m2!1sen!2sin!4v1759940756899!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-background border-t">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=19.4083,72.8404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-2">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </Card>

              {/* DC Club Center Map */}
              <Card className="glass-card overflow-hidden flex flex-col h-full">
                <div className="p-4 bg-muted">
                  <h4 className="font-bold text-foreground text-center">DC Club</h4>
                </div>
                <div className="w-full h-80 md:h-96 bg-muted flex-1">
                  <iframe
                    title="DC Club Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1864125988704!2d72.80922111046581!3d19.36107944288618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae843ca14885%3A0xd050c337bc865c5a!2sDC%20Club!5e0!3m2!1sen!2sin!4v1759940868981!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-background border-t">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=19.3611,72.8092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-2">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-light transition-colors shadow-md hover:shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your interest in our programs..."
                    className="w-full min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
