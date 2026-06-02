import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Book from '@/components/sections/Book'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background max-w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Book />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
