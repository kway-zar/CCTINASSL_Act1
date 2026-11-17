import { useMemo, useState } from 'react'

const articles = [
  {
    id: 'morning-brew',
    category: 'Brewing Guides',
    title: 'A calmer morning starts with a better cup',
    excerpt: 'A few small steps can turn your everyday coffee into a slower, more satisfying ritual.',
    author: 'Kopi_Ko Journal',
    date: 'May 18, 2025',
    readTime: '4 min read',
  },
  {
    id: 'bean-to-cup',
    category: 'Behind the Beans',
    title: 'From carefully chosen beans to your favorite mug',
    excerpt: 'Get to know the thoughtful steps behind a balanced, comforting cup of coffee.',
    author: 'The Kopi_Ko Team',
    date: 'May 12, 2025',
    readTime: '5 min read',
  },
  {
    id: 'iced-coffee',
    category: 'Brewing Guides',
    title: 'How to make a smooth iced coffee at home',
    excerpt: 'Keep your iced coffee full of flavor with a simple brew-and-chill method.',
    author: 'Kopi_Ko Journal',
    date: 'May 6, 2025',
    readTime: '3 min read',
  },
  {
    id: 'coffee-pairings',
    category: 'Pairings',
    title: 'The little treats that love coffee back',
    excerpt: 'A guide to pairing your favorite roast with pastries and afternoon snacks.',
    author: 'Kopi_Ko Journal',
    date: 'April 28, 2025',
    readTime: '4 min read',
  },
  {
    id: 'latte-at-home',
    category: 'Brewing Guides',
    title: 'A cozy latte, even without a fancy machine',
    excerpt: 'Make a comforting milk-and-coffee favorite with tools you already have.',
    author: 'The Kopi_Ko Team',
    date: 'April 20, 2025',
    readTime: '3 min read',
  },
  {
    id: 'coffee-moments',
    category: 'Coffee Stories',
    title: 'Why the coffee break is worth keeping',
    excerpt: 'A small pause can make room for a conversation, a fresh thought, or a quiet moment.',
    author: 'Kopi_Ko Journal',
    date: 'April 11, 2025',
    readTime: '4 min read',
  },
]

const categories = ['All Stories', 'Brewing Guides', 'Behind the Beans', 'Pairings', 'Coffee Stories']

function PhotoPlaceholder({ label, featured = false }) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`flex items-center justify-center rounded-xl border border-dashed border-[#d9c6af] bg-[#f4ece2] text-xs font-medium text-[#9b8067] ${
        featured ? 'aspect-[16/8] min-h-44' : 'aspect-[4/3]'
      }`}
    >
      Photo placeholder
    </div>
  )
}

function BlogShowcase() {
  const [activeCategory, setActiveCategory] = useState('All Stories')
  const [search, setSearch] = useState('')

  const visibleArticles = useMemo(() => articles.filter((article) => {
    const matchesCategory = activeCategory === 'All Stories' || article.category === activeCategory
    const query = search.trim().toLowerCase()
    const matchesSearch = !query || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  }), [activeCategory, search])

  return (
    <main className="flex-1 bg-[#fffaf4] px-4 py-8 text-[#392316] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-[#9b5b28]">THE KOPI_KO JOURNAL</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Stories for coffee people</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#77685c]">
            Brewing tips, little coffee discoveries, and good reads to enjoy with your next cup.
          </p>
        </header>

        <section className="mb-10 grid items-center gap-6 rounded-2xl border border-[#eee5db] bg-white p-4 shadow-sm sm:p-6 md:grid-cols-2" aria-labelledby="featured-story">
          <PhotoPlaceholder label="featured coffee story" featured />
          <div className="text-left">
            <p className="text-xs font-bold tracking-[0.15em] text-[#9b5b28]">FEATURED STORY · {articles[0].category.toUpperCase()}</p>
            <h2 id="featured-story" className="mt-3 text-2xl font-bold leading-tight text-[#392316] sm:text-3xl">{articles[0].title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#77685c]">{articles[0].excerpt}</p>
            <p className="mt-3 text-xs text-[#8a6a43]">{articles[0].author} · {articles[0].date} · {articles[0].readTime}</p>
            <button type="button" className="mt-5 rounded-lg bg-[#422412] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#63391d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28]">
              Read featured story
            </button>
          </div>
        </section>

        <section aria-labelledby="latest-stories">
          <div className="mb-5 flex flex-col gap-4 text-left sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-[#9b5b28]">FRESH FROM THE JOURNAL</p>
              <h2 id="latest-stories" className="mt-1 text-2xl font-bold">Latest stories</h2>
            </div>
            <label className="flex min-h-10 items-center gap-2 rounded-lg border border-[#eee2d3] bg-white px-3 text-sm text-[#77685c] sm:w-64">
              <span aria-hidden="true">⌕</span>
              <span className="sr-only">Search stories</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search stories"
                className="min-w-0 flex-1 bg-transparent text-[#392316] outline-none placeholder:text-[#9b9187]"
              />
            </label>
          </div>

          <div className="mb-5 flex gap-2 overflow-x-auto pb-2" aria-label="Filter stories by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28] ${
                  activeCategory === category
                    ? 'border-[#422412] bg-[#422412] text-white'
                    : 'border-[#e5d7c6] bg-white text-[#56371f] hover:bg-[#f4ece2]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {visibleArticles.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleArticles.map((article) => (
                <article key={article.id} className="rounded-xl border border-[#eee5db] bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-4">
                  <PhotoPlaceholder label={article.title} />
                  <p className="mt-4 text-[10px] font-bold tracking-[0.12em] text-[#9b5b28]">{article.category.toUpperCase()}</p>
                  <h3 className="mt-2 text-base font-bold leading-6 text-[#392316]">{article.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#77685c]">{article.excerpt}</p>
                  <p className="mt-3 text-[11px] text-[#8a6a43]">{article.author} · {article.date} · {article.readTime}</p>
                  <button type="button" className="mt-4 text-sm font-semibold text-[#694329] transition hover:text-[#9b5b28] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28]">
                    Read now <span aria-hidden="true">→</span>
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-[#eee5db] bg-white p-8 text-center text-sm text-[#77685c]">No stories found. Try another search or category.</p>
          )}
        </section>

      </div>
    </main>
  )
}

export default BlogShowcase
