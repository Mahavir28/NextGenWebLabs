import { Star } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'CEO, TechVentures',
    text: 'NextGen Web Labs transformed our online presence completely. The website they built increased our leads by 300% in the first month.',
    rating: 5,
    color: '#8B5CF6',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, StyleCo',
    text: 'Absolutely stunning work. Our e-commerce store looks like it belongs to a Fortune 500 company. Sales doubled within weeks.',
    rating: 5,
    color: '#06B6D4',
  },
  {
    name: 'Rahul Gupta',
    role: 'Director, FinanceHub',
    text: 'The attention to detail is unmatched. Every animation, every hover effect — it all feels intentional and premium.',
    rating: 5,
    color: '#3B82F6',
  },
  {
    name: 'Sneha Patel',
    role: 'Creative Director, DesignLab',
    text: 'I\'ve worked with many agencies. NextGen Web Labs is in a different league. They understand design at a deep level.',
    rating: 5,
    color: '#8B5CF6',
  },
  {
    name: 'Vikram Singh',
    role: 'CTO, CloudBase',
    text: 'Clean code, fast performance, beautiful design. They delivered everything on time and exceeded every expectation.',
    rating: 5,
    color: '#06B6D4',
  },
  {
    name: 'Ananya Roy',
    role: 'Marketing Head, GrowthCo',
    text: 'Our landing page conversion rate went from 2% to 11% after the redesign. The ROI speaks for itself.',
    rating: 5,
    color: '#3B82F6',
  },
]

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 mx-3 rounded-2xl glass border border-white/[0.06] p-6 relative overflow-hidden group">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${t.color}10 0%, transparent 70%)` }}
      />
      <div className="relative z-10">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={12} className="fill-current" style={{ color: t.color }} />
          ))}
        </div>
        <p className="text-sm text-white/60 leading-relaxed mb-5">"{t.text}"</p>
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: `${t.color}25`, color: t.color }}
          >
            {t.name[0]}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{t.name}</div>
            <div className="text-xs text-white/30">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 text-xs text-accent mb-6">
            Client Love
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-tight mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Don't take our word for it — hear from the businesses we've transformed.
          </p>
        </Reveal>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #050505, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #050505, transparent)' }} />
        <div className="flex animate-marquee">
          {doubled.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #050505, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #050505, transparent)' }} />
        <div className="flex animate-marquee2" style={{ animationDirection: 'reverse' }}>
          {doubled.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  )
}
