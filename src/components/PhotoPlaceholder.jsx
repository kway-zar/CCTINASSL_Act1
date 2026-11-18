function PhotoPlaceholder({ label, wide = false }) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`flex items-center justify-center rounded-xl border border-dashed border-[#d9c6af] bg-[#f4ece2] text-xs font-medium text-[#9b8067] ${
        wide ? 'aspect-[16/8] min-h-44' : 'aspect-[4/3]'
      }`}
    >
      Photo placeholder
    </div>
  )
}

export default PhotoPlaceholder
