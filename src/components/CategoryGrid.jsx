const categories = [
  { name: 'Apparel', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1932&auto=format&fit=crop' },
  { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Gadgets', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop' },
]

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Shop by category</h2>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a key={cat.name} href="#products" className="group relative overflow-hidden rounded-xl bg-gray-100">
              <img src={cat.image} alt={cat.name} className="h-40 sm:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white font-medium">{cat.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
