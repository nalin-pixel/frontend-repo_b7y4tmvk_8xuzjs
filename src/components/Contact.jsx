import { useState } from 'react'

const palette = {
  accent: '#4A90A4',
}

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus({ ok: true, msg: 'Thank you! We will contact you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: 'Could not send the form. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold" style={{ color: '#1A1A1A' }}>Contacts</h2>
          <p className="mt-3 text-gray-700">Mon-Fri 9:00-18:00, Sat 10:00-16:00</p>
          <div className="mt-6 space-y-2 text-gray-800">
            <div>Phone: +7 (495) 000-00-00</div>
            <div>Email: info@prowindows.moscow</div>
            <div>Address: Moscow, Tverskaya St, 1</div>
          </div>
          <div className="mt-8">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Moscow&output=embed"
              className="w-full h-64 border"
              style={{ borderRadius: 4 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold" style={{ color: '#1A1A1A' }}>Get a Free Consultation</h3>
          <form id="contact-form" onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input name="name" required className="w-full border px-3 py-2" style={{ borderRadius: 4 }} />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone</label>
              <input name="phone" required className="w-full border px-3 py-2" style={{ borderRadius: 4 }} />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input name="email" type="email" className="w-full border px-3 py-2" style={{ borderRadius: 4 }} />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea name="message" rows="4" className="w-full border px-3 py-2" style={{ borderRadius: 4 }} />
            </div>
            <button disabled={loading} className="px-5 py-3 text-white font-medium" style={{ backgroundColor: palette.accent, borderRadius: 4 }}>
              {loading ? 'Sending...' : 'Book Consultation'}
            </button>
            {status && (
              <div className={`text-sm mt-2 ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
