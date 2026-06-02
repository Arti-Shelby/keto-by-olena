'use client'

import { motion } from 'framer-motion'
import { CLIENT, BOOK } from '@/lib/constants'
import { ArrowRight, ShieldCheck } from 'lucide-react'

function MonsteraLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M160 12 C208 35 268 98 278 170 C288 235 264 298 234 336 C214 360 190 372 170 370 L158 344 C130 348 106 332 86 305 C60 270 50 234 58 205 C40 207 22 192 20 170 C18 148 33 130 54 128 C42 106 38 78 53 55 C67 33 94 22 115 34 C109 13 133 -2 160 12 Z"
        fill="#2D5A3D"
        opacity="0.92"
      />
      {/* Left fenestration */}
      <path
        d="M88 178 C74 162 70 140 80 122 C90 105 108 104 116 116 L100 148 Z"
        fill="#F4F9F4"
      />
      {/* Right fenestration */}
      <path
        d="M228 184 C242 168 244 146 234 128 C224 111 206 110 200 122 L214 154 Z"
        fill="#F4F9F4"
      />
      {/* Center vein */}
      <line
        x1="160"
        y1="12"
        x2="164"
        y2="370"
        stroke="#1A3C2B"
        strokeWidth="2"
        opacity="0.4"
      />
      {/* Side veins */}
      <path
        d="M160 100 L90 168 M160 148 L82 210 M160 195 L96 250 M160 100 L228 168 M160 148 L238 210 M160 195 L220 250"
        stroke="#1A3C2B"
        strokeWidth="1.2"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PalmLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central frond */}
      <path
        d="M140 370 C138 300 130 220 80 140 C55 100 25 70 10 40"
        stroke="#1A3C2B"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Frond 1 */}
      <path
        d="M140 370 C138 295 120 225 50 170 C30 155 10 145 2 130"
        stroke="#2D5A3D"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Frond 2 */}
      <path
        d="M140 370 C145 295 155 225 215 162 C238 148 262 138 272 122"
        stroke="#2D5A3D"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Frond 3 */}
      <path
        d="M140 370 C132 310 108 248 55 200 C30 180 8 170 0 155"
        stroke="#7CB87A"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Frond 4 */}
      <path
        d="M140 370 C148 310 170 248 222 196 C248 175 272 164 280 148"
        stroke="#7CB87A"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Small fronds */}
      <path
        d="M140 370 C128 320 95 272 42 238 C20 225 4 220 0 210"
        stroke="#8FB89D"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M140 370 C152 320 183 272 236 236 C258 222 276 216 280 206"
        stroke="#8FB89D"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

