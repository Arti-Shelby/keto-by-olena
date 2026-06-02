'use client'

import { NAV_LINKS, CLIENT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Menu, X, Leaf } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close menu when viewport resizes past mobile breakpoint
  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold text-primary"
            aria-label="Keto by Olena home"
          >
            <Leaf className="w-5 h-5 text-accent" aria-hidden="true" />
            <span className="font-serif text-lg">{CLIENT.brand}</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-fg hover:text-primary rounded-full hover:bg-card transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href="/buy"
            className="hidden md:inline-flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-secondary transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            Get the Book — $27
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 rounded-lg hover:bg-card transition-colors cursor-pointer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-haspopup="dialog"
          >
            {open ? (
              <X className="w-5 h-5 text-primary" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-primary" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu rendered outside <header> to avoid stacking context issues */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-background/97 backdrop-blur-md flex flex-col p-6 gap-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="block text-lg font-medium text-foreground py-3 px-4 rounded-xl hover:bg-card transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Link
                href="/buy"
                onClick={handleNavClick}
                className="block text-center bg-primary text-white font-semibold py-3.5 rounded-full hover:bg-secondary transition-colors cursor-pointer"
              >
                Get the Book — $27
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
