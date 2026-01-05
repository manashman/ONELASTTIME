import { motion } from "framer-motion";

const sponsors = [
  { name: "Prad", logo: "/favicon.ico" },
  { name: "Sponsor 2", logo: "/favicon.ico" },
  { name: "Sponsor 3", logo: "/favicon.ico" },
  { name: "Sponsor 4", logo: "/favicon.ico" },
  { name: "Sponsor 5", logo: "/favicon.ico" },
  { name: "Sponsor 6", logo: "/favicon.ico" },
];

export function SponsorsSection() {
  return (
    <section className="py-16 overflow-hidden bg-background/50 border-t border-border/50">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="font-display text-3xl font-bold gradient-cosmic-text">Our Sponsors</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-12 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First set of sponsors */}
          {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
