import LandingShowcase from '../components/LandingShowcase.jsx'

function LandingPage() {

  return (
    <div className="flex flex-col overflow-y-auto overflow-x-hidden">
      <section>
        <div className="relative w-full bg-[url('https://w.wallhaven.cc/full/2k/wallhaven-2kzymx.jpg')] bg-cover h-[92vh] -scale-x-100">
          <div className="relative flex flex-col w-full -ml-20 items-start gap-5 text-orange-950 z-10 -scale-x-100 font-semibold z-100">
            <p className='mt-20 text-2xl'>Good Coffee, Good Day</p>
            <p className="text-8xl w-[45vw] text-start font-bold">Elevate <br/> your Coffee Experience</p>
            <p className="text-2xl w-[35vw] text-start font-normal">blah blah blablah blah blablah blah blablah blah blablah blah blahhhhh </p>
            <button className="bg-orange-950 text-orange-100 p-4 rounded-xl cursor-pointer z-20"> Shop Now </button>
          </div>

          <div className="absolute inset-0 bg-linear-240 from-35% from-orange-100/90 via-black/30 to-transparent"></div>
        </div>
      </section>
      <LandingShowcase />
    </div>
  )

}
export default LandingPage;
