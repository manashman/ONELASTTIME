import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Sparkles, Music, Palette, Trophy, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const otherEvents = [
  {
    title: "Workshops & Masterclasses",
    description: "Interactive sessions with industry experts and accomplished performers sharing their knowledge and techniques",
    icon: Sparkles,
    highlights: ["Industry Experts", "Live Demonstrations", "Q&A Sessions", "Certificate of Participation"]
  },
  {
    title: "Collaborative Performances",
    description: "Special joint performances featuring talented artists from multiple colleges coming together for spectacular shows",
    icon: Users,
    highlights: ["Multi-college Acts", "Fusion Performances", "Special Guests", "Grand Finales"]
  },
  {
    title: "Art & Photography Exhibition",
    description: "Stunning visual displays showcasing student artwork, digital creations, and thought-provoking photography",
    icon: Palette,
    highlights: ["Curated Collections", "Student Artists", "Interactive Displays", "Photography Awards"]
  },
  {
    title: "Innovation & Talent Competition",
    description: "A platform for emerging talents to showcase unique skills, innovative ideas, and creative talents",
    icon: Zap,
    highlights: ["Talent Discovery", "Innovation Showcase", "Mentorship Opportunities", "Exclusive Prizes"]
  },
  {
    title: "Comedy & Entertainment Nights",
    description: "Laugh out loud with hilarious stand-up comedy, improv acts, and entertaining theatrical performances",
    icon: Music,
    highlights: ["Stand-up Comedy", "Improv Acts", "Sketch Comedy", "Entertainment Prizes"]
  },
  {
    title: "Recognition & Awards Ceremony",
    description: "Celebrating excellence and honoring the outstanding contributions and performances from all participants",
    icon: Trophy,
    highlights: ["Excellence Awards", "Best Performer", "College Recognition", "Special Honors"]
  }
];

function EventCard({ event, index }: { event: typeof otherEvents[0]; index: number }) {
  const Icon = event.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-testid={`event-card-${index}`}
    >
      <Card className="glass border border-border/50 hover:border-primary/30 transition-colors h-full hover-elevate">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              {event.title}
            </h3>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {event.description}
          </p>

          <div className="space-y-2">
            {event.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-primary text-sm">●</span>
                <p className="text-sm text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
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
              Beyond Competitions
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-cosmic-text">Our Other Events</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Experience more than just competitions. Pradharshini offers a diverse range of engaging events and activities designed to celebrate talent in all its forms.
            </p>
          </motion.div>

          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 p-8 md:p-12 rounded-xl glass border border-primary/20"
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
              A Complete Celebration
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              While our competitive events showcase raw talent, our special events and programs are designed to enrich the festival experience. From masterclasses with industry experts to collaborative performances that bring colleges together, Pradharshini is much more than just competitions. We celebrate creativity, foster learning, and create unforgettable memories.
            </p>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl font-bold mb-8 text-center text-foreground">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherEvents.map((event, index) => (
                <EventCard key={index} event={event} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-8 md:p-12 rounded-xl glass border border-primary/20"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                Why Join Our Events?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-2xl font-bold text-primary mb-2">Learn</p>
                  <p className="text-muted-foreground">Gain insights from industry experts and accomplished performers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary mb-2">Connect</p>
                  <p className="text-muted-foreground">Network with talented students from colleges across the nation</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary mb-2">Create</p>
                  <p className="text-muted-foreground">Collaborate and create memorable moments with fellow artists</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary mb-2">Grow</p>
                  <p className="text-muted-foreground">Develop your skills and expand your creative horizons</p>
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
