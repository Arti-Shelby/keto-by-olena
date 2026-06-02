'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CLIENT } from '@/lib/constants'
import { Instagram, Youtube } from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.01a4.85 4.85 0 01-1-.32z" />
  </svg>
)

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-28 bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Avatar / visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Avatar circle */}
            <div className="relative">
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent/30"
                style={{
                  background: 'linear-gradient(135deg, #2D5A3D 0%, #1A3C2B 100%)',
                }}
              >
                {/* Stylized initials / decorative avatar */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div
                    className="text-6xl font-serif font-bold mb-2"
                    style={{ color: 'rgba(124, 184, 122, 0.8)' }}
                    aria-hidden="true"
                  >
                    O
                  </div>
                  <p
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ color: 'rgba(143, 184, 157, 0.7)' }}
                  >
                    Olena M.
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 bg-background border border-border rounded-2xl px-4 py-2 shadow-lg"
              >
                <p className="text-xs font-medium text-muted-fg">Keto since</p>
                <p className="text-lg font-bold font-serif text-primary">2019</p>
              </motion.div>

              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-full border border-accent/20 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-6 rounded-full border border-accent/10 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
                About Olena
              </p>
              <h2 className="font-serif text-foreground leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                The woman behind the recipes
              </h2>
              <p className="text-muted-fg leading-relaxed text-base mb-4">
                {CLIENT.bio}
              </p>
              <p className="text-muted-fg leading-relaxed text-base">
                The 30-Day Keto Reset is the book I wished existed when I started. No fluff, no
                impossible ingredients — just real, tested, delicious food that happens to be keto.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
              {CLIENT.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold font-serif text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-fg mt-0.5 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-fg">Follow along:</span>
              <a
                href={CLIENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:border-accent hover:text-accent text-muted-fg transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLIENT.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:border-accent hover:text-accent text-muted-fg transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={CLIENT.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:border-accent hover:text-accent text-muted-fg transition-colors cursor-pointer"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
