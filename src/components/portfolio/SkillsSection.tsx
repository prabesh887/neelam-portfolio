import { motion } from 'framer-motion';
import { Code, Server, Cloud, Shield } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const techLogos = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind', level: 88 },
      { name: 'Vue.js', level: 80 },
    ],
    icon: Code,
    gradient: 'from-primary to-accent',
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'Java', level: 82 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
    ],
    icon: Server,
    gradient: 'from-glow-purple to-glow-rose',
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 82 },
      { name: 'CI/CD', level: 92 },
      { name: 'Terraform', level: 78 },
    ],
    icon: Cloud,
    gradient: 'from-glow-emerald to-primary',
  },
  {
    category: 'Tools & Methods',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Agile', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Jira', level: 88 },
      { name: 'Webpack', level: 82 },
    ],
    icon: Shield,
    gradient: 'from-glow-amber to-glow-rose',
  },
];

export function SkillsSection() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive skill set covering full-stack development and cloud architecture
          </p>
        </motion.div>

        {/* Tech Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {techLogos.map((tech) => (
                <CarouselItem key={tech.name} className="pl-2 md:pl-4 basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/8">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 p-3 sm:p-4 glass rounded-xl cursor-pointer group"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300"
                    />
                    <span className="text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`} />

              <div className="relative glass glass-hover rounded-xl sm:rounded-2xl p-5 sm:p-6 h-full">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 sm:mb-5`}>
                  <category.icon className="w-5 h-5 sm:w-6 lg:w-7 sm:h-6 lg:h-7 text-primary-foreground" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">{category.category}</h3>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                        <span className="text-xs sm:text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-[10px] sm:text-xs text-primary/70">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                          className="skill-bar-fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
