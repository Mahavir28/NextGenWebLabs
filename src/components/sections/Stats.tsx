import { useCounter } from '../../hooks/useCounter'
import { Reveal } from '../ui/Reveal'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 3, suffix: '+', label: 'Years of Excellence' },
]

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value)
  return (
    <div className="text-center">
      <div className="text-5xl font-black text-gradient mb-2">
        <span ref={ref}>{count}</span>{suffix}
      </div>
      <div className="text-sm text-white/40">{label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="rounded-2xl glass border border-white/[0.06] p-12 relative overflow-hidden">
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
