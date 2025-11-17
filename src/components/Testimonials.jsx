import { Star } from 'lucide-react'

const reviews = [
  { name: 'Anna K.', city: 'Moscow', text: 'Great service! Measurement, delivery, and installation were all on time. My apartment is so much quieter now.' },
  { name: 'Sergey M.', city: 'Khimki', text: 'Professional team and fair prices. The windows look perfect and open smoothly.' },
  { name: 'Elena P.', city: 'Odintsovo', text: 'Booked a consultation and got a quotation the same day. Installation was clean and fast.' },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8" style={{ color: '#1A1A1A' }}>Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 bg-white border" style={{ borderTop: '4px solid #ADD8E6', borderRadius: 4 }}>
              <div className="flex items-center gap-2 text-[#4A90A4]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={18} fill="#4A90A4" color="#4A90A4" />)}
              </div>
              <p className="mt-3 text-gray-700">“{r.text}”</p>
              <div className="mt-4 text-sm font-medium text-gray-900">{r.name} • {r.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
