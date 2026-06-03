import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from './ui/Logo'

const quickLinks = ['Home', 'Services', 'Projects', 'About', 'Contact']

export function Footer() {
  const scrollTo = (id: string) => {
    if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden pt-16 pb-8 px-6">
      {/* Gradient divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(6,182,212,0.4), transparent)' }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="navbar" animated size={32} />
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs mb-6">
              Premium web development studio crafting digital experiences that make businesses stand out.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <motion.button
                    onClick={() => scrollTo(item)}
                    className="text-sm text-white/30 hover:text-white transition-colors flex items-center gap-1 group"
                    whileHover={{ x: 3 }}
                  >
                    {item}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Contact</h4>
            <motion.a
              href="mailto:hello.nextgenweblabs@gmail.com"
              className="text-sm text-white/30 hover:text-white transition-colors block mb-2"
              whileHover={{ x: 3 }}
            >
              hello.nextgenweblabs@gmail.com
            </motion.a>
            <p className="text-sm text-white/30">Ahmedabad, Gujarat</p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/20">
            © 2026 NextGen Web Labs. All Rights Reserved.
          </p>
          <p className="text-xs text-white/20">
            Crafted with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  )
}
