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

export default SaleBanner
