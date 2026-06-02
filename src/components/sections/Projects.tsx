import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const projects = [
  {
    title: 'LuxeCommerce',
    category: 'E-Commerce',
    desc: 'A premium fashion e-commerce platform with immersive product experiences and seamless checkout.',
    tags: ['React', 'TypeScript', 'Stripe'],
    color: '#8B5CF6',
    bg: 'from-violet/30 via-blue/20 to-transparent',
    stats: '340% conversion increase',
  },
  {
    title: 'ArchStudio',
    category: 'Portfolio',
    desc: 'Award-winning architecture firm portfolio with cinematic project showcases and 3D walkthroughs.',
    tags: ['Next.js', 'GSAP', 'Three.js'],
    color: '#06B6D4',
    bg: 'from-accent/30 via-violet/20 to-transparent',
    stats: '5x more client inquiries',
  },
  {
    title: 'FinanceFlow',
    category: 'Business Website',
    desc: 'A fintech startup website that communicates trust, security, and innovation at every scroll.',
    tags: ['React', 'Framer Motion', 'TailwindCSS'],
    color: '#3B82F6',
    bg: 'from-blue/30 via-accent/20 to-transparent',
    stats: '2.8x lead generation',
  },
  {
    title: 'NovaSaaS',
    category: 'Landing Page',
    desc: 'High-converting SaaS landing page with interactive demos and social proof that drives signups.',
    tags: ['React', 'TypeScript', 'Lottie'],
    color: '#8B5CF6',
    bg: 'from-violet/30 via-accent/20 to-transparent',
    stats: '68% signup rate',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <Reveal delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
      <motion.div
        className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-card cursor-pointer"
        whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: 'easeOut' } }}
      >
        {/* Image area */}
        <div className="relative h-64 overflow-hidden">
          {/* Gradient placeholder */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.bg}`}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Grid pattern inside card */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(${project.color}22 1px, transparent 1px), linear-gradient(90deg, ${project.color}22 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          {/* Floating mock UI elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-48 h-32 rounded-xl glass border border-white/10 flex flex-col gap-2 p-4"
              initial={{ y: 10, opacity: 0.6 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                <div className="w-2 h-2 rounded-full bg-green-400/60" />
              </div>
              <div className="h-2 rounded bg-white/10 w-3/4" />
              <div className="h-2 rounded bg-white/10 w-1/2" />
              <div className="h-8 rounded-lg mt-1" style={{ background: `${project.color}33` }} />
            </motion.div>
          </div>

          {/* Glow overlay on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.color}20 0%, transparent 70%)`,
            }}
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}15` }}
            >
              {project.category}
            </span>
          </div>

          {/* Arrow icon */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight size={14} className="text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <ExternalLink size={16} className="text-white/20 group-hover:text-white/60 transition-colors mt-1" />
          </div>
          <p className="text-sm text-white/40 leading-relaxed mb-4 group-hover:text-white/60 transition-colors">
            {project.desc}
          </p>

          {/* Stats */}
          <div
            className="text-xs font-semibold mb-4 px-3 py-1.5 rounded-full inline-block"
            style={{ color: project.color, background: `${project.color}15` }}
          >
            ↑ {project.stats}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md text-xs text-white/40 border border-white/[0.06] bg-white/[0.02]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom glow line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />
      </motion.div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 text-xs text-accent mb-6">
            Our Work
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-tight mb-4">
            Projects That{' '}
            <span className="text-gradient">Speak Results</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Every project is a story of transformation — from ordinary to extraordinary.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
