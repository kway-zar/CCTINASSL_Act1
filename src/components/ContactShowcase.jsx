import ContactIcon from './ContactIcon.jsx'

const contactDetails = [
  { title: 'Call us', value: '+63 1 2345 6789', note: 'Mon–Sat, 12:00 AM–11:00 AM', icon: 'phone' },
  { title: 'Message us', value: '+63 123 456 7890', note: 'We are happy to help', icon: 'message' },
  { title: 'Email', value: 'hello@kopi-ko.com', note: 'Send us a note anytime', icon: 'mail' },
  { title: 'Visit our café', value: 'NU, Manila', note: 'Philippines', icon: 'location' },
]

function ContactShowcase() {
  return (
    <main className="flex-1 bg-[#fffaf4] text-[#392316]">
      <header className="bg-[#f7efe3] px-4 py-12 text-center sm:px-8 sm:py-16">
        <p className="text-xs font-bold tracking-[0.2em] text-[#9b5b28]">WE WOULD LOVE TO HEAR FROM YOU</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Contact Kopi_Ko</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#77685c] sm:text-base">
          Have a question, a kind word, or an idea to share? Find our details here and drop us a note.
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <section aria-labelledby="contact-information">
          <div className="mb-5 text-left">
            <p className="text-xs font-bold tracking-[0.15em] text-[#9b5b28]">SAY HELLO</p>
            <h2 id="contact-information" className="mt-2 text-2xl font-bold">Here’s how to reach us</h2>
            <p className="mt-2 text-sm leading-6 text-[#77685c]">Our friendly team is ready to help with café questions, feedback, or anything coffee-related.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {contactDetails.map((detail) => (
              <article key={detail.title} className="rounded-xl border border-[#eee5db] bg-white p-4 text-left shadow-sm sm:p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4ece2] text-[#694329]">
                  <ContactIcon type={detail.icon} />
                </span>
                <h3 className="mt-3 text-sm font-bold">{detail.title}</h3>
                <p className="mt-1 break-words text-sm font-medium text-[#56371f]">{detail.value}</p>
                <p className="mt-1 text-xs leading-5 text-[#77685c]">{detail.note}</p>
              </article>
            ))}
          </div>

          <div
            role="img"
            aria-label="Map placeholder for the Kopi_Ko café location"
            className="mt-4 flex aspect-[16/8] min-h-44 items-center justify-center rounded-xl border border-dashed border-[#d9c6af] bg-[#f4ece2] text-xs font-medium text-[#9b8067]"
          >
            Map placeholder
          </div>
        </section>

        <section className="rounded-2xl border border-[#eee5db] bg-white p-5 text-left shadow-sm sm:p-8" aria-labelledby="send-message">
          <p className="text-xs font-bold tracking-[0.15em] text-[#9b5b28]">DROP US A NOTE</p>
          <h2 id="send-message" className="mt-2 text-2xl font-bold">Send us a message</h2>
          <p className="mt-2 text-sm leading-6 text-[#77685c]">Fill in the details below and our team will be glad to hear from you.</p>
          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-[#56371f]">Name</label>
                <input id="contact-name" type="text" placeholder="Your name" className="min-h-11 w-full rounded-lg border border-[#eee2d3] bg-[#fffaf4] px-3 text-sm text-[#392316] outline-none placeholder:text-[#9b9187] focus:border-[#9b5b28]" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-[#56371f]">Email</label>
                <input id="contact-email" type="email" placeholder="you@example.com" className="min-h-11 w-full rounded-lg border border-[#eee2d3] bg-[#fffaf4] px-3 text-sm text-[#392316] outline-none placeholder:text-[#9b9187] focus:border-[#9b5b28]" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-semibold text-[#56371f]">Subject</label>
              <input id="contact-subject" type="text" placeholder="What can we help with?" className="min-h-11 w-full rounded-lg border border-[#eee2d3] bg-[#fffaf4] px-3 text-sm text-[#392316] outline-none placeholder:text-[#9b9187] focus:border-[#9b5b28]" />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-[#56371f]">Message</label>
              <textarea id="contact-message" rows="5" placeholder="Write your message here..." className="w-full resize-y rounded-lg border border-[#eee2d3] bg-[#fffaf4] px-3 py-2.5 text-sm text-[#392316] outline-none placeholder:text-[#9b9187] focus:border-[#9b5b28]" />
            </div>
            <button type="button" className="w-full rounded-lg bg-[#422412] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#63391d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5b28] sm:w-auto">
              Send message
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default ContactShowcase
