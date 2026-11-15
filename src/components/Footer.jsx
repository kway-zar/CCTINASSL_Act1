import logo from '../assets/cup-of-drink.png'
import catKopi from '../assets/cat-kopi.png'
import facebookIcon from '../assets/FB.png'
import instagramIcon from '../assets/IG.png'
import pinterestIcon from '../assets/Pinterest.png'
import tiktokIcon from '../assets/Tiktok.png'

const benefits = [
  {
    title: 'Premium Quality',
    detail: 'Carefully selected beans for the best taste',
    icon: (
      <>
        <path d="M12 3 19 6v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Ethically Sourced',
    detail: 'Sustainably sourced from trusted farmers',
    icon: <path d="M12 21c-5.2-2.2-8-6.1-7-11 3.8-.2 6.1 1.8 7 5 1-4.1 3.4-6.2 7-7 .5 5.7-1.6 10-7 13Zm0-1c-.2-4.1 1.5-7.5 5-10" />,
  },
  {
    title: 'Expertly Roasted',
    detail: 'Roasted to perfection for rich aroma and flavor',
    icon: (
      <>
        <path d="M12 3c1.7 2.3 2.1 4.1 1.1 5.5C16 7.7 18 9.6 18 12a6 6 0 0 1-12 0c0-2 1.1-3.6 3.2-5.5-.1 2.1.7 3.2 1.8 3.5C12.2 8.3 12.5 6 12 3Z" />
        <path d="M12 14c1.1 1.2 1.5 2 1.5 3a1.5 1.5 0 0 1-3 0c0-1 .5-2 1.5-3Z" />
      </>
    ),
  },
  {
    title: 'Customer Satisfaction',
    detail: 'Thousands of happy customers who love our coffee',
    icon: (
      <>
        <path d="m12 3 2.3 2.1 3.1-.2.9 3 2.5 1.8-1 3 1 3-2.5 1.8-.9 3-3.1-.2L12 21l-2.3-2.1-3.1.2-.9-3L3.2 14l1-3-1-3 2.5-1.8.9-3 3.1.2L12 3Z" />
        <path d="m9.5 12 1.7 1.7 3.5-3.5" />
      </>
    ),
  },
]

const galleryPhotos = [
  { id: 'coffee-1', src: catKopi, alt: 'Coffee from Kopi_Ko' },
  { id: 'coffee-2', src: catKopi, alt: 'Coffee from Kopi_Ko' },
  { id: 'coffee-3', src: catKopi, alt: 'Coffee from Kopi_Ko' },
  { id: 'coffee-4', src: catKopi, alt: 'Coffee from Kopi_Ko' },
  { id: 'coffee-5', src: catKopi, alt: 'Coffee from Kopi_Ko' },
]

const footerLinks = [
  { title: 'Shop', links: ['All Coffee', 'Best Sellers', 'New Arrivals', 'Gift Sets', 'Accessories'] },
  { title: 'Menu', links: ['Espresso', 'Cappuccino', 'Latte', 'Mocha', 'Cold Brew'] },
  { title: 'Company', links: ['About Us', 'Our Story', 'Sustainability', 'Blog', 'Contact Us'] },
]

function Footer() {
  function handleSubscribe(event) {
    event.preventDefault()
  }

  return (
    <footer className="bg-[#fffaf4] text-[#392316]">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-10" aria-labelledby="why-choose-heading">
        <h2 id="why-choose-heading" className="mb-7 text-center text-xl font-bold sm:text-2xl">
          Why Choose Kopi_Ko?
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {benefits.map(({ title, detail, icon }) => (
            <div key={title} className="flex flex-col items-center gap-1 text-center">
              <svg className="mb-1 h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {icon}
              </svg>
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="max-w-40 text-xs leading-5 text-[#77685c]">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-8" aria-labelledby="social-heading">
        <h2 id="social-heading" className="mb-4 text-center text-base font-bold sm:text-lg">
          Follow Us @kopi_ko
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
          {galleryPhotos.map(({ id, src, alt }) => (
            <img
              key={id}
              src={src}
              alt={alt}
              className="aspect-[1.4] w-full rounded-xl object-cover shadow-sm"
            />
          ))}
        </div>
      </section>

      <section className="border-y border-[#eee2d3] bg-[#f7efe3]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-sm font-bold">Join Our Coffee Community!</h2>
            <p className="text-xs text-[#77685c]">Get updates, exclusive offers &amp; brewing tips.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full gap-2 md:max-w-md" aria-label="Newsletter signup">
            <label className="sr-only" htmlFor="footer-email">Your email</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-lg border border-[#eee2d3] bg-white px-4 py-2 text-sm text-[#392316] outline-none placeholder:text-[#9b9187] focus:border-[#8a5a36]"
            />
            <button type="submit" className="rounded-lg bg-[#422412] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#63391d]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-8 sm:px-8 md:grid-cols-4 md:gap-10">
        <div className="flex flex-col items-start">
          <div className="mb-3 flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-bold leading-tight">Kopi_Ko</p>
              <p className="text-[10px] leading-tight text-[#77685c]">kopi co.</p>
            </div>
          </div>
          <p className="max-w-44 text-left text-xs leading-5 text-[#77685c]">Brewed to perfection, made for you.</p>
          <div className="mt-4 flex items-center gap-1" aria-label="Social media">
            <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <img src={instagramIcon} alt="" className="h-7 w-7 object-contain" />
            </a>
            <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
              <img src={facebookIcon} alt="" className="h-7 w-7 object-contain" />
            </a>
            <a href="#" aria-label="Pinterest" className="transition-opacity hover:opacity-70">
              <img src={pinterestIcon} alt="" className="h-7 w-7 object-contain" />
            </a>
            <a href="#" aria-label="TikTok" className="transition-opacity hover:opacity-70">
              <img src={tiktokIcon} alt="" className="h-7 w-7 object-contain" />
            </a>
          </div>
        </div>

        {footerLinks.map(({ title, links }) => (
          <nav key={title} aria-label={`${title} links`} className="text-left">
            <h2 className="mb-2 text-sm font-bold">{title}</h2>
            <ul className="space-y-1 text-xs text-[#77685c]">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-[#392316]">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  )
}

export default Footer