import logo from '../assets/cup-of-drink.png'

function Navbar() {
  return (
    <div className="sticky top-0 z-50 mx-auto flex h-20 w-full flex-row flex-nowrap items-center justify-between bg-white shadow-xl/20">
      <div className="flex flex-row items-center gap-5 ml-20">
        <img src={logo} alt="" className="w-[42px]" />
        <p className="font-bold text-[#4f220e]">Kopi_Ko</p>
      </div>
      <nav className="w-[800px] font-bold text-[#4f220e] mr-20">
        <ul className="flex list-none flex-row justify-between">
          <li><a href="/" className="transition-colors hover:text-[#9b5b28]">Home</a></li>
          <li><a href="/shop" className="transition-colors hover:text-[#9b5b28]">Shop</a></li>
          <li><a href="/menu" className="transition-colors hover:text-[#9b5b28]">Menu</a></li>
          <li><a href="/about" className="transition-colors hover:text-[#9b5b28]">About Us</a></li>
          <li><a href="/blog" className="transition-colors hover:text-[#9b5b28]">Blog</a></li>
          <li><a href="/contact" className="transition-colors hover:text-[#9b5b28]">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar;