function IPadMockup() {
  return (
    <div
      className="relative w-[260px] sm:w-[300px] lg:w-[340px]"
      style={{
        transform: 'perspective(1100px) rotateY(-18deg) rotateX(6deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* iPad outer shell */}
      <div
        className="relative rounded-[2.8rem] overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #2a2a2e 0%, #1c1c1e 60%, #3a3a3e 100%)',
          padding: '14px',
          boxShadow:
            '0 40px 80px -10px rgba(26,60,43,0.35), 0 20px 40px -10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), -8px 8px 24px rgba(0,0,0,0.2)',
        }}
      >
        {/* Camera pill */}
        <div
          className="mx-auto mb-3 rounded-full"
          style={{
            width: '60px',
            height: '10px',
            background: 'linear-gradient(90deg, #1a1a1c, #3a3a3c)',
          }}
        />
        {/* Screen */}
        <div
          className="rounded-[1.8rem] overflow-hidden relative"
          style={{
            aspectRatio: '3/4',
            background: 'linear-gradient(160deg, #1A3C2B 0%, #2D5A3D 40%, #1a4a30 100%)',
          }}
        >
          {/* Book cover design on screen */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {/* Decorative leaf accent */}
            <div
              className="w-14 h-14 rounded-full mb-4 flex items-center justify-center opacity-30"
              style={{ background: 'rgba(124, 184, 122, 0.4)' }}
            >
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
                <path
                  d="M20 4 C27 8 34 16 34 24 C34 32 27 38 20 38 C13 38 6 32 6 24 C6 16 13 8 20 4 Z"
                  fill="#7CB87A"
                  opacity="0.8"
                />
              </svg>
            </div>

            <p
              className="text-xs font-medium tracking-[0.2em] mb-2 uppercase"
              style={{ color: 'rgba(143, 184, 157, 0.9)', fontFamily: 'var(--font-inter)' }}
            >
              Olena Marchenko
            </p>

            <h2
              className="font-bold leading-tight mb-1"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: '#F4F9F4',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              30-Day<br />Keto Reset
            </h2>

            <div
              className="w-12 h-px my-3 mx-auto"
              style={{ background: 'rgba(124, 184, 122, 0.5)' }}
            />

            <p
              className="text-xs font-medium"
              style={{ color: 'rgba(143, 184, 157, 0.8)', fontFamily: 'var(--font-inter)' }}
            >
              80+ Recipes · PDF Guide
            </p>

            {/* Bottom decorative bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center pb-4"
              style={{
                background: 'linear-gradient(0deg, rgba(26,60,43,0.9) 0%, transparent 100%)',
              }}
            >
              <span
                className="text-xs tracking-wider"
                style={{ color: 'rgba(124, 184, 122, 0.7)', fontFamily: 'var(--font-inter)' }}
              >
                ketobylena.com
              </span>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div
          className="mx-auto mt-3 rounded-full"
          style={{
            width: '40px',
            height: '4px',
            background: 'rgba(255,255,255,0.15)',
          }}
        />
      </div>
    </div>
  )
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const LEAF_VARIANTS = {
  hidden: { opacity: 0, scale: 0.6, rotate: -20 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
}

const TEXT_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(45,90,61,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-8 items-center">

          {/* Left column — text */}
          <div className="max-w-[600px]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={TEXT_VARIANTS}
              className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-6"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-muted-fg">
                Instant PDF Download
              </span>
            </motion.div>

            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={TEXT_VARIANTS}
              className="font-serif text-foreground leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}
            >
              {CLIENT.tagline}
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={TEXT_VARIANTS}
              className="text-lg text-muted-fg leading-relaxed mb-8 max-w-[480px]"
            >
              {CLIENT.bioExtended}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={TEXT_VARIANTS}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href="/buy"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-secondary transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                Get the Book — {BOOK.price}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-muted-fg hover:text-primary underline underline-offset-4 transition-colors cursor-pointer"
              >
                Learn about Olena
              </a>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={TEXT_VARIANTS}
              className="flex items-center gap-2 text-sm text-muted-fg"
            >
              <ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>{BOOK.guarantee}</span>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={TEXT_VARIANTS}
              className="mt-12 flex flex-wrap gap-6"
            >
              {CLIENT.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold font-serif text-primary">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-fg mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — iPad + botanical leaves */}
          <div className="relative hidden lg:flex items-center justify-center w-[420px] xl:w-[480px] h-[560px] shrink-0">

            {/* Top-right palm leaf */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={LEAF_VARIANTS}
              className="absolute -top-8 -right-6 w-[200px] xl:w-[240px] origin-bottom-left z-10 pointer-events-none"
              style={{ transform: 'rotate(-30deg)' }}
              aria-hidden="true"
            >
              <PalmLeaf className="w-full h-full drop-shadow-lg" />
            </motion.div>

            {/* Bottom-left Monstera leaf */}
            <motion.div
              custom={0.35}
              initial="hidden"
              animate="visible"
              variants={LEAF_VARIANTS}
              className="absolute -bottom-10 -left-12 w-[220px] xl:w-[260px] origin-top-right z-20 pointer-events-none"
              style={{ transform: 'rotate(15deg)' }}
              aria-hidden="true"
            >
              <MonsteraLeaf className="w-full h-full drop-shadow-lg" />
            </motion.div>

            {/* Small accent leaf top-left */}
            <motion.div
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={LEAF_VARIANTS}
              className="absolute top-16 -left-8 w-[110px] origin-bottom-right z-10 pointer-events-none opacity-60"
              style={{ transform: 'rotate(40deg) scaleX(-1)' }}
              aria-hidden="true"
            >
              <MonsteraLeaf className="w-full h-full" />
            </motion.div>

            {/* iPad */}
            <motion.div
              custom={0.15}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              }}
              className="relative z-[15] translate-x-6 translate-y-4"
            >
              <IPadMockup />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-muted-fg tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
