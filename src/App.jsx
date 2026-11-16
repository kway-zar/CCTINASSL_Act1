import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const page = path === '/shop'
    ? <ShopPage />
    : path === '/menu'
      ? <MenuPage />
      : path === '/blog'
        ? <BlogPage />
        : path === '/about'
          ? <AboutPage />
          : path === '/contact'
            ? <ContactPage />
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
