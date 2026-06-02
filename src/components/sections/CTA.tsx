'use client'

import { motion } from 'framer-motion'
import { BOOK, CLIENT } from '@/lib/constants'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center relative">

        {/* Decorative leaf shapes */}
        <div
          className="absolute -top-12 -left-16 w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7CB87A, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 -right-16 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7CB87A, transparent)' }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'rgba(124,184,122,0.9)' }}>
            Ready to reset?
          </p>
          <h2
            className="font-serif text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Start your 30-day<br />transformation today
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Join thousands of people who've already reset their relationship with food.
            One beautifully designed PDF. No subscriptions. No upsells.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/buy"
              className="inline-flex items-center gap-2 bg-accent text-primary font-semibold text-base px-8 py-4 rounded-full hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto justify-center"
            >
              Get the Book — {BOOK.price}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${CLIENT.email}`}
              className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              Have a question? Email Olena
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-white/50">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            {BOOK.guarantee} · Instant PDF download
          </p>
        </motion.div>
      </div>
    </section>
  )
}
