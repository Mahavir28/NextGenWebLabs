import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'main' | 'icon' | 'navbar' | 'mono' | 'favicon'
  size?: number
  animated?: boolean
  className?: string
}

// ── Shared gradient defs ──────────────────────────────────────────────────────
function Defs({ id = 'g' }: { id?: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#EC4899" />
        <stop offset="50%"  stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id={`${id}-orbit`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#EC4899" stopOpacity="0" />
        <stop offset="30%"  stopColor="#8B5CF6" stopOpacity="0.9" />
        <stop offset="70%"  stopColor="#06B6D4" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
      </linearGradient>
      <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="4" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id={`${id}-glow-sm`} x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  )
}

// ── NW Monogram paths (200×200 coordinate space) ─────────────────────────────
function NWMark({ id = 'g', strokeWidth = 7 }: { id?: string; strokeWidth?: number }) {
  const stroke = `url(#${id}-grad)`
  const sw = strokeWidth
  return (
    <g filter={`url(#${id}-glow)`}>
      {/* N — left vertical */}
      <line x1="62"  y1="68"  x2="62"  y2="132" stroke={stroke} strokeWidth={sw} strokeLinecap="square" />
      {/* N — diagonal */}
      <line x1="62"  y1="68"  x2="100" y2="132" stroke={stroke} strokeWidth={sw} strokeLinecap="square" />
      {/* N/W — shared center vertical */}
      <line x1="100" y1="68"  x2="100" y2="132" stroke={stroke} strokeWidth={sw} strokeLinecap="square" />
      {/* W — left-outer down */}
      <line x1="100" y1="68"  x2="119" y2="132" stroke={stroke} strokeWidth={sw} strokeLinecap="square" />
      {/* W — center-up */}
      <line x1="119" y1="132" x2="129" y2="100" stroke={stroke} strokeWidth={sw} strokeLinecap="square" />
      {/* W — center-down */}
      <line x1="129" y1="100" x2="138" y2="132" stroke={stroke} strokeWidth={sw} strokeLinecap="square" />
      {/* W — right vertical */}
      <line x1="138" y1="132" x2="138" y2="68"  stroke={stroke} strokeWidth={sw} strokeLinecap="square" />
    </g>
  )
}

// ── Corner accent dots ────────────────────────────────────────────────────────
function CornerDots() {
  return (
    <>
      <circle cx="62"  cy="68"  r="3.5" fill="#EC4899" opacity="0.95" />
      <circle cx="138" cy="68"  r="3.5" fill="#06B6D4" opacity="0.95" />
      <circle cx="62"  cy="132" r="3.5" fill="#8B5CF6" opacity="0.8" />
      <circle cx="138" cy="132" r="3.5" fill="#06B6D4" opacity="0.8" />
    </>
  )
}

// ── Orbit ring ────────────────────────────────────────────────────────────────
function OrbitRing({ id = 'g', animated = false }: { id?: string; animated?: boolean }) {
  return (
    <>
      {/* Main arc */}
      <motion.circle
        cx="100" cy="100" r="88"
        stroke={`url(#${id}-orbit)`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="460 100"
        strokeDashoffset="-20"
        filter={`url(#${id}-glow-sm)`}
        animate={animated ? { rotate: 360 } : undefined}
        transition={animated ? { duration: 20, repeat: Infinity, ease: 'linear' } : undefined}
        style={{ transformOrigin: '100px 100px' }}
      />
      {/* Inner dashed ring */}
      <circle cx="100" cy="100" r="74"
        stroke={`url(#${id}-grad)`}
        strokeWidth="0.5"
        strokeDasharray="8 6"
        opacity="0.2"
      />
      {/* End-cap dots */}
      <circle cx="162" cy="38"  r="3"   fill="#EC4899" opacity="0.9" filter={`url(#${id}-glow-sm)`} />
      <circle cx="38"  cy="162" r="2"   fill="#06B6D4" opacity="0.7" filter={`url(#${id}-glow-sm)`} />
    </>
  )
}

// ── VARIANT: Main (200×200, full orbit) ──────────────────────────────────────
function LogoMain({ animated }: { animated: boolean }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Defs id="main" />
      <OrbitRing id="main" animated={animated} />
      <NWMark id="main" strokeWidth={7} />
      <CornerDots />
    </svg>
  )
}

// ── VARIANT: Icon (64×64, rounded tile) ──────────────────────────────────────
function LogoIconTile({ animated }: { animated: boolean }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#EC4899" />
          <stop offset="50%"  stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <filter id="icon-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Tile background */}
      <rect width="64" height="64" rx="14" fill="#0A0A0A" />
      <rect width="64" height="64" rx="14" fill="url(#icon-grad)" opacity="0.07" />
      <motion.rect
        x="0.75" y="0.75" width="62.5" height="62.5" rx="13.25"
        stroke="url(#icon-grad)" strokeWidth="1.5" opacity="0.35"
        animate={animated ? { opacity: [0.35, 0.7, 0.35] } : undefined}
        transition={animated ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
      />

      {/* NW scaled to 64×64 */}
      <g filter="url(#icon-glow)">
        <line x1="14" y1="18" x2="14" y2="46" stroke="url(#icon-grad)" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="14" y1="18" x2="32" y2="46" stroke="url(#icon-grad)" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="32" y1="18" x2="32" y2="46" stroke="url(#icon-grad)" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="32" y1="18" x2="39" y2="46" stroke="url(#icon-grad)" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="39" y1="46" x2="44" y2="30" stroke="url(#icon-grad)" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="44" y1="30" x2="49" y2="46" stroke="url(#icon-grad)" strokeWidth="3.2" strokeLinecap="square" />
        <line x1="49" y1="46" x2="49" y2="18" stroke="url(#icon-grad)" strokeWidth="3.2" strokeLinecap="square" />
      </g>
      <circle cx="14" cy="18" r="2" fill="#EC4899" />
      <circle cx="49" cy="18" r="2" fill="#06B6D4" />
    </svg>
  )
}

// ── VARIANT: Navbar (horizontal: icon + wordmark) ────────────────────────────
function LogoNavbar({ animated }: { animated: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 flex-shrink-0">
        <LogoIconTile animated={animated} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[13px] font-black tracking-tight text-white">
          NextGen{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #EC4899, #8B5CF6, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Web Labs
          </span>
        </span>
      </div>
    </div>
  )
}

// ── VARIANT: Monochrome ───────────────────────────────────────────────────────
function LogoMono() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="mono-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="100" cy="100" r="88"
        stroke="white" strokeWidth="1.5" strokeLinecap="round"
        strokeDasharray="460 100" strokeDashoffset="-20" opacity="0.35" />
      <circle cx="100" cy="100" r="74"
        stroke="white" strokeWidth="0.5" strokeDasharray="8 6" opacity="0.12" />
      <g filter="url(#mono-glow)" opacity="0.95">
        <line x1="62"  y1="68"  x2="62"  y2="132" stroke="white" strokeWidth="7" strokeLinecap="square" />
        <line x1="62"  y1="68"  x2="100" y2="132" stroke="white" strokeWidth="7" strokeLinecap="square" />
        <line x1="100" y1="68"  x2="100" y2="132" stroke="white" strokeWidth="7" strokeLinecap="square" />
        <line x1="100" y1="68"  x2="119" y2="132" stroke="white" strokeWidth="7" strokeLinecap="square" />
        <line x1="119" y1="132" x2="129" y2="100" stroke="white" strokeWidth="7" strokeLinecap="square" />
        <line x1="129" y1="100" x2="138" y2="132" stroke="white" strokeWidth="7" strokeLinecap="square" />
        <line x1="138" y1="132" x2="138" y2="68"  stroke="white" strokeWidth="7" strokeLinecap="square" />
      </g>
      <circle cx="62"  cy="68"  r="3.5" fill="white" opacity="0.8" />
      <circle cx="138" cy="68"  r="3.5" fill="white" opacity="0.8" />
      <circle cx="62"  cy="132" r="3.5" fill="white" opacity="0.5" />
      <circle cx="138" cy="132" r="3.5" fill="white" opacity="0.5" />
      <circle cx="162" cy="38"  r="3"   fill="white" opacity="0.5" />
      <circle cx="38"  cy="162" r="2"   fill="white" opacity="0.35" />
    </svg>
  )
}

