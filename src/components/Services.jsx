const palette = {
  accent: '#4A90A4',
  text: '#1A1A1A',
}

const services = [
  {
    title: 'Plastic Window Sales',
    desc: 'Energy-efficient, noise-reducing windows for apartments, private homes, and commercial spaces. Multiple glazing and profile options to fit your budget and goals.',
    img: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?q=80&w=1500&auto=format&fit=crop',
  },
  {
    title: 'Installation & Assembly',
    desc: 'Professional measurement, careful dismantling, precise installation, and finishing. We keep your space clean and deliver a perfect fit and seal.',
    img: 'https://images.unsplash.com/photo-1581093458791-9d09d4954fb5?q=80&w=1500&auto=format&fit=crop',
  },
  {
    title: 'Warranty Service',
    desc: 'Full post-installation support: adjustments, hardware replacement, and scheduled maintenance for long-lasting comfort and reliability.',
    img: 'https://images.unsplash.com/photo-1515775538093-6b13a1a2a9a3?q=80&w=1500&auto=format&fit=crop',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8" style={{ color: palette.text }}>Our Services</h2>
        <div className="space-y-12">
          {services.map((s, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-8 items-center`}>
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-72 object-cover" style={{ borderRadius: 4 }} />
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-xl font-semibold" style={{ color: palette.text }}>{s.title}</h3>
                <p className="mt-3 text-gray-700">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
