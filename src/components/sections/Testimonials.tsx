'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { Star } from 'lucide-react'

const AVATAR_COLORS: Record<string, string> = {
  SM: 'linear-gradient(135deg, #2D5A3D, #7CB87A)',
  MT: 'linear-gradient(135deg, #1A3C2B, #2D5A3D)',
  DK: 'linear-gradient(135deg, #3D6B50, #8FB89D)',
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2
            className="font-serif text-foreground leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
          >
            Real people. Real results.
          </h2>
          <p className="mt-4 text-muted-fg max-w-xl mx-auto">
            Over 2,000 copies sold. Here's what readers say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-background rounded-2xl border border-border p-6 flex flex-col gap-4 hover:border-accent/40 hover:shadow-md transition-all duration-200"
            >
              <StarRating count={t.rating} />

              <blockquote>
                <p className="text-foreground text-[0.95rem] leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: AVATAR_COLORS[t.avatar] || AVATAR_COLORS['SM'] }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-none">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-fg mt-0.5">
                    Age {t.age} · {t.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Social proof banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-fg">
            Rated{' '}
            <strong className="text-primary">4.9 / 5</strong> from{' '}
            <strong className="text-primary">2,400+</strong> customers
          </p>
        </motion.div>
      </div>
    </section>
  )
}
