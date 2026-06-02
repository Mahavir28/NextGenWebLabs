import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Particles } from '../ui/Particles'
import { GradientOrbs } from '../ui/GradientOrbs'
import { MagneticButton } from '../ui/MagneticButton'
import { useMouseGlow } from '../../hooks/useMouseGlow'
import { Logo } from '../ui/Logo'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export function Hero() {
  const glowRef = useMouseGlow()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg noise"
    >
      <div className="absolute inset-0 animated-grid opacity-40" />
      <Particles />
      <GradientOrbs />

      <div
        ref={glowRef}
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(20px)',
          top: 0,
          left: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/[0.08] text-sm text-white/70">
              <Logo variant="favicon" size={20} />
              <span>Premium Web Development Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[clamp(48px,8vw,96px)] font-black leading-[1.0] tracking-tight mb-6"
          >
            <span className="text-white">Websites That Make</span>
            <br />
            <span className="text-gradient">Businesses Stand Out</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We create premium digital experiences that help businesses grow online.
            Every pixel crafted with purpose. Every interaction designed to convert.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <MagneticButton
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-violet/20"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold text-sm hover:border-violet/40 hover:bg-white/5 transition-all duration-300"
            >
              Start Project
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/40"
          >
            {[
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Happy Clients', value: '40+' },
              { label: 'Years Experience', value: '3+' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <Star size={12} className="text-violet" />
                <span className="text-white font-semibold">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-violet/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
