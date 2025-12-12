import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function Background() {
  const particles = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: Math.random() > 0.7 ? 2 : 1,
    })), []
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-glow-purple/10 rounded-full blur-[80px]"
      />
      {/* Ruby accent orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[10%] right-[15%] w-[450px] h-[450px] bg-glow-ruby/30 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[15%] left-[10%] w-[380px] h-[380px] bg-glow-ruby/25 rounded-full blur-[90px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[50%] right-[40%] w-[250px] h-[250px] bg-glow-ruby/20 rounded-full blur-[70px]"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
