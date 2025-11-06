import { Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Minimal Leather Backpack',
    price: 129,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1932&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Everyday Running Sneakers',
    price: 89,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1932&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Soft Knit Sweater',
    price: 59,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1932&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Ceramic Mug Set',
    price: 32,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1974&auto=format&fit=crop',
  },
]

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 border border-gray-200">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
          <div className="text-right">
            <div className="text-base font-bold">${product.price}</div>
            <div className="flex items-center gap-1 text-xs text-gray-500 justify-end">
              <Star size={14} className="fill-yellow-400 stroke-yellow-400" />
              {product.rating}
            </div>
          </div>
        </div>
        <button className="mt-4 w-full rounded-lg bg-black text-white py-2 text-sm font-medium hover:bg-gray-900">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <section id="products" className="py-12 sm:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Bestsellers</h2>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
