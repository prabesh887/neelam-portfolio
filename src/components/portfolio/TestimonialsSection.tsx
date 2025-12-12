import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    company: 'TechFlow Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Exceptional work on our ERP system. Delivered ahead of schedule with outstanding code quality. The attention to detail and technical expertise exceeded our expectations.',
  },
  {
    name: 'Michael Roberts',
    role: 'Founder',
    company: 'FinanceHub',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The trading platform built for us handles millions of transactions daily without a hitch. Incredible performance optimization and scalability.',
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'HealthFirst',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Professional, communicative, and highly skilled. Our healthcare platform is now serving thousands of patients securely and efficiently.',
  },
  {
    name: 'David Kim',
    role: 'Engineering Lead',
    company: 'IoT Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Transformed our IoT infrastructure completely. The real-time monitoring system is incredibly robust and user-friendly.',
  },
  {
    name: 'Lisa Anderson',
    role: 'CEO',
    company: 'ShopEasy',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Our e-commerce platform saw a 200% increase in conversion after the redesign. Best investment we have made for our business.',
  },
  {
    name: 'James Mitchell',
    role: 'Data Director',
    company: 'AnalyticsPro',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The analytics dashboard provides insights we never had before. Complex data visualizations made simple and beautiful.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-glow-amber fill-glow-amber' : 'text-muted-foreground/30'
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

              {/* Card */}
              <div className="relative glass rounded-xl sm:rounded-2xl p-5 sm:p-6 h-full flex flex-col group-hover:border-primary/30 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary/60 truncate">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-3">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Text */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '5.0', label: 'Average Rating' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
