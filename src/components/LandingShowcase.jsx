const benefits = [
  {
    title: 'Free Shipping',
    detail: 'On orders over $50',
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

const products = [
  { name: 'Premium Arabica Coffee Beans', price: '$14.99', reviews: 245, color: '#28231f', roast: 'ARABICA' },
  { name: 'Classic House Blend', price: '$13.99', reviews: 189, color: '#9b5b28', roast: 'HOUSE BLEND' },
  { name: 'Dark Roast Espresso', price: '$15.99', reviews: 312, color: '#29231e', roast: 'DARK ROAST' },
  { name: 'Hazelnut Flavored Coffee', price: '$12.99', reviews: 156, color: '#b67a43', roast: 'HAZELNUT' },
]

function BenefitItem({ title, detail, icon }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center text-[#392316]">
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {icon}
      </svg>
      <p className="text-xs font-bold">{title}</p>
      <p className="text-[11px] text-[#77685c]">{detail}</p>
    </div>
  )
}

function PromoCard({ title, subtitle, image, imagePosition = 'center' }) {
  return (
    <article
      className="group relative flex min-h-40 overflow-hidden rounded-2xl bg-cover bg-center text-white shadow-sm sm:min-h-48"
      style={{ backgroundImage: `url("${image}")`, backgroundPosition: imagePosition }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#28170f]/85 via-[#28170f]/35 to-transparent transition-colors group-hover:from-[#28170f]/90" />
      <div className="relative z-10 flex max-w-[60%] flex-col items-start justify-center gap-2 p-5 sm:p-7">
        <p className="text-xs font-medium tracking-wide text-white/85">{subtitle}</p>
        <h3 className="text-xl font-bold leading-tight sm:text-2xl">{title}</h3>
        <button type="button" className="mt-1 rounded-lg bg-[#422412] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#63391d]">
          Shop Now
        </button>
      </div>
    </article>
  )
}

function ProductCard({ name, price, reviews }) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#eee5db] bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-40 items-center justify-center bg-[#f7f2eb] p-4 sm:h-48">
       
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="min-h-10 text-left text-xs font-semibold leading-5 text-[#392316] sm:text-sm">{name}</h3>
        <p className="mt-1 text-sm font-bold text-[#392316] text-start">{price}</p>
        <div className="mt-1 flex items-center gap-1 text-[11px] text-[#8a6a43]" aria-label={`Rated 5 out of 5 stars, ${reviews} reviews`}>
          <span aria-hidden="true">★★★★★</span>
          <span className="text-[#77685c]">({reviews})</span>
        </div>
      </div>
    </article>
  )
}

function SaleBanner() {
  return (
    <article
      className="relative flex min-h-40 items-center overflow-hidden rounded-2xl bg-cover bg-center text-white shadow-sm sm:min-h-52"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=85")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#24150e]/95 via-[#24150e]/65 to-[#24150e]/10" />
      <div className="relative z-10 p-6 sm:p-10">
        <p className="text-sm font-semibold text-[#e4c9a7]">Summer Sale</p>
        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Up to 30% Off</h2>
        <button type="button" className="mt-4 rounded-lg bg-[#fffaf3] px-5 py-2 text-sm font-semibold text-[#392316] transition hover:bg-[#e9d8c1]">
          Shop Now
        </button>
      </div>
    </article>
  )
}

export default function LandingShowcase() {
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {products.map((product) => <ProductCard key={product.name} {...product} />)}
          </div>
        </div>

        <SaleBanner />
      </div>
    </section>
  )
}
