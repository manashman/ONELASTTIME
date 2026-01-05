import { motion } from "framer-motion";
import jaypeeLogo from "@assets/image_1767617376242.png";

const sponsors = Array(10).fill({ name: "Jaypee", logo: jaypeeLogo });

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
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Loop through sponsors with enough duplication for seamless scroll */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
