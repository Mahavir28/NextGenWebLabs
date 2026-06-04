import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, Mail, MessageSquare, MapPin, CheckCircle, ArrowRight, Loader2 } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { MagneticButton } from '../ui/MagneticButton'

// EmailJS config — replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_nextgenweb'
const EMAILJS_TEMPLATE_ID = 'template_contact'
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focused, setFocused] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company || 'N/A',
          phone: form.phone || 'N/A',
          message: form.message,
          to_email: 'hello.nextgenweblabs@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
        setForm({ name: '', email: '', company: '', phone: '', message: '' })
      }, 5000)
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or reach us on WhatsApp.')
    }
  }

  const inputClass = (field: string) =>
    `w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 ${
      focused === field
        ? 'border-violet/50 shadow-[0_0_20px_rgba(139,92,246,0.1)]'
        : 'border-white/[0.06] hover:border-white/10'
    }`

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/20 text-xs text-violet mb-6">
            Get In Touch
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black text-white leading-tight mb-4">
            Let's Build Your{' '}
            <span className="text-gradient">Next Website</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Ready to grow your business online? Let's discuss your project.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info */}
          <Reveal className="lg:col-span-2" direction="left">
            <div className="flex flex-col gap-4 h-full">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello.nextgenweblabs@gmail.com', color: '#8B5CF6', href: 'mailto:hello.nextgenweblabs@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Ahmedabad, Gujarat', color: '#3B82F6', href: null },
              ].map(({ icon: Icon, label, value, color, href }) => (
                <motion.a
                  key={label}
                  href={href ?? undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-card"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">{label}</div>
                    <div className="text-sm font-medium text-white">{value}</div>
                  </div>
                </motion.a>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/917383787379"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#25D366]/20 border border-[#25D366]/30">
                  <MessageSquare size={18} className="text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-white/30 mb-0.5">WhatsApp</div>
                  <div className="text-sm font-medium text-white">Chat with us</div>
                </div>
                <ArrowRight size={14} className="text-[#25D366] group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Trust badge */}
              <div className="mt-auto p-5 rounded-xl border border-violet/20 bg-violet/5">
                <div className="text-sm font-semibold text-white mb-1">🔒 100% Confidential</div>
                <p className="text-xs text-white/40 leading-relaxed">
                  Your project details are safe with us. We sign NDAs on request.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" direction="right">
            <div className="rounded-2xl border border-white/[0.06] bg-card p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <CheckCircle size={56} className="text-violet mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/40 text-sm">We'll get back to you within 24 hours.</p>
                    <p className="text-white/20 text-xs mt-3">Form resets in 5 seconds...</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col gap-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-white/30 mb-1.5 block">Your Name *</label>
                        <input
                          className={inputClass('name')}
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                          disabled={status === 'loading'}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-white/30 mb-1.5 block">Email Address *</label>
                        <input
                          type="email"
                          className={inputClass('email')}
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-white/30 mb-1.5 block">Company</label>
                        <input
                          className={inputClass('company')}
                          placeholder="Your company name"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          onFocus={() => setFocused('company')}
                          onBlur={() => setFocused(null)}
                          disabled={status === 'loading'}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-white/30 mb-1.5 block">Phone Number</label>
                        <input
                          type="tel"
                          className={inputClass('phone')}
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused(null)}
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-white/30 mb-1.5 block">Project Details *</label>
                      <textarea
                        className={`${inputClass('message')} resize-none`}
                        rows={4}
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        disabled={status === 'loading'}
                      />
                    </div>

                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-400 px-1"
                      >
                        {errorMsg}
                      </motion.p>
                    )}

                    <MagneticButton
                      className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet/20 disabled:opacity-60 disabled:cursor-not-allowed"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
