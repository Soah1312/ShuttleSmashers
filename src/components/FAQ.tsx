import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "We welcome players from age 6 and up. Our programs are designed for beginners (6-10 years), intermediate (11-15 years), advanced (14+ years), and competitive players. We also offer adult recreational programs.",
    },
    {
      question: "What are your training timings?",
      answer: "We operate 7 days a week with multiple time slots: Morning (6:00 AM - 9:00 AM), Afternoon (3:00 PM - 6:00 PM), and Evening (6:00 PM - 9:00 PM). Weekend slots fill up quickly, so early registration is recommended.",
    },
    {
      question: "Do I need to bring my own equipment?",
      answer: "For trial sessions, we provide all equipment. Once enrolled, students are encouraged to have their own rackets, but we have quality rackets available for rent. Comfortable sports shoes (non-marking) are mandatory.",
    },
    {
      question: "How do I enroll my child?",
      answer: "You can schedule a free trial session through our contact form or by calling us. After the trial, our coaches will recommend the appropriate program. Registration can be completed online or at the academy.",
    },
    {
      question: "What is your coach-to-student ratio?",
      answer: "We maintain a maximum ratio of 1:8 for beginner programs and 1:6 for advanced programs. Elite squad members receive even more personalized attention with 1:4 ratios.",
    },
    {
      question: "Do you provide tournament opportunities?",
      answer: "Yes! We organize internal tournaments quarterly and help students participate in district, state, and national level competitions. We provide full tournament support including registration and travel coordination.",
    },
    {
      question: "What is your membership policy?",
      answer: "We offer monthly, quarterly, and annual memberships. Annual memberships receive a 15% discount. All memberships include court access during open hours and participation in academy events.",
    },
    {
      question: "Are there any physical fitness requirements?",
      answer: "No prior fitness level is required. Our programs include fitness and conditioning appropriate to each level. We recommend a medical clearance for competitive programs.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about joining Ace Academy
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
