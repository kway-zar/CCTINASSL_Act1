import { useState } from 'react'
import { useProducts } from '../hooks/useProducts.js'

const categories = ['Coffee', 'Refreshers', 'Non-Coffee', 'Pastries']

function MenuShowcase() {
  const { products, loading, error } = useProducts()
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const categoryProducts = products.filter((product) => product.category === activeCategory)

  return (
    <main className="flex-1 bg-[#fffaf4] px-4 py-8 text-[#392316] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 text-left">
          <p className="text-xs font-bold tracking-[0.2em] text-[#9b5b28]">EXPLORE KOPI_KO</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Our Menu</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#77685c]">Browse products by category and see their available sizes and prices.</p>
        </header>

        <nav className="mb-6 flex gap-2 overflow-x-auto pb-2" aria-label="Menu categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveCategory(item)}
              aria-pressed={activeCategory === item}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28] ${
                activeCategory === item
                  ? 'border-[#422412] bg-[#422412] text-white'
                  : 'border-[#e5d7c6] bg-white text-[#56371f] hover:bg-[#f4ece2]'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <section aria-labelledby="menu-category-title">
          <div className="mb-4 text-left">
            <h2 id="menu-category-title" className="text-xl font-bold">{activeCategory}</h2>
          </div>
          {loading ? (
            <p role="status" className="rounded-2xl border border-[#eee5db] bg-white p-8 text-center text-sm text-[#77685c]">Loading menu...</p>
          ) : error ? (
            <p role="alert" className="rounded-2xl border border-[#eee5db] bg-white p-8 text-center text-sm text-[#77685c]">{error}</p>
          ) : categoryProducts.length ? (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
              {categoryProducts.map((product) => (
                <article key={product._id} className="rounded-xl border border-[#eee5db] bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-4">
                  {product.image && <img src={product.image} alt={`${product.name} photo`} loading="lazy" className="h-32 w-full rounded-lg object-cover" />}
                  <div className="mt-3 flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold leading-5">{product.name}</h3>
                    {product.sizes[0] && <span className="shrink-0 text-sm font-bold text-[#694329]">₱{product.sizes[0].price}</span>}
                  </div>
                  {product.sizes.length > 1 && (
                    <p className="mt-2 text-xs text-[#77685c]">
                      {product.sizes.map((size) => `${size.label}: ₱${size.price}`).join(' · ')}
                    </p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-[#eee5db] bg-white p-8 text-center text-sm text-[#77685c]">No products in this category yet.</p>
          )}
        </section>
      </div>
    </main>
  )
}

export default MenuShowcase
