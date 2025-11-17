export default function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: '#2A2A2A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 text-sm">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-semibold">Pro Windows Moscow</div>
            <p className="mt-2">Professional sale and installation of plastic windows in Moscow and Moscow Region.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Contacts</div>
            <ul className="mt-2 space-y-1">
              <li>+7 (495) 000-00-00</li>
              <li>info@prowindows.moscow</li>
              <li>Moscow, Tverskaya St, 1</li>
              <li>Mon-Fri 9:00-18:00, Sat 10:00-16:00</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Social Media</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">VKontakte</a></li>
              <li><a href="#" className="hover:underline">Odnoklassniki</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Pro Windows Moscow. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
