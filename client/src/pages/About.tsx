import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Award, Users, Zap, History, Music, Palette, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import eventPhoto from "@assets/WhatsApp_Image_2025-12-23_at_16.35.39_1766687243188.jpeg";

const editions = [
  {
    year: 2022,
    icon: Award,
    description: "Pradharshini marked its triumphant debut as a grand cultural celebration at Kilpauk Medical College. What began as a vision to unite artistic talents across the nation transformed into an unforgettable spectacle of creativity and brilliance. With over 3000 participants and 40 events, it set the foundation for what would become one of the premier cultural festivals in the region.",
    highlights: [
      "3000+ Participants",
      "40+ Events",
      "₹5L Prize Pool",
      "15+ Colleges"
    ]
  },
  {
    year: 2023,
    icon: Users,
    description: "Building on the success of the inaugural edition, Pradharshini 2023 soared to new heights. The festival expanded exponentially, welcoming 4500 participants from across the nation. With 45 meticulously curated events and an enhanced prize pool, it became the talk of the cultural circuit. The second edition proved that Pradharshini was here to stay, establishing itself as a beacon of cultural excellence.",
    highlights: [
      "4500+ Participants",
      "45 Events",
      "₹7.5L Prize Pool",
      "25+ Colleges"
    ]
  },
  {
    year: 2024,
    icon: Zap,
    description: "Pradharshini 2024 etched itself into history as the most spectacular edition yet. With record-breaking participation of 5000+ competitors and a staggering 50 diverse events spanning multiple disciplines, it redefined what a college cultural festival could be. The enhanced infrastructure, world-class organization, and unwavering commitment to excellence made it an unforgettable journey through time and culture.",
    highlights: [
      "5000+ Participants",
      "50 Events",
      "₹10L Prize Pool",
      "40+ Colleges"
    ]
  }
];

function PhotoGalleryCarousel() {
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const photos = [
    {
      image: eventPhoto,
      title: "Stage Brilliance",
      description: "Live performances lighting up the stage"
    },
    {
      title: "Cultural Showcase",
      description: "Diverse talents from across the nation",
      icon: "🎨"
    },
    {
      title: "Fashion Forward",
      description: "Style and creativity on display",
      icon: "👗"
    },
    {
      title: "Dance Magic",
      description: "Mesmerizing choreography and moves",
      icon: "💃"
    },
    {
      title: "Musical Notes",
      description: "Melodies that echo in hearts",
      icon: "🎵"
    },
    {
      title: "Artistic Vision",
      description: "Creative expressions and artistry",
      icon: "🖼️"
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, photos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <motion.div
      ref={galleryRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16"
    >
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Moments from Pradharshini
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Capturing the energy, creativity, and spirit of our amazing cultural festival
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <Card className="glass border border-border/50 overflow-hidden">
          <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
              data-testid={`gallery-slide-${currentIndex}`}
            >
              {currentPhoto.image ? (
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">{currentPhoto.icon}</div>
                </div>
              )}
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          </div>

          <CardContent className="p-8 text-center">
            <h3 className="font-semibold text-foreground mb-2 text-xl">
              {currentPhoto.title}
            </h3>
            <p className="text-muted-foreground">{currentPhoto.description}</p>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <Button
          size="icon"
          variant="outline"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass border-primary/30 hover:border-primary/50"
          onClick={prevSlide}
          data-testid="gallery-prev-button"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass border-primary/30 hover:border-primary/50"
          onClick={nextSlide}
          data-testid="gallery-next-button"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {photos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 w-2 hover:bg-primary/50"
              }`}
              whileHover={{ scale: 1.2 }}
              data-testid={`gallery-indicator-${index}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4 text-xs text-muted-foreground">
          {autoPlay && "Auto-playing..."}
        </div>
      </div>
    </motion.div>
  );
}

function EditionCard({ edition, index }: { edition: typeof editions[0]; index: number }) {
  const Icon = edition.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-testid={`edition-card-${edition.year}`}
    >
      <Card className="glass border border-border/50 hover:border-primary/30 transition-colors h-full">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                {edition.year}
              </h3>
              <p className="text-primary text-sm font-semibold">{edition.title}</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {edition.description}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {edition.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-background/40 border border-border/30"
              >
                <p className="text-xs font-semibold text-primary mb-1">●</p>
                <p className="text-sm font-medium text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function About() {
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
              About Pradharshini
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-cosmic-text">Where Culture Thrives</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Conducted by Government Kilpauk Medical College (GKMC), Pradharshini is an intercollegiate cultural extravaganza where versatile talents converge to illustrate their flair.
            </p>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <Card className="glass border border-border/50">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">About Pradharshini</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ever since its inception in 1978, Pradharshini has spread its roots across Tamil Nadu and the rest of the country at large. Usually held during September, Pradharshini captures the attention of college students throughout the city for the entirety of its duration. After a brief hiatus, Pradharshini, the crown jewel of GKMC, returned and has once again risen like a phoenix to its former glory.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <History className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl font-bold text-foreground">History</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Pradharshini began in 1978 as a small event, with participation from only a handful of colleges across Tamil Nadu. Since then, it has only continued to grow in size and now witnesses participation from over 100 colleges annually. In recent years, Pradharshini has attracted over 30,000 students from various medical as well as non-medical colleges.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 p-8 md:p-12 rounded-xl glass border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-8 h-8 text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">Our Events</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Pradharshini, an exhibition of cultural arts, is one of South India's biggest cultural festivals and is the biggest event conducted by a South Indian medical college. Although Pradharshini covers a plethora of cultural activities, the main highlights include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <Music className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Music Show</h3>
                  <p className="text-muted-foreground text-sm">Premier showcase of musical talents from across South India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Music className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Variety & Choreo Night</h3>
                  <p className="text-muted-foreground text-sm">High-energy performances featuring dance and theatrical acts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Palette className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Fashion Parade</h3>
                  <p className="text-muted-foreground text-sm">Cutting-edge fashion displays and style competitions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Casual Contests</h3>
                  <p className="text-muted-foreground text-sm">Channel Surfing, Rangoli, Painting, Photography, and more</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              <span className="text-primary font-semibold">Additional Events:</span> Singing, Short Film, Shipwreck, Creative Writing, Quizzes, Adzap, JAM, Mono-acting and Dancing competitions
            </p>
          </motion.div>

          {/* Editions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl font-bold mb-8 text-center text-foreground">Previous Editions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {editions.map((edition, index) => (
                <EditionCard key={edition.year} edition={edition} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 md:p-12 rounded-xl glass border border-primary/20"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                The Impact
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Over three glorious editions, Pradharshini has touched the lives of 12,500+ participants, united 80+ colleges, and distributed ₹22.5 lakhs in prize money. What started as a dream has blossomed into a movement—a celebration of talent, creativity, and the indomitable spirit of youth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">12,500+</p>
                  <p className="text-muted-foreground">Total Participants</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">135+</p>
                  <p className="text-muted-foreground">Total Events</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">₹22.5L</p>
                  <p className="text-muted-foreground">Prize Distribution</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photo Gallery Section - Automatic Slideshow */}
          <PhotoGalleryCarousel />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
