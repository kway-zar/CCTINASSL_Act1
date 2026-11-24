import BenefitItem from './BenefitItem.jsx'
import PromoCard from './PromoCard.jsx'
import ProductCard from './ProductCard.jsx'
import SaleBanner from './SaleBanner.jsx'
import { useProducts } from '../../scripts/hooks/useProducts.js'

const benefits = [
  {
    title: 'Free Shipping',
    detail: 'On orders over ₱2,500',
    icon: (
      <>
        <path d="M3 7h11v10H3z" />
        <path d="M14 10h4l3 3v4h-7z" />
        <circle cx="7.5" cy="18" r="1.5" />
        <circle cx="17.5" cy="18" r="1.5" />
      </>
    ),
  },
  {
    title: 'Freshly Roasted',
    detail: '100% Premium Beans',
    icon: <path d="M12 21c-5.2-2.2-8-6.1-7-11 3.8-.2 6.1 1.8 7 5 1-4.1 3.4-6.2 7-7 .5 5.7-1.6 10-7 13Zm0-1c-.2-4.1 1.5-7.5 5-10" />,
  },
  {
    title: 'Secure Payment',
    detail: 'Safe & Trusted',
    icon: (
      <>
        <path d="M12 3 19 6v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: '24/7 Support',
    detail: "We're Here to Help",
    icon: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="12" width="4" height="7" rx="2" />
        <rect x="17" y="12" width="4" height="7" rx="2" />
        <path d="M17 19c-.8 1.3-2.4 2-5 2" />
      </>
    ),
  },
]

export default function LandingShowcase() {
  const { products, loading, error } = useProducts()
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="bg-[#fffaf4] px-4 py-8 sm:px-8 sm:py-12 lg:px-12" aria-label="Coffee shop highlights">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 sm:gap-9">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {benefits.map((benefit) => <BenefitItem key={benefit.title} {...benefit} />)}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <PromoCard
            title="Espresso Collection"
            subtitle="Rich & Bold"
            image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
            imagePosition="center 55%"
          />
          <PromoCard
            title="Cold Brew Collection"
            subtitle="Smooth & Refreshing"
            image="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=85"
            imagePosition="center 55%"
          />
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#392316] sm:text-2xl">Our Best Sellers</h2>
            <button type="button" className="rounded-lg bg-[#f4ece2] px-4 py-2 text-xs font-semibold text-[#56371f] transition hover:bg-[#e9d8c1]">
              View All
            </button>
          </div>
          {loading ? (
            <p role="status" className="rounded-xl border border-[#eee5db] bg-white p-6 text-center text-sm text-[#77685c]">Loading best sellers...</p>
          ) : error ? (
            <p role="alert" className="rounded-xl border border-[#eee5db] bg-white p-6 text-center text-sm text-[#77685c]">{error}</p>
          ) : featuredProducts.length ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {featuredProducts.map((product) => {
                const startingPrice = product.sizes?.length
                  ? Math.min(...product.sizes.map((size) => size.price))
                  : null
                const price = startingPrice === null
                  ? 'Price unavailable'
                  : `From ₱${startingPrice.toLocaleString('en-PH')}`

                return (
                  <ProductCard
                    key={product._id}
                    name={product.name}
                    price={price}
                    image={product.image}
                    reviews={product.reviews}
                  />
                )
              })}
            </div>
          ) : (
            <p className="rounded-xl border border-[#eee5db] bg-white p-6 text-center text-sm text-[#77685c]">No products available yet.</p>
          )}
        </div>

        <SaleBanner />
      </div>
    </section>
  )
}
