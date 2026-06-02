import { CLIENT, BOOK } from '@/lib/constants'
import { Leaf, Mail } from 'lucide-react'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.01a4.85 4.85 0 01-1-.32z" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="font-serif text-lg font-semibold text-white">
                {CLIENT.brand}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {CLIENT.tagline}.<br />
              Real food. Real results. No nonsense.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {[
                { label: 'About Olena', href: '#about' },
                { label: 'The Book', href: '#book' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40">
              Get started
            </h3>
            <a
              href="/buy"
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold text-sm py-3 px-6 rounded-full hover:brightness-110 transition-all duration-200 w-fit cursor-pointer"
            >
              Get the Book — {BOOK.price}
            </a>

            <div className="flex items-center gap-3 mt-2">
              <a
                href={CLIENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={CLIENT.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                href={CLIENT.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href={`mailto:${CLIENT.email}`}
                className="p-2 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {year} {CLIENT.brand}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            {CLIENT.email}
          </p>
        </div>
      </div>
    </footer>
  )
}
