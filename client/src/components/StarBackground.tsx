import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  duration: number;
}

interface TimeRipple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function StarBackground() {
  const [particles, setParticles] = useState<TimeParticle[]>([]);
  const [ripples, setRipples] = useState<TimeRipple[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Generate time particles
  useEffect(() => {
    const generatedParticles: TimeParticle[] = [];
    for (let i = 0; i < 60; i++) {
      generatedParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        animationDelay: Math.random() * 8,
        duration: Math.random() * 4 + 6,
      });
    }
    setParticles(generatedParticles);
  }, []);

  // Create ripples from random positions
  useEffect(() => {
    const interval = setInterval(() => {
      const newRipple: TimeRipple = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 200 + 100,
      };
      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep time background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(30,25%,5%)] via-[hsl(260,20%,8%)] to-[hsl(30,20%,7%)]" />

      {/* Central time vortex - interactive with mouse */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(40 85% 55% / 0.4) 0%, hsl(260 40% 50% / 0.2) 30%, transparent 70%)",
          filter: "blur(100px)",
          left: mousePos.x - 500,
          top: mousePos.y - 500,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Temporal distortion fields */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, hsl(260 50% 45% / 0.3) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full opacity-12"
        style={{
          background:
            "radial-gradient(circle, hsl(40 80% 55% / 0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      {/* Time particles flowing through space */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `hsl(${40 + Math.random() * 20} 80% 55%)`,
            boxShadow: `0 0 ${particle.size * 4}px hsl(40 80% 55% / 0.5)`,
          }}
          animate={{
            y: [0, -300, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Time ripples expanding outward */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full border"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            borderColor: "hsl(40 80% 55% / 0.6)",
            width: ripple.size,
            height: ripple.size,
            marginLeft: -ripple.size / 2,
            marginTop: -ripple.size / 2,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}

      {/* Rotating clock mechanism - gears */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ pointerEvents: "none" }}
      >
        {/* Large outer gear - 15% from left, 20% from top */}
        <g>
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "15% 20%", originX: "15%", originY: "20%" }}
          >
            <circle cx="15%" cy="20%" r="120" fill="none" stroke="hsl(40 80% 55%)" strokeWidth="2" opacity="0.4" />
            <circle cx="15%" cy="20%" r="100" fill="none" stroke="hsl(40 80% 55%)" strokeWidth="1" opacity="0.2" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const x1 = 15 + 120 * Math.cos(angle);
              const y1 = 20 + 120 * Math.sin(angle);
              const x2 = 15 + 100 * Math.cos(angle);
              const y2 = 20 + 100 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="hsl(40 80% 55%)"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
              );
            })}
          </motion.g>
        </g>

        {/* Smaller gear - 85% from left, 75% from top */}
        <g>
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "85% 75%", originX: "85%", originY: "75%" }}
          >
            <circle cx="85%" cy="75%" r="100" fill="none" stroke="hsl(260 40% 50%)" strokeWidth="2" opacity="0.4" />
            <circle cx="85%" cy="75%" r="80" fill="none" stroke="hsl(260 40% 50%)" strokeWidth="1" opacity="0.2" />
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i / 10) * Math.PI * 2;
              const x1 = 85 + 100 * Math.cos(angle);
              const y1 = 75 + 100 * Math.sin(angle);
              const x2 = 85 + 80 * Math.cos(angle);
              const y2 = 75 + 80 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="hsl(260 40% 50%)"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
              );
            })}
          </motion.g>
        </g>

        {/* Timeline - horizontal time axis */}
        <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="hsl(40 80% 55%)" strokeWidth="1" opacity="0.15" />

        {/* Time markers along timeline */}
        {Array.from({ length: 8 }).map((_, i) => {
          const x = (i / 7) * 100;
          return (
            <g key={`marker-${i}`}>
              <line x1={`${x}%`} y1="47%" x2={`${x}%`} y2="53%" stroke="hsl(40 80% 55%)" strokeWidth="1.5" opacity="0.3" />
              <text
                x={`${x}%`}
                y="58%"
                textAnchor="middle"
                fill="hsl(40 80% 55%)"
                opacity="0.25"
                fontSize="12"
                fontFamily="monospace"
              >
                {2000 + i * 100}
              </text>
            </g>
          );
        })}

        {/* Hourglass imagery - subtle sand flowing */}
        <g opacity="0.1">
          <path
            d="M 10 15 L 15 30 L 10 30 Z M 15 15 L 10 30 L 15 30 Z"
            fill="none"
            stroke="hsl(35 70% 60%)"
            strokeWidth="0.5"
          />
          <line x1="10" y1="22" x2="15" y2="22" stroke="hsl(35 70% 60%)" strokeWidth="1" opacity="0.5" />
        </g>

        {/* Connecting lines - showing time flow */}
        <line x1="15%" y1="20%" x2="50%" y2="50%" stroke="hsl(40 80% 55%)" strokeWidth="0.8" opacity="0.1" />
        <line x1="85%" y1="75%" x2="50%" y2="50%" stroke="hsl(260 40% 50%)" strokeWidth="0.8" opacity="0.1" />
      </svg>

      {/* Pulsing temporal core at center */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(40 85% 60% / 0.3), transparent)",
          filter: "blur(30px)",
          marginLeft: "-48px",
          marginTop: "-48px",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
