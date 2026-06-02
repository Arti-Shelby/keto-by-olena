'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Leaf, ArrowLeft, Lock, ShieldCheck, Check,
  BookOpen, Calendar, ShoppingCart, Calculator, Clock, Cake,
  Download,
} from 'lucide-react'
import { BOOK, CLIENT } from '@/lib/constants'

const ICON_MAP: Record<string, React.ReactNode> = {
  book: <BookOpen className="w-4 h-4" aria-hidden="true" />,
  calendar: <Calendar className="w-4 h-4" aria-hidden="true" />,
  list: <ShoppingCart className="w-4 h-4" aria-hidden="true" />,
  calculator: <Calculator className="w-4 h-4" aria-hidden="true" />,
  clock: <Clock className="w-4 h-4" aria-hidden="true" />,
  cake: <Cake className="w-4 h-4" aria-hidden="true" />,
}

function BookCoverSmall() {
  return (
    <div
      className="w-[120px] sm:w-[140px] rounded-xl overflow-hidden shadow-xl shrink-0"
      style={{
        background: 'linear-gradient(160deg, #1A3C2B 0%, #2D5A3D 50%, #1a4a30 100%)',
      }}
    >
      <div className="flex flex-col items-center justify-center text-center p-4" style={{ minHeight: '160px' }}>
        <div
          className="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
          style={{ background: 'rgba(124,184,122,0.2)', border: '1.5px solid rgba(124,184,122,0.4)' }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
            <path d="M20 4 C28 8 34 16 34 24 C34 32 27 37 20 38 C13 37 6 32 6 24 C6 16 12 8 20 4 Z" fill="#7CB87A" opacity="0.85" />
            <line x1="20" y1="4" x2="20" y2="38" stroke="#1A3C2B" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>
        <p className="text-[9px] tracking-[0.2em] uppercase mb-1.5 font-medium" style={{ color: 'rgba(143,184,157,0.85)', fontFamily: 'var(--font-inter)' }}>
          Olena Marchenko
        </p>
        <h3 className="font-bold leading-tight" style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.85rem', color: '#F4F9F4' }}>
          30-Day<br />Keto Reset
        </h3>
      </div>
    </div>
  )
}

export default function BuyPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const isValid = name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })

      if (!res.ok) throw new Error('checkout_failed')

      const { url } = await res.json() as { url: string }
      window.location.href = url
    } catch {
      setError('Something went wrong. Please try again or email us.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-primary group" aria-label="Home">
            <Leaf className="w-5 h-5 text-accent" aria-hidden="true" />
            <span className="font-serif text-lg">{CLIENT.brand}</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-fg hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to site
          </Link>
        </div>
      </header>

      <main className="flex-1 py-10 sm:py-16 px-4">
        <div className="mx-auto max-w-5xl">

          {/* Page title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
          >
            <p className="text-sm font-medium text-accent tracking-widest uppercase mb-2">Secure Checkout</p>
            <h1 className="font-serif text-3xl sm:text-4xl text-foreground">Complete your order</h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">

            {/* Left — Order summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5"
            >
              {/* Product card */}
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-fg mb-4">Order summary</p>
                <div className="flex gap-4 sm:gap-5 items-start">
                  <BookCoverSmall />
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-xl text-foreground mb-0.5">{BOOK.title}</h2>
                    <p className="text-sm text-muted-fg mb-3">{BOOK.subtitle}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-bold text-primary">{BOOK.price}</span>
                      <span className="text-sm text-muted-fg line-through">$49</span>
                      <span className="text-xs font-semibold text-accent bg-accent/15 rounded-full px-2 py-0.5">45% OFF</span>
                    </div>
                    <p className="text-xs text-muted-fg mt-2 flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                      PDF — instant download after payment
                    </p>
                  </div>
                </div>
              </div>

              {/* What's included */}
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-fg mb-4">What's included</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
                  {BOOK.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <span className="mt-0.5 w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center text-secondary shrink-0">
                        {ICON_MAP[feature.icon]}
                      </span>
                      <span className="text-sm text-foreground leading-snug">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" />, text: BOOK.guarantee },
                  { icon: <Lock className="w-4 h-4 text-accent" aria-hidden="true" />, text: 'Secure Stripe payment' },
                  { icon: <Check className="w-4 h-4 text-accent" aria-hidden="true" />, text: 'Works on all devices' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3">
                    {item.icon}
                    <span className="text-xs text-muted-fg">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Checkout form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 sticky top-24">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-fg mb-5">Your details</p>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="buy-name" className="text-sm font-medium text-foreground">
                      Full name
                    </label>
                    <input
                      id="buy-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Olena Marchenko"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-fg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="buy-email" className="text-sm font-medium text-foreground">
                      Email address
                    </label>
                    <input
                      id="buy-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-fg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                    <p className="text-xs text-muted-fg">Download link will be sent here.</p>
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3" role="alert">
                      {error}
                    </p>
                  )}

                  {/* Price summary */}
                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-fg">Total today</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-bold text-primary">{BOOK.price}</span>
                      <span className="text-sm text-muted-fg line-through">$49</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-secondary transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-lg text-base"
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Redirecting to checkout…
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" aria-hidden="true" />
                        Pay securely — {BOOK.price}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-muted-fg flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3" aria-hidden="true" />
                    Powered by Stripe · SSL encrypted
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-4">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-fg">&copy; {new Date().getFullYear()} {CLIENT.brand}. All rights reserved.</p>
          <a href={`mailto:${CLIENT.email}`} className="text-xs text-muted-fg hover:text-primary transition-colors underline underline-offset-2">
            {CLIENT.email}
          </a>
        </div>
      </footer>
    </div>
  )
}
