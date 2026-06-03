import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and target audience.', color: '#8B5CF6' },
  { step: '02', title: 'Design', desc: 'We craft a premium, modern design tailored to your brand.', color: '#06B6D4' },
  { step: '03', title: 'Development', desc: 'We build a fast, responsive, production-ready website.', color: '#3B82F6' },
  { step: '04', title: 'Launch', desc: 'We deploy and go live with full QA and testing.', color: '#8B5CF6' },
  { step: '05', title: 'Support', desc: 'We provide ongoing support and maintenance after launch.', color: '#06B6D4' },
]

const reasons = [
  { title: 'Modern Design', icon: '✦', color: '#8B5CF6' },
  { title: 'Mobile First', icon: '📱', color: '#06B6D4' },
  { title: 'Fast Performance', icon: '⚡', color: '#3B82F6' },
  { title: 'Reliable Support', icon: '🛡️', color: '#8B5CF6' },
  { title: 'Business Focused Solutions', icon: '📈', color: '#06B6D4' },
]

export function About() {
  return (
    <div className="bg-bg min-h-screen pt-24 pb-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Who We Are */}
        <Reveal className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/20 text-xs text-violet mb-6">
            About Us
          </div>
          <h1 className="text-[clamp(40px,6vw,64px)] font-black text-white leading-tight mb-6">
            Who We <span className="text-gradient">Are</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            NextGen Web Labs is a web development agency focused on helping businesses build modern digital experiences.
          </p>
        </Reveal>

        {/* Our Mission */}
        <Reveal className="mb-24">
          <div className="rounded-2xl border border-white/[0.06] bg-card p-8 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 text-xs text-accent mb-4">
                Our Mission
              </div>
              <p className="text-white/60 text-lg leading-relaxed">
                To help businesses establish a strong online presence through modern websites and exceptional user experiences.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Our Process */}
        <div className="mb-24">
          <Reveal className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/20 text-xs text-violet mb-4">
              How We Work
            </div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-black text-white">Our Process</h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet/40 via-accent/40 to-transparent hidden sm:block" />
            <div className="flex flex-col gap-6">
              {processSteps.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.1}>
                  <motion.div
                    className="group relative sm:pl-16 rounded-2xl border border-white/[0.06] bg-card p-6 overflow-hidden"
                    whileHover={{ scale: 1.01, x: 4, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at 10% 50%, ${item.color}08 0%, transparent 60%)` }}
                    />
                    <div
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 hidden sm:block"
                      style={{ borderColor: item.color, background: `${item.color}20` }}
                    />
                    <div className="relative z-10 flex items-start gap-4">
                      <span className="text-xs font-black opacity-40 mt-0.5 flex-shrink-0" style={{ color: item.color }}>
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-white/40">{item.desc}</p>
                      </div>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                    />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <Reveal className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/20 text-xs text-violet mb-4">
              Why Us
            </div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-black text-white">Why Choose Us</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <motion.div
                  className="group rounded-2xl border border-white/[0.06] bg-card p-6 relative overflow-hidden"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${r.color}10 0%, transparent 70%)` }}
                  />
                  <div className="relative z-10">
                    <div className="text-2xl mb-3">{r.icon}</div>
                    <h3 className="text-sm font-bold text-white">{r.title}</h3>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${r.color}, transparent)` }}
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
