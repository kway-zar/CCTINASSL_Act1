import { useMemo, useState } from 'react'
import { useProducts } from '../hooks/useProducts.js'

const categories = ['All', 'Coffee', 'Refreshers', 'Non-Coffee', 'Pastries']
const money = (amount) => `₱${amount.toLocaleString('en-PH')}`

function ShopShowcase() {
  const { products, loading, error } = useProducts()
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedSizes, setSelectedSizes] = useState({})
  const [quantities, setQuantities] = useState({})
  const [cart, setCart] = useState({})

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category
    return matchesCategory && product.name.toLowerCase().includes(search.trim().toLowerCase())
  }), [products, category, search])

  const cartItems = Object.entries(cart)
  const itemCount = cartItems.reduce((sum, [, item]) => sum + item.quantity, 0)
  const total = cartItems.reduce((sum, [, item]) => sum + item.price * item.quantity, 0)

  function changeQuantity(productId, amount) {
    setQuantities((current) => ({
      ...current,
      [productId]: Math.max(1, (current[productId] || 1) + amount),
    }))
  }

  function addToCart(product, size) {
    const key = `${product.slug}-${size.label}`
    const amount = quantities[product.slug] || 1
    setCart((current) => ({
      ...current,
      [key]: {
        product,
        size: size.label,
        price: size.price,
        quantity: (current[key]?.quantity || 0) + amount,
      },
    }))
  }

  function changeCartQuantity(key, amount) {
    setCart((current) => {
      const nextQuantity = current[key].quantity + amount
      if (nextQuantity <= 0) {
        const nextCart = { ...current }
        delete nextCart[key]
        return nextCart
      }
      return { ...current, [key]: { ...current[key], quantity: nextQuantity } }
    })
  }

  function removeCartItem(key) {
    setCart((current) => {
      const nextCart = { ...current }
      delete nextCart[key]
      return nextCart
    })
  }

  return (
    <main className="flex-1 bg-[#fffaf4] px-4 py-8 text-[#392316] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 text-left">
          <p className="text-xs font-bold tracking-[0.2em] text-[#9b5b28]">KOPI_KO ORDERING</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Shop</h1>
          <p className="mt-2 text-sm text-[#77685c]">Choose a size, add your favorites, and keep track of your order.</p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <section aria-label="Shop items">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex min-h-11 items-center gap-2 rounded-full border border-[#eee2d3] bg-white px-4 text-sm text-[#77685c] sm:w-72">
                <span aria-hidden="true">⌕</span>
                <span className="sr-only">Search items</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search items"
                  className="min-w-0 flex-1 bg-transparent text-[#392316] outline-none placeholder:text-[#9b9187]"
                />
              </label>
              <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter by category">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      category === item
                        ? 'border-[#422412] bg-[#422412] text-white'
                        : 'border-[#e5d7c6] bg-[#fffaf4] text-[#56371f] hover:bg-[#f4ece2]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <p role="status" className="rounded-2xl border border-[#eee5db] bg-white p-8 text-center text-sm text-[#77685c]">Loading products...</p>
            ) : error ? (
              <p role="alert" className="rounded-2xl border border-[#eee5db] bg-white p-8 text-center text-sm text-[#77685c]">{error}</p>
            ) : visibleProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
                {visibleProducts.map((product) => {
                  const selectedSize = product.sizes[selectedSizes[product.slug] || 0]
                  return (
                    <article key={product._id} className="rounded-xl border border-[#eee5db] bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-4">
                      {product.image && <img src={product.image} alt={`${product.name} photo`} loading="lazy" className="h-32 w-full rounded-lg object-cover" />}
                      <div className="mt-3 flex min-h-10 items-start justify-between gap-2">
                        <h2 className="text-sm font-bold leading-5 text-[#392316]">{product.name}</h2>
                        {selectedSize && <span className="shrink-0 text-sm font-bold text-[#392316]">{money(selectedSize.price)}</span>}
                      </div>
                      <p className="mt-1 text-[11px] text-[#8a6a43]">{product.category}</p>
                      <fieldset className="mt-3">
                        <legend className="mb-1 text-[11px] font-semibold text-[#694329]">Size</legend>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size, index) => (
                            <button
                              key={size.label}
                              type="button"
                              aria-pressed={(selectedSizes[product.slug] || 0) === index}
                              onClick={() => setSelectedSizes((current) => ({ ...current, [product.slug]: index }))}
                              className={`rounded-full border px-3 py-1 text-[11px] font-medium transition ${
                                (selectedSizes[product.slug] || 0) === index
                                  ? 'border-[#e9d8c1] bg-[#f4ece2] text-[#56371f]'
                                  : 'border-[#eee2d3] bg-white text-[#77685c] hover:bg-[#fffaf4]'
                              }`}
                            >
                              {size.label}
                            </button>
                          ))}
                        </div>
                      </fieldset>
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center rounded-full border border-[#eee2d3] bg-[#fffaf4]">
                          <button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => changeQuantity(product.slug, -1)} className="px-3 py-1.5 text-[#694329]">−</button>
                          <span className="min-w-5 text-center text-xs">{quantities[product.slug] || 1}</span>
                          <button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => changeQuantity(product.slug, 1)} className="px-3 py-1.5 text-[#694329]">+</button>
                        </div>
                        <button type="button" disabled={!selectedSize} onClick={() => addToCart(product, selectedSize)} className="rounded-lg bg-[#422412] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#63391d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28] disabled:cursor-not-allowed disabled:bg-[#b9aa9a] sm:px-4">
                          Add to Cart
                        </button>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <p className="rounded-2xl border border-[#eee5db] bg-white p-8 text-center text-sm text-[#77685c]">No items match your search.</p>
            )}
          </section>

          <aside className="rounded-2xl border border-[#eee5db] bg-[#fffaf4] p-5 text-left shadow-sm lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#392316]">Cart summary</h2>
              <span className="rounded-full bg-[#f4ece2] px-2.5 py-1 text-xs font-semibold text-[#694329]">{itemCount}</span>
            </div>
            {cartItems.length > 0 ? (
              <>
                <ul className="mt-4 divide-y divide-[#eee5db]">
                  {cartItems.map(([key, item]) => (
                    <li key={key} className="flex items-center gap-3 py-3">
                      {item.product.image && <img src={item.product.image} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover" />}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-[#392316]">{item.product.name}</p>
                        <p className="text-[11px] text-[#77685c]">{item.size} · {money(item.price)}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1 rounded-full bg-white">
                        <button type="button" aria-label={`Remove one ${item.product.name}`} onClick={() => changeCartQuantity(key, -1)} className="px-2 py-1 text-[#694329]">−</button>
                        <span className="text-xs">{item.quantity}</span>
                        <button type="button" aria-label={`Add one ${item.product.name}`} onClick={() => changeCartQuantity(key, 1)} className="px-2 py-1 text-[#694329]">+</button>
                      </div>
                      <button
                        type="button"
                        aria-label={`Delete ${item.product.name} from cart`}
                        onClick={() => removeCartItem(key)}
                        className="rounded-lg p-2 text-[#77685c] transition hover:bg-[#f4ece2] hover:text-[#422412] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28]"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 7h16M10 11v6m4-6v6M5 7l1 14h12l1-14M9 7V4h6v3" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex justify-between border-t border-[#eee5db] pt-4 text-sm font-bold">
                  <span>Total</span>
                  <span>{money(total)}</span>
                </div>
              </>
            ) : (
              <p className="mt-4 rounded-xl bg-white p-4 text-sm leading-6 text-[#77685c]">Your cart is empty. Add something you love.</p>
            )}
            <button type="button" disabled={cartItems.length === 0} className="mt-5 w-full rounded-lg bg-[#422412] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#63391d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28] disabled:cursor-not-allowed disabled:bg-[#b9aa9a]">
              Checkout
            </button>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default ShopShowcase
