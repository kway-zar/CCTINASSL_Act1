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

export default PromoCard
