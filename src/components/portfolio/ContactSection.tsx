import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Calendar, Send, CheckCircle, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Mail, label: 'Email', href: 'mailto:sales@tekkon.com.au' },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
              Get In Touch
            </span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Let's Build Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to bring your next project to life? Let's discuss how we can create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl sm:rounded-3xl blur-2xl opacity-10" />
            
            <div className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-glow-emerald/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-glow-emerald" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 h-11 sm:h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 h-11 sm:h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 min-h-[120px] sm:min-h-[140px] resize-none"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Quick Actions */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-glow-purple rounded-2xl sm:rounded-3xl blur-2xl opacity-10" />
              
              <div className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:sales@tekkon.com.au"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold group-hover:text-primary transition-colors">Email Me</div>
                      <div className="text-sm text-muted-foreground truncate">sales@tekkon.com.au</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-glow-emerald to-primary flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold group-hover:text-primary transition-colors">Schedule a Call</div>
                      <div className="text-sm text-muted-foreground">Book a 30-min consultation</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative flex-1">
              <div className="absolute inset-0 bg-gradient-to-r from-glow-purple to-glow-rose rounded-2xl sm:rounded-3xl blur-2xl opacity-10" />
              
              <div className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Connect With Me</h3>
                
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 p-4 glass glass-hover rounded-xl text-muted-foreground hover:text-primary flex-1 min-w-[140px]"
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Availability Badge */}
                <div className="mt-6 p-4 rounded-xl bg-glow-emerald/10 border border-glow-emerald/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-glow-emerald animate-pulse" />
                    <span className="text-sm font-medium text-glow-emerald">Currently available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}