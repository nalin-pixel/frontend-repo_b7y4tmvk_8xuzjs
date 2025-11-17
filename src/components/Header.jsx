import { useState } from 'react'
import { Menu } from 'lucide-react'

const palette = {
  primary: '#B0E0E6',
  primary2: '#ADD8E6',
  primary3: '#87CEEB',
  accent: '#4A90A4',
  text: '#1A1A1A',
  gray: '#F5F5F5',
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200" style={{ height: 80 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border-2" style={{ borderColor: palette.accent }}></div>
          <div className="text-lg font-semibold tracking-tight" style={{ color: palette.text }}>
            Pro Windows Moscow
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: palette.text }}>
          <button onClick={() => scrollTo('about')} className="hover:opacity-70 transition">About Us</button>
          <button onClick={() => scrollTo('services')} className="hover:opacity-70 transition">Services</button>
          <button onClick={() => scrollTo('portfolio')} className="hover:opacity-70 transition">Portfolio</button>
          <button onClick={() => scrollTo('contacts')} className="hover:opacity-70 transition">Contacts</button>
        </nav>
        <div className="hidden md:block">
          <a
            href="#contact-form"
            className="px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: palette.accent, color: '#fff', borderRadius: 4 }}
          >
            Book Consultation
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu color={palette.accent} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <button onClick={() => scrollTo('about')} className="text-left">About Us</button>
            <button onClick={() => scrollTo('services')} className="text-left">Services</button>
            <button onClick={() => scrollTo('portfolio')} className="text-left">Portfolio</button>
            <button onClick={() => scrollTo('contacts')} className="text-left">Contacts</button>
            <a href="#contact-form" className="mt-2 px-4 py-2 text-sm font-medium text-center" style={{ backgroundColor: palette.accent, color: '#fff', borderRadius: 4 }}>Book Consultation</a>
          </div>
        </div>
      )}
    </header>
  )
}
