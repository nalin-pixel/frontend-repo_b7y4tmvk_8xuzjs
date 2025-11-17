import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white" style={{ color: '#1A1A1A' }}>
      <Header />
      <main className="space-y-4">
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
