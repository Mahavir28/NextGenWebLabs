import { motion } from 'framer-motion'
import { Globe, User, Rocket, ShoppingCart, Wrench, Palette } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    desc: 'Professional websites that establish credibility, build trust, and drive real conversions for your business.',
    gradient: 'from-violet/25 to-blue/10',
    border: 'rgba(139,92,246,0.25)',
    glow: 'rgba(139,92,246,0.18)',
    iconColor: '#8B5CF6',
    span: 'md:col-span-2 md:row-span-1',
    tag: 'Most Popular',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Websites',
    desc: 'Powerful online stores with seamless checkout flows and conversion-focused product pages that maximize revenue.',
    gradient: 'from-violet/20 to-accent/10',
    border: 'rgba(139,92,246,0.2)',
    glow: 'rgba(139,92,246,0.15)',
    iconColor: '#8B5CF6',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    desc: 'High-converting landing pages engineered to turn visitors into customers.',
    gradient: 'from-accent/20 to-violet/10',
    border: 'rgba(6,182,212,0.2)',
    glow: 'rgba(6,182,212,0.15)',
    iconColor: '#06B6D4',
    span: '',
  },
  {
    icon: User,
    title: 'Portfolio Websites',
    desc: 'Stunning portfolios that showcase your work and attract premium clients.',
    gradient: 'from-blue/20 to-cyan/10',
    border: 'rgba(59,130,246,0.2)',
    glow: 'rgba(59,130,246,0.15)',
    iconColor: '#3B82F6',
    span: '',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    desc: 'Keep your site fast, secure, and up-to-date with our ongoing support plans.',
    gradient: 'from-blue/20 to-violet/10',
    border: 'rgba(59,130,246,0.2)',
    glow: 'rgba(59,130,246,0.15)',
    iconColor: '#3B82F6',
    span: '',
  },
  {
    icon: Palette,
    title: 'UI/UX Improvements',
    desc: 'Transform your existing website into a premium, user-friendly experience that people love to use.',
    gradient: 'from-accent/20 to-blue/10',
    border: 'rgba(6,182,212,0.2)',
    glow: 'rgba(6,182,212,0.15)',
    iconColor: '#06B6D4',
    span: 'md:col-span-2',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon
  return (
    <Reveal delay={index * 0.07} direction="up">
      <motion.div
        className={`relative group rounded-2xl p-6 overflow-hidden cursor-default h-full ${service.span}`}
        style={{
          background: 'rgba(12,12,12,0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${service.border}`,
        }}
        whileHover={{
          scale: 1.025,
          y: -4,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        {/* Animated gradient border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 0 0 1px ${service.border}, 0 8px 40px ${service.glow}`,
          }}
        />

        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${service.glow} 0%, transparent 65%)`,
          }}
        />

        {/* Gradient bg tint */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 rounded-2xl`} />

        {/* Content */}
        <div className="relative z-10">
          {service.tag && (
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-4"
              style={{ background: `${service.iconColor}20`, color: service.iconColor, border: `1px solid ${service.iconColor}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: service.iconColor }} />
              {service.tag}
            </div>
          )}
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: `${service.iconColor}15`, border: `1px solid ${service.iconColor}30` }}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon size={22} style={{ color: service.iconColor }} />
          </motion.div>

          <h3 className="text-[17px] font-bold text-white mb-2.5 group-hover:text-gradient transition-all duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
            {service.desc}
          </p>
        </div>

        {/* Bottom shimmer line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${service.iconColor}80, transparent)` }}
        />
      </motion.div>
    </Reveal>
  )
}

export function Services() {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {services.map((service, i) => (
            <div key={service.title} className={service.span}>
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
