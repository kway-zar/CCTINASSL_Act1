import { useEffect, useState } from 'react'
import PhotoPlaceholder from './PhotoPlaceholder.jsx'

const values = [
  {
    title: 'Thoughtful coffee',
    detail: 'We choose approachable coffees with comforting flavor, roasted to bring out the best in every cup.',
  },
  {
    title: 'Made with care',
    detail: 'From the first pour to the final details, we want every visit to feel warm, easy, and welcoming.',
  },
  {
    title: 'Good together',
    detail: 'Coffee is better shared. Kopi_Ko is a place for friendly conversations and small everyday pauses.',
  },
]

function AboutShowcase() {
  const [team, setTeam] = useState([])
  const [loadingTeam, setLoadingTeam] = useState(true)
  const [teamError, setTeamError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadTeam() {
      try {
        const response = await fetch('/api/team', { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Unable to load the team (${response.status}).`)
        }

        const data = await response.json()
        if (!Array.isArray(data)) {
          throw new Error('The team API returned an invalid response.')
        }

        setTeam(data)
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setTeamError(loadError instanceof Error ? loadError.message : 'Unable to load the team.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingTeam(false)
        }
      }
    }

    loadTeam()
    return () => controller.abort()
  }, [])

  return (
    <main className="flex-1 bg-[#fffaf4] text-[#392316]">
      <header className="bg-[#f7efe3] px-4 py-12 text-center sm:px-8 sm:py-16">
        <p className="text-xs font-bold tracking-[0.2em] text-[#9b5b28]">A LITTLE ABOUT US</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Coffee made for good days</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#77685c] sm:text-base">
          We are Kopi_Ko, a neighborhood coffee stop built around thoughtful brews, familiar comforts, and the people we share them with.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 sm:px-8 sm:py-14 md:grid-cols-2 lg:px-12" aria-labelledby="our-story">
        <PhotoPlaceholder label="Kopi_Ko coffee shop and baristas" wide />
        <div className="rounded-2xl border border-[#eee5db] bg-white p-6 text-left shadow-sm sm:p-8">
          <p className="text-xs font-bold tracking-[0.15em] text-[#9b5b28]">OUR STORY</p>
          <h2 id="our-story" className="mt-2 text-2xl font-bold sm:text-3xl">A cozy corner for every kind of coffee person</h2>
          <p className="mt-4 text-sm leading-7 text-[#77685c]">
            Kopi_Ko began with a simple idea: make really good coffee feel welcoming and easy to enjoy. What started as a small neighborhood concept grew into a gathering place for quick morning pick-me-ups, slow afternoons, and everything in between.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#77685c]">
            Today, we keep that same spirit in every cup. Our menu brings together familiar favorites and fresh discoveries, made with care by a team that loves sharing coffee.
          </p>
          <a href="/shop" className="mt-5 inline-flex rounded-lg bg-[#422412] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#63391d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28]">
            Find your next favorite
          </a>
        </div>
      </section>

      <section className="bg-[#f7efe3] px-4 py-10 sm:px-8 sm:py-14 lg:px-12" aria-labelledby="our-values">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-7 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.15em] text-[#9b5b28]">WHAT MATTERS TO US</p>
            <h2 id="our-values" className="mt-2 text-2xl font-bold sm:text-3xl">The little things behind every cup</h2>
            <p className="mt-2 text-sm leading-6 text-[#77685c]">A few simple values guide how we make coffee and welcome our community.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.title} className="rounded-xl border border-[#eee2d3] bg-white p-5 text-left shadow-sm sm:p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4ece2] text-sm font-bold text-[#694329]">0{index + 1}</span>
                <h3 className="mt-4 text-base font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#77685c]">{value.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-14 lg:px-12" aria-labelledby="meet-the-team">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold tracking-[0.15em] text-[#9b5b28]">THE PEOPLE BEHIND THE POUR</p>
          <h2 id="meet-the-team" className="mt-2 text-2xl font-bold sm:text-3xl">Meet our coffee crew</h2>
          <p className="mt-2 text-sm text-[#77685c]">A friendly team with a shared love for good coffee and good company.</p>
        </div>
        {loadingTeam ? (
          <p role="status" className="py-8 text-center text-sm text-[#77685c]">Loading our coffee crew...</p>
        ) : teamError ? (
          <p role="alert" className="py-8 text-center text-sm text-[#9b3d2c]">{teamError}</p>
        ) : team.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member._id} className="rounded-xl border border-[#eee5db] bg-white p-3 text-left shadow-sm sm:p-4">
                <PhotoPlaceholder label={`${member.name}, ${member.role}`} image={member.image} />
                <div className="p-1 pt-4">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-[#9b5b28]">{member.role}</p>
                  <p className="mt-2 text-sm leading-6 text-[#77685c]">{member.detail}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="py-8 text-center text-sm text-[#77685c]">Our coffee crew will be introduced here soon.</p>
        )}
      </section>

      <section className="border-t border-[#eee2d3] bg-white px-4 py-8 sm:px-8" aria-labelledby="visit-kopi-ko">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-left sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.15em] text-[#9b5b28]">COME SAY HELLO</p>
            <h2 id="visit-kopi-ko" className="mt-1 text-xl font-bold">Your neighborhood coffee break is waiting</h2>
            <p className="mt-1 text-sm text-[#77685c]">Visit us Monday–Saturday, 8:00 AM–6:00 PM. We would love to make you a cup.</p>
          </div>
          <a href="/menu" className="inline-flex shrink-0 rounded-lg border border-[#e5d7c6] bg-[#fffaf4] px-5 py-2.5 text-sm font-semibold text-[#56371f] transition hover:bg-[#f4ece2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28]">
            Explore the menu
          </a>
        </div>
      </section>
    </main>
  )
}

export default AboutShowcase
