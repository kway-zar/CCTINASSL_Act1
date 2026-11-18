function ProductCard({ name, price, reviews, image }) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#eee5db] bg-white transition hover:-translate-y-1 hover:shadow-lg">
      {image ? (
        <img
          src={image}
          alt={`${name} photo`}
          loading="lazy"
          className="h-40 w-full object-cover sm:h-48"
        />
      ) : (
        <div className="h-40 bg-[#f7f2eb] sm:h-48" aria-hidden="true" />
      )}
      <div className="p-3 sm:p-4">
        <h3 className="min-h-10 text-left text-xs font-semibold leading-5 text-[#392316] sm:text-sm">{name}</h3>
        <p className="mt-1 text-sm font-bold text-[#392316] text-start">{price}</p>
        {typeof reviews === 'number' && reviews > 0 && (
          <div className="mt-1 flex items-center gap-1 text-[11px] text-[#8a6a43]" aria-label={`Rated 5 out of 5 stars, ${reviews} reviews`}>
            <span aria-hidden="true">★★★★★</span>
            <span className="text-[#77685c]">({reviews})</span>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProductCard
