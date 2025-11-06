import { ShoppingCart, Search, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center font-bold">e</div>
            <span className="text-lg font-semibold tracking-tight">Ecomarket</span>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3 grid place-items-center text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search for products, brands, and more"
                className="w-full rounded-lg border border-gray-200 bg-white/60 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black">
              <User size={18} />
              <span className="hidden sm:inline">Account</span>
            </button>
            <button className="relative inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 rounded-full bg-black text-white text-[10px] grid place-items-center">3</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
