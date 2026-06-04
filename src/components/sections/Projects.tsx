import { motion } from 'framer-motion'
import { ArrowUpRight, Monitor, Tablet, Smartphone } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const projects = [
  {
    title: 'TheTravelWays',
    category: 'Business Website',
    overview: 'Full-featured travel agency website for a growing tourism brand.',
    problem: 'The client had no online presence, losing customers to competitors with modern websites.',
    solution: 'Built a destination-rich website with tour packages, photo galleries, and a booking inquiry flow.',
    features: ['Destination showcases', 'Tour package listings', 'Booking inquiry form', 'Mobile-first design'],
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    results: '3× increase in inquiry volume within 30 days of launch.',
    color: '#8B5CF6',
    bg: 'from-violet/40 via-blue/20 to-transparent',
    accent: '#8B5CF6',
  },
  {
    title: 'Car Rental Website',
    category: 'E-Commerce',
    overview: 'Modern car rental platform for a regional fleet operator.',
    problem: 'Manual phone bookings caused scheduling conflicts and lost revenue during peak hours.',
    solution: 'Delivered a real-time fleet showcase with online reservation flow and availability management.',
    features: ['Fleet showcase with filters', 'Real-time availability', 'Online reservation system', 'Admin dashboard'],
    tech: ['React', 'TypeScript', 'Node.js'],
    results: '60% reduction in manual bookings; online reservations now handle peak demand.',
    color: '#06B6D4',
    bg: 'from-accent/40 via-violet/20 to-transparent',
    accent: '#06B6D4',
  },
  {
    title: 'Business Landing Page',
    category: 'Landing Page',
    overview: 'High-converting landing page for a B2B service company.',
    problem: 'Existing page had a 78% bounce rate with near-zero lead conversion.',
    solution: 'Redesigned with clear value proposition, trust signals, and optimized CTA placement.',
    features: ['Above-fold CTA', 'Social proof section', 'Lead capture form', 'Fast load time'],
    tech: ['React', 'Tailwind CSS', 'Vite'],
    results: 'Bounce rate dropped to 42%; lead conversions increased by 4×.',
    color: '#3B82F6',
    bg: 'from-blue/40 via-accent/20 to-transparent',
    accent: '#3B82F6',
  },
  {
    title: 'Portfolio Website',
    category: 'Portfolio',
    overview: 'Elegant personal portfolio for a freelance creative professional.',
    problem: 'Client was losing premium project opportunities due to an outdated, unimpressive portfolio.',
    solution: 'Built a sleek, animated portfolio with project case studies and a strong personal brand identity.',
    features: ['Animated project showcases', 'Dark premium design', 'Contact integration', 'SEO optimized'],
    tech: ['React', 'Framer Motion', 'TypeScript'],
    results: 'Client landed 2 high-value contracts within 3 weeks of going live.',
    color: '#8B5CF6',
    bg: 'from-violet/40 via-blue/10 to-transparent',
    accent: '#8B5CF6',
  },
]

