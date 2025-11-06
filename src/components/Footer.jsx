export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-3">Shop</div>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black">Best Sellers</a></li>
              <li><a href="#" className="hover:text-black">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Support</div>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Help Center</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Shipping</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Stay Updated</div>
            <p className="text-gray-600 mb-3">Join our newsletter for exclusive offers.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20" />
              <button className="rounded-lg bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ecomarket. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
