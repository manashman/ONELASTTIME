import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Music, 
  Mic2, 
  Palette, 
  Drama, 
  PenTool, 
  Camera,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredEvents = [
  {
    id: 1,
    name: "Dance",
    title: "Temporal Motion",
    icon: Mic2,
    description: "Classical, contemporary, and fusion dance competitions showcasing movement through time.",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    id: 2,
    name: "Music",
    title: "Symphony of Time",
    icon: Music,
    description: "Battle of bands, solo performances, vocal competitions, and orchestral showcases.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    name: "Theatre",
    title: "Theatre Chronicles",
    icon: Drama,
    description: "Theatrical performances and street plays depicting historical narratives and contemporary stories.",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: 4,
    name: "Fashion",
    title: "Canvas of Ages",
    icon: Palette,
    description: "Fashion and artistic performances bringing style and creativity to life.",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 5,
    name: "Literary",
    title: "Words Across Time",
    icon: PenTool,
    description: "Poetry, creative writing, debate, and storytelling competitions.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 6,
    name: "Digital",
    title: "Digital Arenas",
    icon: Camera,
    description: "Digital competitions showcasing creativity in photography, film, and design.",
    color: "from-indigo-500/20 to-violet-500/20"
  }
];

export function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Featured Categories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Explore the <span className="gradient-cosmic-text">Epochs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            From classical traditions to future innovations, discover our diverse range of competitive cultural events.
          </p>
        </motion.div>

        <div className="relative overflow-hidden group">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {/* Double the events for seamless loop */}
            {[...featuredEvents, ...featuredEvents, ...featuredEvents, ...featuredEvents].map((event, index) => {
              const Icon = event.icon;
              return (
                <Card 
                  key={`${event.id}-${index}`} 
                  className="glass border border-border/50 hover:border-primary/30 transition-colors w-[350px] flex-shrink-0 h-[320px]"
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="w-fit mb-4">{event.name}</Badge>
                    <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
          
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        <div className="mt-16 text-center">
          <Link href="/events">
            <Button size="lg" className="hover-elevate">
              View All Categories <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
