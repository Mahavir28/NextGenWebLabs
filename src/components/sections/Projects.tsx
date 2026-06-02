import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const projects = [
  {
    title: 'TheTravelWays',
    category: 'Business Website',
    desc: 'A full-featured travel agency website with destination showcases, tour packages, and seamless booking experience.',
    color: '#8B5CF6',
    bg: 'from-violet/40 via-blue/20 to-transparent',
    accent: '#8B5CF6',
  },
  {
    title: 'Car Rental Website',
    category: 'E-Commerce',
    desc: 'Modern car rental platform with real-time availability, fleet showcase, and frictionless online reservation flow.',
    color: '#06B6D4',
    bg: 'from-accent/40 via-violet/20 to-transparent',
    accent: '#06B6D4',
  },
  {
    title: 'Business Landing Page',
    category: 'Landing Page',
    desc: 'High-converting landing page designed to capture leads and communicate brand value with precision.',
    color: '#3B82F6',
    bg: 'from-blue/40 via-accent/20 to-transparent',
    accent: '#3B82F6',
  },
  {
    title: 'Portfolio Website',
    category: 'Portfolio',
    desc: 'Elegant personal portfolio with project showcases, smooth animations, and a strong personal brand identity.',
    color: '#8B5CF6',
    bg: 'from-violet/40 via-blue/10 to-transparent',
    accent: '#8B5CF6',
  },
]

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

          {/* Mock browser UI */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-52 h-36 rounded-xl flex flex-col gap-2 p-4 overflow-hidden"
              style={{
                background: 'rgba(8,8,8,0.75)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${project.color}25`,
              }}
              initial={{ y: 8, opacity: 0.7 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                <div className="w-2 h-2 rounded-full bg-green-400/50" />
              </div>
              <div className="h-2 rounded-full w-3/4" style={{ background: `${project.color}30` }} />
              <div className="h-2 rounded-full w-1/2" style={{ background: `${project.color}20` }} />
              <div className="h-10 rounded-lg mt-1" style={{ background: `${project.color}25` }} />
              <div className="flex gap-2">
                <div className="h-2 rounded-full flex-1" style={{ background: `${project.color}15` }} />
                <div className="h-2 rounded-full w-1/3" style={{ background: `${project.color}15` }} />
              </div>
            </motion.div>
          </div>

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
          <p className="text-sm text-white/40 leading-relaxed mb-5 group-hover:text-white/65 transition-colors duration-300">
            {project.desc}
          </p>

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
            View Project
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