function DevicePreviews({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3">
      {/* Desktop */}
      <motion.div
        className="flex flex-col items-center gap-1"
        initial={{ y: 8, opacity: 0.6 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="w-36 h-24 rounded-lg overflow-hidden flex flex-col"
          style={{ background: 'rgba(8,8,8,0.85)', border: `1px solid ${color}25` }}
        >
          <div className="flex gap-1 px-2 py-1.5 border-b" style={{ borderColor: `${color}15` }}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
          </div>
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            <div className="h-1.5 rounded-full w-3/4" style={{ background: `${color}35` }} />
            <div className="h-1.5 rounded-full w-1/2" style={{ background: `${color}20` }} />
            <div className="h-6 rounded mt-0.5" style={{ background: `${color}20` }} />
            <div className="flex gap-1">
              <div className="h-1 rounded-full flex-1" style={{ background: `${color}15` }} />
              <div className="h-1 rounded-full w-1/3" style={{ background: `${color}15` }} />
            </div>
          </div>
        </div>
        <Monitor size={10} style={{ color: `${color}60` }} />
      </motion.div>

      {/* Tablet */}
      <motion.div
        className="flex flex-col items-center gap-1"
        initial={{ y: 12, opacity: 0.5 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <div
          className="w-20 h-28 rounded-lg overflow-hidden flex flex-col"
          style={{ background: 'rgba(8,8,8,0.85)', border: `1px solid ${color}25` }}
        >
          <div className="flex-1 p-1.5 flex flex-col gap-1">
            <div className="h-1.5 rounded-full w-full" style={{ background: `${color}30` }} />
            <div className="h-8 rounded" style={{ background: `${color}20` }} />
            <div className="h-1 rounded-full w-2/3" style={{ background: `${color}15` }} />
            <div className="h-1 rounded-full w-1/2" style={{ background: `${color}15` }} />
            <div className="h-5 rounded mt-0.5" style={{ background: `${color}18` }} />
          </div>
          <div className="py-1 flex justify-center">
            <div className="w-3 h-3 rounded-full border" style={{ borderColor: `${color}30` }} />
          </div>
        </div>
        <Tablet size={10} style={{ color: `${color}60` }} />
      </motion.div>

      {/* Mobile */}
      <motion.div
        className="flex flex-col items-center gap-1"
        initial={{ y: 16, opacity: 0.4 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div
          className="w-12 h-24 rounded-xl overflow-hidden flex flex-col"
          style={{ background: 'rgba(8,8,8,0.85)', border: `1px solid ${color}25` }}
        >
          <div className="py-1 flex justify-center">
            <div className="w-4 h-0.5 rounded-full" style={{ background: `${color}30` }} />
          </div>
          <div className="flex-1 p-1 flex flex-col gap-1">
            <div className="h-1 rounded-full w-full" style={{ background: `${color}30` }} />
            <div className="h-5 rounded" style={{ background: `${color}20` }} />
            <div className="h-1 rounded-full w-3/4" style={{ background: `${color}15` }} />
            <div className="h-1 rounded-full w-1/2" style={{ background: `${color}15` }} />
            <div className="h-4 rounded" style={{ background: `${color}18` }} />
          </div>
          <div className="py-1 flex justify-center">
            <div className="w-2 h-2 rounded-full border" style={{ borderColor: `${color}30` }} />
          </div>
        </div>
        <Smartphone size={10} style={{ color: `${color}60` }} />
      </motion.div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <Reveal delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
      <motion.div
        className="group relative rounded-2xl overflow-hidden cursor-pointer h-full"
        style={{
          background: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid rgba(255,255,255,0.06)`,
        }}
        whileHover={{
          scale: 1.02,
          y: -6,
          transition: { duration: 0.4, ease: 'easeOut' },
        }}
      >
        {/* Image / Visual area */}
        <div className="relative h-60 overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.bg}`}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(${project.color}30 1px, transparent 1px), linear-gradient(90deg, ${project.color}30 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />

          {/* Device previews */}
          <DevicePreviews color={project.color} />

          {/* Hover glow overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.color}25 0%, transparent 65%)`,
            }}
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}18`, border: `1px solid ${project.color}35` }}
            >
              {project.category}
            </span>
          </div>

          {/* Arrow icon */}
          <motion.div
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight size={15} style={{ color: project.color }} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed mb-4 group-hover:text-white/65 transition-colors duration-300">
            {project.overview}
          </p>

          {/* Case study details — visible on hover */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out">
            <div className="space-y-3 mb-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: project.color }}>Problem</span>
                <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: project.color }}>Solution</span>
                <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: project.color }}>Results</span>
                <p className="text-xs text-white/60 mt-0.5 leading-relaxed font-medium">{project.results}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300"
            style={{
              color: project.color,
              background: `${project.color}12`,
              border: `1px solid ${project.color}30`,
            }}
            whileHover={{
              background: `${project.color}22`,
              scale: 1.03,
            }}
          >
            View Case Study
            <ArrowUpRight size={12} />
          </motion.button>
        </div>

        {/* Bottom glow line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}90, transparent)` }}
        />

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `0 0 0 1px ${project.color}30, 0 16px 60px ${project.color}15`,
          }}
        />
      </motion.div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

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
            A selection of websites and experiences we've crafted for real businesses.
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
