import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll notify you when Pradharshini goes live.",
      });
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(35 85% 50% / 0.5) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(270 65% 55% / 0.4) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo and title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-cosmic-text">
              PRADHARSHINI
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Something extraordinary is coming
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-cosmic-text">Coming Soon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The 2026 edition of Pradharshini is being crafted with meticulous care. Prepare yourself for a cultural extravaganza like never before.
          </p>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-12 max-w-md mx-auto"
        >
          <p className="text-muted-foreground mb-4">
            Get notified when we launch
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 glass border-primary/30"
              disabled={subscribed}
              data-testid="coming-soon-email-input"
            />
            <Button
              type="submit"
              className="font-display text-sm tracking-wider"
              disabled={subscribed}
              data-testid="coming-soon-subscribe-button"
            >
              {subscribed ? "✓ Subscribed" : "Notify Me"}
            </Button>
          </form>
        </motion.div>

        {/* Countdown or feature preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          <div className="p-4 glass border border-primary/20 rounded-lg">
            <p className="text-2xl font-bold text-primary">50+</p>
            <p className="text-xs text-muted-foreground mt-2">Events</p>
          </div>
          <div className="p-4 glass border border-primary/20 rounded-lg">
            <p className="text-2xl font-bold text-primary">5000+</p>
            <p className="text-xs text-muted-foreground mt-2">Participants</p>
          </div>
          <div className="p-4 glass border border-primary/20 rounded-lg">
            <p className="text-2xl font-bold text-primary">Jan 30-Feb 1</p>
            <p className="text-xs text-muted-foreground mt-2">2026</p>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-sm text-muted-foreground"
        >
          <p>
            Follow us on{" "}
            <a
              href="https://instagram.com/medrenaline.kmc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              data-testid="coming-soon-instagram-link"
            >
              Instagram
            </a>
            {" "}for updates
          </p>
        </motion.div>
      </div>
    </div>
  );
}
