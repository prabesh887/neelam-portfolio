import { motion } from 'framer-motion';
import { Terminal, Linkedin, Github, Mail, Home, User, Folder, Code, Phone } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const navItems = [
  { id: 'home', icon: Home },
  { id: 'experience', icon: User },
  { id: 'projects', icon: Folder },
  { id: 'skills', icon: Code },
  { id: 'contact', icon: Phone },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: 'mailto:sales@tekkon.com.au', label: 'Email' },
];

export function LeftSidebar({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-8 top-8 z-50 hidden lg:block"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('home')}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-xl opacity-50 group-hover:opacity-80 transition-opacity rounded-2xl" />
          <div className="relative w-14 h-14 rounded-2xl glass flex items-center justify-center glow-primary">
            <Terminal className="w-7 h-7 text-primary" />
          </div>
        </motion.button>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary"
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function RightSidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col gap-6 items-center">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <div
              className={`nav-dot ${
                activeSection === item.id ? 'nav-dot-active' : 'nav-dot-inactive'
              }`}
            />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="glass rounded-lg px-3 py-2 whitespace-nowrap">
                <span className="text-xs font-medium text-primary">
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export function MobileNav({ activeSection, onNavigate, isScrolled }: SidebarProps & { isScrolled: boolean }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
        isScrolled ? 'glass border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center glow-primary">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base sm:text-lg text-gradient">Neelam G.</span>
          </motion.button>

          <div className="flex items-center gap-2 sm:gap-4">
            {['home', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`text-xs sm:text-sm font-medium transition-colors px-2 py-1 rounded-lg ${
                  activeSection === item
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
