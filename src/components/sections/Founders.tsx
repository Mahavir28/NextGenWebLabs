import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const founders = [
  {
    name: 'Mahavir Shah',
    role: 'Co-Founder & Full Stack Developer',
    bio: 'Full-stack developer with a passion for building premium digital experiences. Specializes in React, TypeScript, and cloud infrastructure.',
    initials: 'MS',
    color: '#8B5CF6',
    gradient: 'from-violet/30 to-blue/20',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    name: 'Krishna',
    role: 'Co-Founder',
    bio: 'Drives business growth and client relationships. Focused on project delivery, partnerships, and helping businesses succeed online.',
    initials: 'K',
    color: '#06B6D4',
    gradient: 'from-accent/30 to-violet/20',
    skills: ['Business Development', 'Client Relations', 'Project Management'],
  },
]

export function Founders() {
  return (
    <section id="team" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/20 text-xs text-violet mb-6">
            The Team
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-tight mb-4">
            Meet The <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            The people behind NextGen Web Labs, passionate about building modern websites and digital experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.15} direction={i === 0 ? 'left' : 'right'}>
              <motion.div
                className="group relative rounded-2xl border border-white/[0.06] bg-card overflow-hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${founder.color}15 0%, transparent 70%)`,
                    boxShadow: `0 0 40px ${founder.color}10`,
                  }}
                />

                {/* Top gradient area */}
                <div className={`relative h-40 bg-gradient-to-br ${founder.gradient} overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(${founder.color}22 1px, transparent 1px), linear-gradient(90deg, ${founder.color}22 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Avatar */}
                  <div className="absolute bottom-0 left-6 translate-y-1/2">
                    <motion.div
                      className="w-20 h-20 rounded-2xl border-4 border-card flex items-center justify-center text-2xl font-black"
                      style={{ background: `linear-gradient(135deg, ${founder.color}, #3B82F6)` }}
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      {founder.initials}
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 pt-14 px-6 pb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
                  <p className="text-sm mb-3" style={{ color: founder.color }}>{founder.role}</p>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">{founder.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs border"
                        style={{ borderColor: `${founder.color}30`, color: founder.color, background: `${founder.color}10` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="flex gap-3">
                    <motion.a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>

                {/* Bottom border glow */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${founder.color}, transparent)` }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
