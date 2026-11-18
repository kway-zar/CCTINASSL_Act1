function ContactIcon({ type }) {
  const paths = {
    phone: <path d="M7 3H4.8A1.8 1.8 0 0 0 3 4.8C3 13.7 10.3 21 19.2 21a1.8 1.8 0 0 0 1.8-1.8V17l-4.5-2-2 2a14 14 0 0 1-5.7-5.7l2-2L9 4.8 7 3Z" />,
    message: <><path d="M20 11.5a7.5 7.5 0 0 1-11.2 6.5L4 19l1-4.2A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8 9.5c1.2 2.2 2.3 3.3 4.5 4.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    location: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

export default ContactIcon
