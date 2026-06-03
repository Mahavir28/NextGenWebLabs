import { Reveal } from '../ui/Reveal'

const placeholders = [
  {
    title: 'Project Demo Feedback',
    desc: 'Client success story coming soon.',
    color: '#8B5CF6',
    icon: '🚀',
  },
  {
    title: 'Website Review',
    desc: 'Client success story coming soon.',
    color: '#06B6D4',
    icon: '⭐',
  },
  {
    title: 'Development Collaboration',
    desc: 'Client success story coming soon.',
    color: '#3B82F6',
    icon: '🤝',
  },
  {
    title: 'Project Demo Feedback',
    desc: 'Client success story coming soon.',
    color: '#8B5CF6',
    icon: '🚀',
  },
  {
    title: 'Website Review',
    desc: 'Client success story coming soon.',
    color: '#06B6D4',
    icon: '⭐',
  },
  {
    title: 'Development Collaboration',
    desc: 'Client success story coming soon.',
    color: '#3B82F6',
    icon: '🤝',
  },
]

function PlaceholderCard({ item }: { item: typeof placeholders[0] }) {
  return (
    <div className="flex-shrink-0 w-72 mx-3 rounded-2xl glass border border-white/[0.06] p-6 relative overflow-hidden group">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${item.color}12 0%, transparent 70%)` }}
      />
      <div className="relative z-10">
        <div className="text-2xl mb-4">{item.icon}</div>
        <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
        <p className="text-xs text-white/30 leading-relaxed italic">{item.desc}</p>
        <div
          className="mt-4 h-px w-full"
          style={{ background: `linear-gradient(90deg, ${item.color}40, transparent)` }}
        />
        <p className="mt-3 text-xs font-medium" style={{ color: item.color }}>Coming Soon</p>
      </div>
    </div>
  )
}

export function Testimonials() {
  const doubled = [...placeholders, ...placeholders]

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
            Social Proof
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-tight mb-4">
            Client Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Client Success Stories Coming Soon
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
          {doubled.map((item, i) => <PlaceholderCard key={i} item={item} />)}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #050505, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #050505, transparent)' }} />
        <div className="flex animate-marquee2" style={{ animationDirection: 'reverse' }}>
          {doubled.map((item, i) => <PlaceholderCard key={i} item={item} />)}
        </div>
      </div>
    </section>
  )
}
