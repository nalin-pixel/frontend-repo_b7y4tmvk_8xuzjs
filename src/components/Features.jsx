import { Star, ShieldCheck, Clock, PhoneCall } from 'lucide-react'

const palette = {
  accent: '#4A90A4',
  text: '#1A1A1A',
}

const features = [
  { icon: Star, title: '10+ Years of Experience', desc: 'Hundreds of successful installations across Moscow and the region.' },
  { icon: ShieldCheck, title: '10-Year Warranty', desc: 'We stand behind our products and workmanship for a decade.' },
  { icon: PhoneCall, title: 'Free Consultation', desc: 'Transparent recommendations and pricing with no hidden fees.' },
  { icon: Clock, title: 'Fast Installation', desc: 'From measurement to installation in as little as one day.' },
]

export default function Features() {
  return (
    <section id="about" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 border bg-white" style={{ borderLeft: `4px solid ${i % 2 === 0 ? palette.accent : '#ADD8E6'}`, borderRadius: 4 }}>
              <f.icon color={palette.accent} size={40} />
              <h3 className="mt-4 font-semibold" style={{ color: palette.text }}>{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
