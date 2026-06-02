import { motion } from 'framer-motion'
import { Globe, User, Rocket, ShoppingCart, Wrench, Palette } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    desc: 'Professional websites that establish credibility and drive conversions for your business.',
    gradient: 'from-violet/20 to-blue/10',
    glow: 'rgba(139,92,246,0.2)',
    span: 'md:col-span-2',
  },
  {
    icon: User,
    title: 'Portfolio Websites',
    desc: 'Stunning portfolios that showcase your work and attract premium clients.',
    gradient: 'from-blue/20 to-cyan/10',
    glow: 'rgba(59,130,246,0.2)',
    span: '',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    desc: 'High-converting landing pages engineered to turn visitors into customers.',
    gradient: 'from-accent/20 to-violet/10',
    glow: 'rgba(6,182,212,0.2)',
    span: '',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Websites',
    desc: 'Powerful online stores with seamless checkout experiences that maximize revenue.',
    gradient: 'from-violet/20 to-accent/10',
    glow: 'rgba(139,92,246,0.2)',
    span: '',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    desc: 'Keep your website fast, secure, and up-to-date with our ongoing support.',
    gradient: 'from-blue/20 to-violet/10',
    glow: 'rgba(59,130,246,0.2)',
    span: '',
  },
  {
    icon: Palette,
    title: 'UI/UX Improvements',
    desc: 'Transform your existing website into a premium experience that users love.',
    gradient: 'from-accent/20 to-blue/10',
    glow: 'rgba(6,182,212,0.2)',
    span: 'md:col-span-2',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon

  return (
    <Reveal delay={index * 0.08} direction="up">
      <motion.div
        className={`relative group rounded-2xl p-6 border border-white/[0.06] bg-card overflow-hidden cursor-default ${service.span}`}
        whileHover={{
          scale: 1.03,
          rotateX: 2,
          rotateY: 2,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${service.glow} 0%, transparent 70%)`,
          }}
        />

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `0 0 30px ${service.glow}, inset 0 0 30px ${service.glow}`,
          }}
        />

        {/* Gradient bg */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30`} />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-white/20 transition-colors">
            <Icon size={22} className="text-white/70 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all">
            {service.title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
            {service.desc}
          </p>
        </div>
      </motion.div>
    </Reveal>
  )
}

export function Services() {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/20 text-xs text-violet mb-6">
            What We Build
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-tight mb-4">
            Services Built for{' '}
            <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Every service is crafted to deliver measurable results and premium experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
