import { motion } from 'framer-motion'
import { Search, Map, Paintbrush, Code2, Rocket } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    desc: 'We deep-dive into your business, goals, audience, and competitors to build a strategic foundation.',
    color: '#8B5CF6',
    num: '01',
  },
  {
    icon: Map,
    title: 'Planning',
    desc: 'Sitemap, wireframes, and technical architecture are defined before a single line of code is written.',
    color: '#3B82F6',
    num: '02',
  },
  {
    icon: Paintbrush,
    title: 'Design',
    desc: 'Pixel-perfect UI designs crafted in Figma with your brand identity and premium aesthetics.',
    color: '#06B6D4',
    num: '03',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Clean, performant code built with modern tech stack. Optimized for speed, SEO, and scalability.',
    color: '#8B5CF6',
    num: '04',
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Thorough testing, deployment, and post-launch support to ensure a flawless go-live experience.',
    color: '#3B82F6',
    num: '05',
  },
]

export function Process() {
  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue/20 text-xs text-blue mb-6">
            How We Work
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-tight mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            A proven 5-step process that delivers exceptional results, every time.
          </p>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet/50 via-blue/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <Reveal key={step.title} delay={i * 0.1} direction={isEven ? 'left' : 'right'}>
                  <div className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Card */}
                    <motion.div
                      className="flex-1 group rounded-2xl p-6 border border-white/[0.06] bg-card relative overflow-hidden"
                      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at 30% 50%, ${step.color}15 0%, transparent 70%)`,
                          boxShadow: `0 0 30px ${step.color}15`,
                        }}
                      />
                      <div className="relative z-10 flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${step.color}20`, border: `1px solid ${step.color}30` }}
                        >
                          <Icon size={20} style={{ color: step.color }} />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-white/20 mb-1">{step.num}</div>
                          <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center dot */}
                    <div className="hidden md:flex w-16 flex-shrink-0 items-center justify-center">
                      <motion.div
                        className="w-4 h-4 rounded-full border-2 relative z-10"
                        style={{ borderColor: step.color, background: '#050505' }}
                        whileInView={{ scale: [0, 1.3, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-30"
                          style={{ background: step.color }}
                        />
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
