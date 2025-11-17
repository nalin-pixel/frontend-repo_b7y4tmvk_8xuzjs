const items = [
  'https://images.unsplash.com/photo-1604014237800-1c9102c71f95?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523419409543-a2718b23a9f3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1200&auto=format&fit=crop',
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8" style={{ color: '#1A1A1A' }}>Examples of Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((src, i) => (
            <div key={i} className="relative group overflow-hidden" style={{ borderRadius: 4 }}>
              <img src={src} alt="Window project" className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-[#B0E0E6]/0 group-hover:bg-[#B0E0E6]/20 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
