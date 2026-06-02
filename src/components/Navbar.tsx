import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { MagneticButton } from './ui/MagneticButton'
import { Logo } from './ui/Logo'

const links = ['Services', 'Projects', 'Process', 'Team', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/[0.06]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Logo variant="navbar" animated size={32} />
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticButton
              onClick={() => scrollTo('Contact')}
              className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-primary text-white hover:opacity-90 transition-opacity"
            >
              Start Project
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-white/[0.06] p-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-left text-white/70 hover:text-white text-lg font-medium transition-colors"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo('Contact')}
              className="mt-2 px-5 py-3 rounded-full text-white font-medium text-sm"
              style={{ background: 'linear-gradient(135deg,#EC4899,#8B5CF6,#06B6D4)' }}
            >
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
