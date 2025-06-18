import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import MainServices from '@/components/sections/MainServices'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MainServices />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  )
} 