// ── VARIANT: Favicon (32×32) ──────────────────────────────────────────────────
function LogoFavicon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fav-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#EC4899" />
          <stop offset="50%"  stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="#0A0A0A" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" stroke="url(#fav-g)" strokeWidth="1" opacity="0.4" />
      <line x1="7"  y1="9"  x2="7"  y2="23" stroke="url(#fav-g)" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="7"  y1="9"  x2="16" y2="23" stroke="url(#fav-g)" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="16" y1="9"  x2="16" y2="23" stroke="url(#fav-g)" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="16" y1="9"  x2="20" y2="23" stroke="url(#fav-g)" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="20" y1="23" x2="23" y2="14" stroke="url(#fav-g)" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="23" y1="14" x2="25" y2="23" stroke="url(#fav-g)" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="25" y1="23" x2="25" y2="9"  stroke="url(#fav-g)" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export function Logo({ variant = 'main', size = 48, animated = false, className = '' }: LogoProps) {
  const wrapStyle = variant === 'navbar'
    ? { display: 'inline-flex' }
    : { width: size, height: size, display: 'inline-block' }

  return (
    <motion.div
      style={wrapStyle}
      className={className}
      whileHover={animated ? { scale: 1.05 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {variant === 'main'    && <LogoMain    animated={animated} />}
      {variant === 'icon'    && <LogoIconTile animated={animated} />}
      {variant === 'navbar'  && <LogoNavbar  animated={animated} />}
      {variant === 'mono'    && <LogoMono />}
      {variant === 'favicon' && <LogoFavicon />}
    </motion.div>
  )
}
