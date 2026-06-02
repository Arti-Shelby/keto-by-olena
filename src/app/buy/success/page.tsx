import Link from 'next/link'
import { CheckCircle, Download, Leaf, Mail } from 'lucide-react'
import { CLIENT, BOOK } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmed | Keto by Olena',
  description: 'Your copy of 30-Day Keto Reset is on its way.',
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-primary" aria-label="Home">
            <Leaf className="w-5 h-5 text-accent" aria-hidden="true" />
            <span className="font-serif text-lg">{CLIENT.brand}</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center">
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-accent" aria-hidden="true" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            You're all set!
          </h1>
          <p className="text-muted-fg mb-8 leading-relaxed">
            Thank you for your purchase. Check your inbox — your download link
            for <strong className="text-foreground">30-Day Keto Reset</strong> has been sent to your email.
          </p>

          {/* Steps */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8 text-left flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4 text-secondary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Check your email</p>
                <p className="text-muted-fg text-sm mt-0.5">
                  Stripe will send a receipt with your download link. Check spam if you don't see it.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <Download className="w-4 h-4 text-secondary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Download your PDF</p>
                <p className="text-muted-fg text-sm mt-0.5">
                  Works on any device — phone, tablet, or laptop. Save it for offline access.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-secondary transition-all duration-200 shadow-lg cursor-pointer"
            >
              Back to home
            </Link>
            <a
              href={`mailto:${CLIENT.email}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
            >
              Contact Olena
            </a>
          </div>

          <p className="text-xs text-muted-fg mt-8">
            {BOOK.guarantee} · Any issues? Email{' '}
            <a href={`mailto:${CLIENT.email}`} className="underline underline-offset-2">
              {CLIENT.email}
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
