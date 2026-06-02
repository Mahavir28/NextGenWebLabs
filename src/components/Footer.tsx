import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from './ui/Logo'

const links = {
  Services: ['Business Websites', 'Portfolio Websites', 'Landing Pages', 'E-Commerce', 'Maintenance', 'UI/UX'],
  Company: ['About', 'Process', 'Team', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service'],
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-8 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
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

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-sm text-white/30 hover:text-white transition-colors flex items-center gap-1 group"
                      whileHover={{ x: 3 }}
                    >
                      {item}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} NextGen Web Labs. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Crafted with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  )
}
