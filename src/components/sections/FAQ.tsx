'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FAQ as FAQ_DATA } from '@/lib/constants'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border border-border rounded-2xl overflow-hidden bg-background list-none"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          'w-full text-left flex items-center justify-between gap-4 px-6 py-5 font-medium text-foreground hover:bg-card transition-colors duration-150 cursor-pointer',
          isOpen && 'bg-card'
        )}
      >
        <span className="text-[0.97rem] leading-snug">{q}</span>
        <span
          className={cn(
            'shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-fg transition-transform duration-300',
            isOpen && 'rotate-45 border-accent text-accent bg-accent/10'
          )}
          aria-hidden="true"
        >
          <Plus className="w-3.5 h-3.5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-muted-fg leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2
            className="font-serif text-foreground leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
          >
            Questions answered
          </h2>
        </motion.div>

        <ul className="flex flex-col gap-3">
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </ul>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-fg">
            Still have questions?{' '}
            <a
              href="mailto:hello@ketobylena.com"
              className="text-primary font-medium hover:underline underline-offset-4 transition-colors cursor-pointer"
            >
              Email Olena directly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
