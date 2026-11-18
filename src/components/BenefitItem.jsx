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

export default BenefitItem
