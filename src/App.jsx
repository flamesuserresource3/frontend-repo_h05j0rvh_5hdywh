import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
