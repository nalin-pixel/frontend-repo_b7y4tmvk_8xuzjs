import Spline from '@splinetool/react-spline'

const palette = {
  primary: '#B0E0E6',
  primary2: '#ADD8E6',
  primary3: '#87CEEB',
  accent: '#4A90A4',
  text: '#1A1A1A',
}

export default function Hero() {
  return (
    <section className="relative" style={{ height: 650 }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/10 pointer-events-none" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-semibold leading-tight" style={{ color: palette.text, fontSize: '52px' }}>
            High-Quality Plastic Windows for Your Home
          </h1>
          <p className="mt-4 text-lg" style={{ color: '#333' }}>
            Sales, delivery and professional installation in Moscow and MO
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact-form" className="px-6 py-3 text-base font-medium" style={{ backgroundColor: palette.accent, color: '#fff', borderRadius: 4, transition: 'transform .3s' }} onMouseEnter={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={e=>e.currentTarget.style.transform='none'}>
              Get a Quote
            </a>
            <a href="#services" className="px-6 py-3 text-base font-medium border" style={{ borderColor: palette.accent, color: palette.accent, borderRadius: 4 }}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
