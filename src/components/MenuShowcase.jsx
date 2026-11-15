import { useState } from 'react'
import catKopi from '../assets/cat-kopi.png'

const menuCategories = [
  {
    title: 'Coffee',
    intro: 'Espresso classics and slow-steeped favorites, made with our house coffee.',
    items: [
      { name: 'Espresso', image: catKopi, description: 'A short, concentrated shot with a smooth crema and dark chocolate notes.', price: '₱90', details: 'House espresso · Hot · 2 oz' },
      { name: 'Americano', image: catKopi, description: 'Espresso and hot water for a clean, balanced cup with a light body.', price: '₱120', details: 'Espresso + water · Hot or iced · 12 / 16 oz' },
      { name: 'Kopi_Ko Latte', image: catKopi, description: 'Our house espresso mellowed with silky steamed milk.', price: '₱145', details: 'Espresso + milk · Hot or iced · 12 / 16 oz' },
      { name: 'Caramel Cold Brew', image: catKopi, description: 'Slow-steeped coffee with a mellow caramel finish and smooth body.', price: '₱160', details: 'Cold brew + caramel · Iced · 16 oz' },
    ],
  },
  {
    title: 'Refreshers',
    intro: 'Bright, fruit-forward sips for a refreshing pick-me-up.',
    items: [
      { name: 'Mango Refresher', image: catKopi, description: 'Juicy mango and citrus over ice for a sunny, tropical, lightly tangy sip.', price: '₱140', details: 'Mango + citrus · Iced · 16 oz' },
      { name: 'Berry Citrus Refresher', image: catKopi, description: 'Mixed berries meet lemon and lime for a sweet-tart, crisp finish.', price: '₱140', details: 'Berry + citrus · Iced · 16 oz' },
      { name: 'Peach Green Tea', image: catKopi, description: 'Lightly brewed green tea with sweet peach and gentle tea notes.', price: '₱135', details: 'Green tea + peach · Iced · 16 oz' },
      { name: 'Strawberry Lemonade', image: catKopi, description: 'Fresh strawberry and lemon make a bright, sweet-tart drink.', price: '₱140', details: 'Strawberry + lemon · Iced · 16 oz' },
    ],
  },
  {
    title: 'Non-Coffee',
    intro: 'Cozy and chilled favorites without the coffee.',
    items: [
      { name: 'Iced Matcha Latte', image: catKopi, description: 'Earthy green tea whisked smooth with creamy milk and a mellow finish.', price: '₱155', details: 'Matcha + milk · Hot or iced · 12 / 16 oz' },
      { name: 'Iced Chocolate', image: catKopi, description: 'Rich cocoa blended with milk for a smooth, chocolatey treat.', price: '₱140', details: 'Cocoa + milk · Hot or iced · 12 / 16 oz' },
      { name: 'Vanilla Steamer', image: catKopi, description: 'Warm steamed milk with gentle vanilla sweetness; contains no coffee.', price: '₱120', details: 'Milk + vanilla · Hot · 12 oz' },
      { name: 'Strawberry Milk', image: catKopi, description: 'Creamy chilled milk with sweet strawberry flavor.', price: '₱140', details: 'Milk + strawberry · Iced · 16 oz' },
    ],
  },
  {
    title: 'Pastries',
    intro: 'Fresh-baked treats that pair perfectly with your drink.',
    items: [
      { name: 'Butter Croissant', image: catKopi, description: 'A crisp, flaky pastry with delicate layers and a soft buttery center.', price: '₱85', details: 'Wheat + dairy · Best served warm' },
      { name: 'Cinnamon Roll', image: catKopi, description: 'Soft, swirled dough with cinnamon sugar and a light vanilla glaze.', price: '₱100', details: 'Wheat + dairy · Best served warm' },
      { name: 'Chocolate Muffin', image: catKopi, description: 'A tender cocoa muffin with chocolate pieces throughout.', price: '₱90', details: 'Wheat + dairy · Contains chocolate' },
      { name: 'Blueberry Scone', image: catKopi, description: 'A tender, lightly sweet scone dotted with blueberries.', price: '₱85', details: 'Wheat + dairy · Best served warm' },
    ],
  },
]

function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].title)
  const category = menuCategories.find((item) => item.title === activeCategory)

  return (
    <main className="flex-1 bg-[#fffaf4] px-4 py-8 text-[#392316] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 text-left">
          <p className="text-xs font-bold tracking-[0.2em] text-[#9b5b28]">EXPLORE KOPI_KO</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Our Menu</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#77685c]">Browse each drink and pastry to see what it is made with and how it is served.</p>
        </header>

        <nav className="mb-6 flex gap-2 overflow-x-auto pb-2" aria-label="Menu categories">
          {menuCategories.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveCategory(item.title)}
              aria-pressed={activeCategory === item.title}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28] ${
                activeCategory === item.title
                  ? 'border-[#422412] bg-[#422412] text-white'
                  : 'border-[#e5d7c6] bg-white text-[#56371f] hover:bg-[#f4ece2]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>

        <section aria-labelledby="menu-category-title">
          <div className="mb-4 text-left">
            <h2 id="menu-category-title" className="text-xl font-bold">{category.title}</h2>
            <p className="mt-1 text-sm text-[#77685c]">{category.intro}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
            {category.items.map((item) => (
              <article key={item.name} className="rounded-xl border border-[#eee5db] bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-4">
                <img src={item.image} alt={`${item.name} photo`} loading="lazy" className="h-32 w-full rounded-lg object-cover" />
                <div className="mt-3 flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold leading-5">{item.name}</h3>
                  <span className="shrink-0 text-sm font-bold text-[#694329]">{item.price}</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#77685c]">{item.description}</p>
                <p className="mt-3 border-t border-[#eee5db] pt-2 text-[10px] font-medium text-[#9b5b28]">{item.details}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default MenuShowcase
