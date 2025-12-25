import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Aadukalam",
    subtitle: "A Celebration of Classical Performing Arts",
    description: "Aadukalam is a premier platform dedicated to showcasing the rich heritage of classical Indian performing arts. This event celebrates the traditional art forms including Bharatanatyam, Kuchipudi, Odissi, and other classical dance styles that have been passed down through generations. Aadukalam provides an exquisite stage for dancers and musicians to exhibit their mastery, preserving cultural legacy while inspiring new generations to appreciate and practice these timeless art forms.",
    highlights: [
      "Classical Dance Competitions",
      "Instrumental Music Performances",
      "Traditional Music Recitals",
      "Cultural Heritage Showcase",
      "Expert Judging Panel",
      "Prizes & Recognition"
    ],
    icon: "🎭"
  },
  {
    title: "Medrenaline",
    subtitle: "Medical Students' Adrenaline-Pumping Extravaganza",
    description: "Medrenaline is the heart-racing, high-energy event designed exclusively for the vibrant medical student community. This unique extravaganza blends the intensity of medical academics with the thrill of performance and competition. From medical debates and case presentations to dramatics and talent showcases, Medrenaline celebrates the multifaceted talents of future healthcare professionals. It's a space where brilliance meets passion, where medical minds unwind through creative expression, and where camaraderie transcends competition.",
    highlights: [
      "Medical Debates & Discussions",
      "Clinical Case Presentations",
      "Medical Dramatics",
      "Talent Showcases",
      "Networking Opportunities",
      "Healthcare Innovation Showcase"
    ],
    icon: "⚕️"
  }
];

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      data-testid={`event-card-${index}`}
    >
      <Card className="glass border border-border/50 hover:border-primary/30 transition-colors h-full hover-elevate overflow-hidden">
        <CardContent className="p-8">
          {/* Icon */}
          <div className="text-5xl mb-6">{event.icon}</div>
          
          {/* Title */}
          <h2 className="font-display text-3xl font-bold mb-2 text-foreground">
            {event.title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-primary font-semibold mb-4 text-sm">
            {event.subtitle}
          </p>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {event.description}
          </p>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
            <div className="grid grid-cols-2 gap-3">
              {event.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary text-lg mt-1">✦</span>
                  <span className="text-sm text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <Button 
            className="w-full group"
            onClick={() => window.open("https://google.com", "_blank")}
            data-testid={`button-event-link-${index}`}
          >
            Visit Website
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function OtherEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              Special Events
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-cosmic-text">Our Other Events</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover our distinctive events that celebrate culture, talent, and community. Each event brings a unique flavor to the Pradharshini experience, showcasing excellence in different domains.
            </p>
          </motion.div>

          {/* Two Column Events Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {events.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </motion.div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 p-8 md:p-12 rounded-xl glass border border-primary/20"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                Why These Events Matter
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Aadukalam and Medrenaline represent the two pillars of Pradharshini—preserving cultural heritage while celebrating the unique talents of our medical community. Together, they create a holistic festival experience that honors tradition and innovation, classical arts and contemporary excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="p-6 rounded-lg bg-background/40 border border-border/30">
                  <p className="text-2xl font-bold text-primary mb-2">Cultural</p>
                  <p className="text-muted-foreground">Aadukalam preserves and promotes India's classical artistic traditions</p>
                </div>
                <div className="p-6 rounded-lg bg-background/40 border border-border/30">
                  <p className="text-2xl font-bold text-primary mb-2">Community</p>
                  <p className="text-muted-foreground">Medrenaline celebrates the diverse talents within the medical fraternity</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
