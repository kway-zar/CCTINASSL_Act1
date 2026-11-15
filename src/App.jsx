import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const page = path === '/shop'
    ? <ShopPage />
    : path === '/menu'
      ? <MenuPage />
      : <LandingPage />

  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  )
}

export default App
