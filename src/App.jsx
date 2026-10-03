import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Highlights from './components/Highlights.jsx'
import Menu from './components/Menu.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><About /><Highlights /><Menu /><WhyChoose /><Gallery /><Reviews /><Contact /><FinalCTA /></main><Footer /></>
}
