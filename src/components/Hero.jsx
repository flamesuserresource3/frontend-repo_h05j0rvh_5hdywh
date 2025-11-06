import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
              New drop
              <span className="inline-flex items-center gap-1 text-indigo-600">
                • Sustainable collection
              </span>
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Elevate your everyday
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Discover curated pieces crafted with premium materials and mindful design. Built to last, designed to love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white font-medium hover:bg-gray-900">
                Shop bestsellers
                <ArrowRight size={18} />
              </a>
              <a href="#categories" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-800 font-medium hover:bg-gray-50">
                Browse categories
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Free shipping over $50 • 30-day returns • 24/7 support</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1974&auto=format&fit=crop"
                alt="Featured collection"
                className="h-full w-full object-cover opacity-90 mix-blend-lighten"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 w-48">
              <div className="text-sm font-semibold">Weekend Essentials</div>
              <div className="text-xs text-gray-500">Just dropped • 12 items</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
