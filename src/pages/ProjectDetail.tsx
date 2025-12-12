import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, LineChart, Shield, Zap, Briefcase, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { Background } from '@/components/portfolio/Background';

const projects = [
  {
    id: 'erp-system',
    title: 'ERP System',
    description: 'Enterprise Resource Planning with real-time analytics',
    fullDescription: 'A comprehensive Enterprise Resource Planning system designed for large-scale organizations. Features include inventory management, HR modules, financial reporting, and real-time analytics dashboards.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    gradient: 'from-primary to-accent',
    icon: Globe,
    features: [
      'Real-time inventory tracking',
      'Automated financial reporting',
      'HR management module',
      'Multi-tenant architecture',
      'Role-based access control',
      'Custom dashboard builder',
    ],
    challenges: 'Implementing real-time synchronization across multiple modules while maintaining data consistency and performance.',
    solution: 'Used Redis for caching and pub/sub messaging, implemented optimistic updates with conflict resolution.',
    results: '40% reduction in operational costs, 99.9% uptime achieved.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    ],
  },
  {
    id: 'trading-platform',
    title: 'Trading Platform',
    description: 'High-frequency trading with real-time data processing',
    fullDescription: 'A sophisticated trading platform capable of processing millions of transactions per second. Built with low-latency architecture for institutional traders.',
    tech: ['Python', 'Go', 'Kafka', 'AWS'],
    gradient: 'from-glow-emerald to-primary',
    icon: LineChart,
    features: [
      'Sub-millisecond execution',
      'Real-time market data feeds',
      'Advanced charting tools',
      'Risk management system',
      'Algorithmic trading support',
      'Multi-asset class trading',
    ],
    challenges: 'Achieving sub-millisecond latency while processing millions of concurrent data streams.',
    solution: 'Implemented Go-based microservices with Kafka for event streaming and custom memory pooling.',
    results: '10x improvement in execution speed, handling 5M+ transactions daily.',
    images: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=500&fit=crop',
    ],
  },
  {
    id: 'healthcare-suite',
    title: 'Healthcare Suite',
    description: 'HIPAA-compliant patient management system',
    fullDescription: 'A fully HIPAA-compliant healthcare management platform serving hospitals and clinics. Includes patient records, appointment scheduling, and telemedicine features.',
    tech: ['Next.js', 'GraphQL', 'MongoDB', 'Azure'],
    gradient: 'from-glow-purple to-glow-rose',
    icon: Shield,
    features: [
      'Electronic Health Records',
      'Telemedicine integration',
      'Appointment scheduling',
      'Prescription management',
      'Insurance verification',
      'HIPAA audit logging',
    ],
    challenges: 'Ensuring complete HIPAA compliance while providing seamless user experience.',
    solution: 'Implemented end-to-end encryption, detailed audit logging, and role-based data access.',
    results: 'Successfully passed HIPAA audit, serving 50,000+ patients.',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    ],
  },
  {
    id: 'iot-management',
    title: 'IoT Management',
    description: 'Real-time tracking for 10K+ connected devices',
    fullDescription: 'An industrial IoT platform for managing and monitoring thousands of connected devices. Features predictive maintenance, real-time alerts, and comprehensive analytics.',
    tech: ['React Native', 'Node.js', 'MQTT', 'AWS IoT'],
    gradient: 'from-glow-amber to-glow-rose',
    icon: Zap,
    features: [
      'Real-time device monitoring',
      'Predictive maintenance alerts',
      'Geolocation tracking',
      'Custom alert rules',
      'Device fleet management',
      'Historical data analytics',
    ],
    challenges: 'Managing bidirectional communication with 10,000+ devices while maintaining low latency.',
    solution: 'Implemented MQTT protocol with AWS IoT Core for scalable device communication.',
    results: '30% reduction in equipment downtime through predictive maintenance.',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    ],
  },
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'Scalable platform with payment integration',
    fullDescription: 'A modern e-commerce platform built for high-traffic retail operations. Includes multi-vendor support, advanced inventory management, and seamless payment processing.',
    tech: ['Next.js', 'Stripe', 'Redis', 'Docker'],
    gradient: 'from-accent to-glow-purple',
    icon: Briefcase,
    features: [
      'Multi-vendor marketplace',
      'Stripe payment integration',
      'Inventory management',
      'Order tracking system',
      'Customer analytics',
      'A/B testing framework',
    ],
    challenges: 'Handling traffic spikes during sales events while maintaining checkout reliability.',
    solution: 'Implemented auto-scaling with Docker containers and Redis-based cart caching.',
    results: '200% increase in conversion rate, 99.99% checkout success rate.',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
    ],
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform',
    fullDescription: 'A powerful analytics platform providing real-time insights through beautiful visualizations. Supports multiple data sources and custom report generation.',
    tech: ['React', 'D3.js', 'WebSocket', 'MongoDB'],
    gradient: 'from-glow-amber to-primary',
    icon: LineChart,
    features: [
      'Real-time data streaming',
      'Custom chart builder',
      'Multiple data connectors',
      'Automated reporting',
      'Collaborative dashboards',
      'Export to multiple formats',
    ],
    challenges: 'Rendering complex visualizations with real-time updates without performance degradation.',
    solution: 'Used D3.js with WebGL acceleration and WebSocket for efficient data streaming.',
    results: 'Processing 100M+ data points daily with sub-second visualization updates.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    ],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return home
          </button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen">
      <Background />
      
      <main className="relative z-10 pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
                  {project.title}
                </h1>
                <p className="text-muted-foreground mt-1">{project.description}</p>
              </div>
            </div>
            
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-primary/80 border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 mb-10"
          >
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden glass"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            ))}
          </motion.div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Overview */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-lg font-bold mb-3 text-glow-rose">Challenge</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-lg font-bold mb-3 text-glow-emerald">Solution</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-3">Results</h2>
                <p className="text-primary font-medium">{project.results}</p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Features */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-glow-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="glass rounded-2xl p-6 space-y-3">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </button>
                <button className="w-full py-3 rounded-xl glass glass-hover font-medium flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  View Source Code
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
