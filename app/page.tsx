import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Blog from '@/components/Blog'
import Values from '@/components/Values'
import MarketPotential from '@/components/MarketPotential'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Products />
      <Blog />
      <Values />
      <MarketPotential />
      <Footer />
    </main>
  )
}

