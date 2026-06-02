'use client'

import { motion } from 'framer-motion'
import { BOOK } from '@/lib/constants'
import {
  BookOpen,
  Calendar,
  ShoppingCart,
  Calculator,
  Clock,
  Cake,
  Check,
  ArrowRight,
  ShieldCheck,
  Download,
} from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  book: <BookOpen className="w-4 h-4" aria-hidden="true" />,
  calendar: <Calendar className="w-4 h-4" aria-hidden="true" />,
  list: <ShoppingCart className="w-4 h-4" aria-hidden="true" />,
  calculator: <Calculator className="w-4 h-4" aria-hidden="true" />,
  clock: <Clock className="w-4 h-4" aria-hidden="true" />,
  cake: <Cake className="w-4 h-4" aria-hidden="true" />,
}

function BookCover() {
  return (
    <div
      className="w-[220px] sm:w-[260px] rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: 'linear-gradient(160deg, #1A3C2B 0%, #2D5A3D 50%, #1a4a30 100%)',
        boxShadow: '0 32px 64px -8px rgba(26,60,43,0.4), 0 0 0 1px rgba(124,184,122,0.15)',
      }}
    >
      <div
        className="flex flex-col items-center justify-center text-center p-8"
        style={{ minHeight: '310px' }}
      >
        <div
          className="w-16 h-16 rounded-full mb-5 flex items-center justify-center"
          style={{ background: 'rgba(124,184,122,0.2)', border: '1.5px solid rgba(124,184,122,0.4)' }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
            <path
              d="M20 4 C28 8 34 16 34 24 C34 32 27 37 20 38 C13 37 6 32 6 24 C6 16 12 8 20 4 Z"
              fill="#7CB87A"
              opacity="0.85"
            />
            <line x1="20" y1="4" x2="20" y2="38" stroke="#1A3C2B" strokeWidth="1.5" opacity="0.5" />
            <path d="M20 14 L12 20 M20 14 L28 20" stroke="#1A3C2B" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
          </svg>
        </div>

        <p
          className="text-xs tracking-[0.25em] uppercase mb-3 font-medium"
          style={{ color: 'rgba(143,184,157,0.85)', fontFamily: 'var(--font-inter)' }}
        >
          Olena Marchenko
        </p>

        <h3
          className="font-bold leading-tight mb-4"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.5rem',
            color: '#F4F9F4',
          }}
        >
          30-Day<br />Keto Reset
        </h3>

        <div
          className="w-10 h-px mb-4"
          style={{ background: 'rgba(124,184,122,0.4)' }}
          aria-hidden="true"
        />

        <p
          className="text-xs"
          style={{ color: 'rgba(143,184,157,0.7)', fontFamily: 'var(--font-inter)' }}
        >
          80+ Recipes · 4-Week Plan<br />PDF Instant Download
        </p>
      </div>
    </div>
  )
}

export default function Book() {
  return (
    <section id="book" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
            The Book
          </p>
          <h2
            className="font-serif text-foreground leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
          >
            Everything you need to reset
          </h2>
          <p className="mt-4 text-muted-fg max-w-xl mx-auto">
            One beautifully designed PDF. No subscriptions. No upsells. Just the complete guide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Book visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Shadow books behind */}
              <div
                className="absolute rounded-2xl"
                style={{
                  background: 'rgba(45,90,61,0.4)',
                  inset: 0,
                  transform: 'translate(12px, 12px)',
                  borderRadius: '1rem',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute rounded-2xl"
                style={{
                  background: 'rgba(45,90,61,0.2)',
                  inset: 0,
                  transform: 'translate(22px, 22px)',
                  borderRadius: '1rem',
                }}
                aria-hidden="true"
              />
              <BookCover />
            </div>
          </motion.div>

          {/* Features + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-sm font-medium text-muted-fg mb-1">What's inside</p>
              <h3 className="font-serif text-2xl text-foreground mb-5">
                {BOOK.subtitle}
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                {BOOK.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-3 bg-card rounded-xl px-4 py-3"
                  >
                    <span className="mt-0.5 w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center text-secondary shrink-0">
                      {ICON_MAP[feature.icon]}
                    </span>
                    <span className="text-sm text-foreground leading-snug">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price box */}
            <div
              id="buy"
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
            >
              <div className="flex items-end gap-3">
                <span className="font-serif text-4xl font-bold text-primary">{BOOK.price}</span>
                <span className="text-sm text-muted-fg pb-1 line-through">$49</span>
                <span className="text-xs font-semibold text-accent bg-accent/15 rounded-full px-2.5 py-1">
                  45% OFF
                </span>
              </div>

              <a
                href="/buy"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-secondary transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-base"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Buy Now — Instant Download
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-fg">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  {BOOK.guarantee}
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  Secure checkout
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  PDF for all devices
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
