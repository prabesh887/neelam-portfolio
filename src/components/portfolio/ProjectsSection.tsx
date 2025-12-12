import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, LineChart, Shield, Zap, Briefcase, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'erp-system',
    title: 'ERP System',
    description: 'Enterprise Resource Planning with real-time analytics',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    gradient: 'from-primary to-accent',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 'trading-platform',
    title: 'Trading Platform',
    description: 'High-frequency trading with real-time data processing',
    tech: ['Python', 'Go', 'Kafka', 'AWS'],
    gradient: 'from-glow-emerald to-primary',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
  },
  {
    id: 'healthcare-suite',
    title: 'Healthcare Suite',
    description: 'HIPAA-compliant patient management system',
    tech: ['Next.js', 'GraphQL', 'MongoDB', 'Azure'],
    gradient: 'from-glow-purple to-glow-rose',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
  },
  {
    id: 'iot-management',
    title: 'IoT Management',
    description: 'Real-time tracking for 10K+ connected devices',
    tech: ['React Native', 'Node.js', 'MQTT', 'AWS IoT'],
    gradient: 'from-glow-amber to-glow-rose',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
  },
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'Scalable platform with payment integration',
    tech: ['Next.js', 'Stripe', 'Redis', 'Docker'],
    gradient: 'from-accent to-glow-purple',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform',
    tech: ['React', 'D3.js', 'WebSocket', 'MongoDB'],
    gradient: 'from-glow-amber to-primary',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
];

export function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Enterprise solutions showcasing technical excellence and innovation
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500`} />

              {/* Card */}
              <div className="relative glass rounded-xl sm:rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-primary/30 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40`} />
                  {/* Icon overlay */}
                  <div className={`absolute top-3 left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                    <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1 p-5 sm:p-6 flex flex-col">

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-secondary/50 rounded-full text-[10px] sm:text-xs text-primary/80 border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto w-full py-2 sm:py-2.5 rounded-lg sm:rounded-xl glass glass-hover text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2"
                  >
                    View Case Study
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
