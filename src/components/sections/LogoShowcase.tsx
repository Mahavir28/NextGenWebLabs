import { motion } from 'framer-motion'
import { Download, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '../ui/Logo'
import { Reveal } from '../ui/Reveal'

const variants = [
  {
    id: 'main' as const,
    label: 'Main Logo',
    desc: 'Full version with orbit ring — hero sections, proposals, presentations',
    size: 160,
    bg: 'bg-[#080808]',
    border: 'border-white/[0.06]',
  },
  {
    id: 'icon' as const,
    label: 'Icon Version',
    desc: 'Rounded tile — app icons, social media profiles, favicons',
    size: 96,
    bg: 'bg-[#080808]',
    border: 'border-white/[0.06]',
  },
  {
    id: 'mono' as const,
    label: 'Monochrome',
    desc: 'Pure white — dark backgrounds, print, embossing, watermarks',
    size: 140,
    bg: 'bg-[#080808]',
    border: 'border-white/[0.06]',
  },
  {
    id: 'favicon' as const,
    label: 'Favicon',
    desc: 'Ultra-compact — browser tabs, 16×16 to 32×32 contexts',
    size: 64,
    bg: 'bg-[#080808]',
    border: 'border-white/[0.06]',
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-xs text-white/40 hover:text-white hover:border-white/20 transition-all"
    >
      {copied ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
      {copied ? 'Copied!' : text}
    </button>
  )
}

export function LogoShowcase() {
  return (
    <section id="brand" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/20 text-xs text-violet mb-6">
            Brand Identity
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-tight mb-4">
            Logo <span className="text-gradient">System</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            A complete brand identity built for premium digital agencies.
            Every variant pixel-perfect and production-ready.
          </p>
        </Reveal>

        {/* Navbar variant — full width showcase */}
        <Reveal className="mb-6">
          <div className="rounded-2xl border border-white/[0.06] bg-[#080808] overflow-hidden">
            <div className="px-6 py-3 border-b border-white/[0.04] flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <span className="text-xs text-white/20 ml-2">Navbar Version — Horizontal Layout</span>
            </div>
            <div className="px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-start gap-4">
                <Logo variant="navbar" animated size={36} />
                <p className="text-xs text-white/30 max-w-xs">
                  Horizontal lockup — website navbar, email signatures, business cards, letterheads
                </p>
              </div>
              {/* Simulated navbar context */}
              <div className="flex items-center gap-6 px-6 py-3 rounded-full glass border border-white/[0.06]">
                <Logo variant="navbar" animated={false} size={32} />
                <div className="hidden sm:flex items-center gap-5">
                  {['Services', 'Projects', 'Team'].map(l => (
                    <span key={l} className="text-xs text-white/30">{l}</span>
                  ))}
                </div>
                <div className="px-4 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: 'linear-gradient(135deg,#EC4899,#8B5CF6,#06B6D4)', color: '#fff' }}>
                  Start Project
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid of other variants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {variants.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <motion.div
                className={`group rounded-2xl border ${v.border} ${v.bg} overflow-hidden`}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Preview area */}
                <div className="relative h-48 flex items-center justify-center">
                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)',
                    }}
                  />
                  <Logo variant={v.id} size={v.size} animated />
                </div>

                {/* Info */}
                <div className="px-5 py-4 border-t border-white/[0.04]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-white">{v.label}</span>
                    <motion.button
                      className="w-7 h-7 rounded-lg border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={12} />
                    </motion.button>
                  </div>
                  <p className="text-xs text-white/30 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Color palette */}
        <Reveal>
          <div className="rounded-2xl border border-white/[0.06] bg-[#080808] p-8">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-6">Brand Color Palette</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { name: 'Pink', hex: '#EC4899', role: 'Energy & Creativity' },
                { name: 'Purple', hex: '#8B5CF6', role: 'Premium & Trust' },
                { name: 'Cyan', hex: '#06B6D4', role: 'Innovation & Tech' },
              ].map((c) => (
                <div key={c.hex} className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 shadow-lg"
                    style={{ background: c.hex, boxShadow: `0 8px 24px ${c.hex}40` }}
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">{c.name}</div>
                    <div className="text-xs text-white/30 mb-1">{c.role}</div>
                    <CopyButton text={c.hex} />
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient preview */}
            <div className="rounded-xl overflow-hidden h-14 relative"
              style={{ background: 'linear-gradient(135deg, #EC4899, #8B5CF6, #06B6D4)' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-widest opacity-80">
                  PRIMARY GRADIENT — #EC4899 → #8B5CF6 → #06B6D4
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Typography specimen */}
        <Reveal className="mt-4">
          <div className="rounded-2xl border border-white/[0.06] bg-[#080808] p-8">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-6">Brand Typography</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className="text-6xl font-black text-white">Aa</span>
                <div>
                  <div className="text-lg font-bold text-white">Inter</div>
                  <div className="text-xs text-white/30">Primary typeface — weights 300–900</div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                {[
                  { w: '300', label: 'Light' },
                  { w: '400', label: 'Regular' },
                  { w: '700', label: 'Bold' },
                  { w: '900', label: 'Black' },
                ].map(({ w, label }) => (
                  <div key={w} className="p-3 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                    <div className="text-2xl text-white mb-1" style={{ fontWeight: w }}>NW</div>
                    <div className="text-xs text-white/30">{label} / {w}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
