import { motion } from 'framer-motion';
import { Sparkles, Calendar, Briefcase, Code, Award, ChevronRight, Download, MapPin, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const stats = [
  { label: 'Years Experience', value: '5+', icon: Calendar },
  { label: 'Projects Delivered', value: '40+', icon: Briefcase },
  { label: 'Technologies', value: '15+', icon: Code },
  { label: 'Client Satisfaction', value: '98%', icon: Award },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-0 pb-8 lg:pb-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="section-label mb-6 sm:mb-8 text-xs sm:text-sm"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>SENIOR FULL STACK ENGINEER</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight">
              <span className="text-gradient">NEELAM G.</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-primary mb-6 sm:mb-8"
            >
              Enterprise Software Architect
            </motion.div>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Crafting exceptional digital experiences with 5+ years of expertise in modern web technologies. 
              Specialized in building scalable, performant applications with beautiful interfaces.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card-glass p-3 sm:p-4 lg:p-6"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 text-primary mb-1 sm:mb-2">
                    <stat.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold">{stat.value}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
            >
              <motion.button
                onClick={() => onNavigate('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-3"
              >
                View Projects
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glass flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-3"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl sm:rounded-3xl blur-2xl opacity-20 animate-pulse-glow" />

              {/* Profile Card */}
              <div className="relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                {/* Profile Image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="mb-4 sm:mb-6"
                >
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                    <img
                      src="https://tekkon.com.au/wp-content/uploads/2020/09/Neelam-474x606.jpg"
                      alt="Neelam G."
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Profile Info */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Senior Engineer</h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3 sm:mb-4">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Available Worldwide</span>
                  </div>

                  {/* Available Badge */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-glow-emerald/10 border border-glow-emerald/30 rounded-full mb-4 sm:mb-6">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-glow-emerald" />
                    <span className="text-xs sm:text-sm font-medium text-glow-emerald">Available for Projects</span>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <div className="text-center p-3 glass rounded-xl">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">40+</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center p-3 glass rounded-xl">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">5+</div>
                      <div className="text-xs text-muted-foreground">Years Exp</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative rings - Hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-20 lg:w-24 h-20 lg:h-24 border-2 border-primary/20 rounded-full animate-rotate-slow" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-16 lg:w-20 h-16 lg:h-20 border-2 border-accent/20 rounded-full animate-rotate-slow-reverse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
