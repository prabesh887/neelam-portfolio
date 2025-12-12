import { motion } from "framer-motion";
import {
  Building,
  LineChart,
  Cpu,
  CheckCircle,
  GitCommit,
  GitBranch,
} from "lucide-react";

const experiences = [
  {
    role: "Lead Full Stack Engineer",
    company: "TechCorp Solutions",
    period: "2021 - Present",
    year: "2021",
    description:
      "Leading a team of 8 developers in building enterprise-grade applications.",
    fullDescription:
      "Architected and implemented microservices that serve 2M+ monthly active users. Mentored junior developers and established coding standards across the organization.",
    achievements: [
      "Scaled infrastructure to handle 10x traffic growth",
      "Reduced system latency by 60%",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    icon: Building,
    gradient: "from-primary to-accent",
    commitHash: "a3f2c1d",
  },
  {
    role: "Senior Backend Developer",
    company: "Innovate Digital",
    period: "2019 - 2021",
    year: "2019",
    description:
      "Developed and maintained backend systems for financial applications.",
    fullDescription:
      "Built RESTful APIs and integrated with third-party payment systems. Designed secure transaction processing pipelines handling millions of dollars daily.",
    achievements: [
      "Designed high-availability database architecture",
      "Implemented real-time data processing systems",
      "Achieved 99.9% uptime SLA",
    ],
    technologies: ["Python", "Django", "Redis", "MongoDB", "Kubernetes"],
    icon: LineChart,
    gradient: "from-glow-emerald to-primary",
    commitHash: "b7e4f2a",
  },
  {
    role: "Full Stack Developer",
    company: "StartUp Ventures",
    period: "2017 - 2019",
    year: "2017",
    description:
      "Built MVP products from scratch and scaled them to production.",
    fullDescription:
      "Worked across the entire stack from frontend to infrastructure. Collaborated directly with founders to define product roadmaps and technical architecture.",
    achievements: [
      "Built 5 production applications from ground up",
      "Reduced server costs by 40% through optimization",
      "Implemented automated testing achieving 95% coverage",
    ],
    technologies: ["Vue.js", "Express", "MySQL", "Firebase", "GCP"],
    icon: Cpu,
    gradient: "from-glow-purple to-glow-rose",
    commitHash: "c9d1e8b",
  },
];

export function ExperienceSection() {
  return (
    <section id='experience' className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-center mb-10 sm:mb-16'
        >
          <div className='inline-flex items-center gap-2 sm:gap-4 mb-4'>
            <div className='w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent' />
            <span className='text-xs sm:text-sm font-medium text-primary uppercase tracking-wider'>
              Professional Journey
            </span>
            <div className='w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent' />
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
            Work Experience
          </h2>
          <p className='text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4'>
            Career timeline — git log of my professional commits
          </p>
        </motion.div>

        {/* Git-style header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='flex items-center gap-2 mb-6 text-muted-foreground'
        >
          <GitBranch className='w-4 h-4 text-primary' />
          <span className='text-xs sm:text-sm font-mono'>main</span>
          <span className='text-xs text-muted-foreground/50'>•</span>
          <span className='text-xs sm:text-sm font-mono text-muted-foreground/70'>
            {experiences.length} commits
          </span>
        </motion.div>

        {/* Timeline container */}
        <div className='relative'>
          {/* Main vertical timeline line */}
          <div className='absolute left-3 sm:left-6 top-0 bottom-0 w-0.5'>
            <div className='absolute inset-0 bg-gradient-to-b from-primary via-accent to-glow-purple opacity-30' />
            <motion.div
              className='absolute inset-0 bg-gradient-to-b from-primary via-accent to-glow-purple'
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Experience entries */}
          <div className='space-y-6 sm:space-y-8'>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15 }}
                className='relative pl-10 sm:pl-16'
              >
                {/* Year marker */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className='absolute -left-1 sm:left-0 top-0'
                >
                  <div className='flex items-center gap-2'>
                    <span className='text-[10px] sm:text-xs font-mono font-bold text-primary bg-background px-1.5 py-0.5 rounded border border-primary/30'>
                      {exp.year}
                    </span>
                  </div>
                </motion.div>

                {/* Git commit node */}
                <motion.div
                  className='absolute left-3 sm:left-4.5 top-8 z-10'
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg shadow-primary/30 flex items-center justify-center`}
                  >
                    <GitCommit className='w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-foreground' />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  className='group relative'
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`}
                  />

                  <div className='relative glass rounded-2xl p-4 sm:p-6 border border-white/5 group-hover:border-white/15 transition-all duration-300 overflow-hidden'>
                    {/* Gradient side border */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.gradient} opacity-60`}
                    />

                    {/* Commit hash header */}
                    <div className='flex items-center gap-2 mb-3 text-muted-foreground/60'>
                      <span className='font-mono text-[10px] sm:text-xs text-primary/70'>
                        commit {exp.commitHash}
                      </span>
                      <span className='text-[10px]'>•</span>
                      <span className='font-mono text-[10px] sm:text-xs'>
                        {exp.period}
                      </span>
                    </div>

                    {/* Header */}
                    <div className='flex items-start gap-3 mb-4'>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <exp.icon className='w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground' />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='text-lg sm:text-xl font-bold leading-tight mb-1'>
                          {exp.role}
                        </h3>
                        <div className='text-sm sm:text-base text-primary font-medium'>
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className='text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed'>
                      {exp.description}
                    </p>
                    <p className='text-xs sm:text-sm text-muted-foreground/80 mb-4 leading-relaxed'>
                      {exp.fullDescription}
                    </p>

                    {/* Achievements */}
                    <div className='space-y-2 mb-4'>
                      <span className='text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-wider'>
                        Key Achievements
                      </span>
                      <div className='space-y-1.5'>
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className='flex items-start gap-2'
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                          >
                            <CheckCircle className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-glow-emerald mt-0.5 flex-shrink-0' />
                            <span className='text-xs sm:text-sm text-muted-foreground'>
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className='space-y-2'>
                      <span className='text-[10px] sm:text-xs font-mono text-primary/70 uppercase tracking-wider'>
                        Tech Stack
                      </span>
                      <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.03 + 0.4 }}
                            className={`text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full bg-gradient-to-r ${exp.gradient} bg-opacity-10 text-foreground/90 border border-white/10 font-mono`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* End of timeline marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className='relative pl-10 sm:pl-16 pt-6'
          >
            <div className='absolute left-3 sm:left-4.5 top-6 z-10'>
              <div className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-muted/50 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center'>
                <div className='w-1.5 h-1.5 rounded-full bg-muted-foreground/50' />
              </div>
            </div>
            <div className='text-xs sm:text-sm font-mono text-muted-foreground/50 italic'>
              // More commits coming soon...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
