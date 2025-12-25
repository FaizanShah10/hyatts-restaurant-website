import React from 'react'
import HeroSection from '../sections/Hero'
import Specialities from '../sections/Specialities'
import About from '../sections/About'
import Gallery from '../sections/Gallery'
import Visit from '../sections/Visit'
import Menu from '../sections/Menu'
import Testimonials from '../sections/Testimonials'
import Footer from '../components/Footer'
import Contact from '../sections/Contact'
import WhatsAppButton from '../components/whatsappButton'

const Home = () => {
  return (
    <div>
      <WhatsAppButton/>
        <HeroSection />
      <Specialities />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Visit />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home