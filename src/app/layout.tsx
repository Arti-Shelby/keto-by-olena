import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Keto by Olena | 30-Day Keto Reset',
  description:
    'Transform your life with the 30-Day Keto Reset PDF recipe book by Olena Marchenko. 80+ delicious keto recipes, a 4-week meal plan, and everything you need to reset your body.',
  openGraph: {
    title: 'Keto by Olena | 30-Day Keto Reset',
    description: '80+ keto recipes. 4-week meal plan. Instant PDF download.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
