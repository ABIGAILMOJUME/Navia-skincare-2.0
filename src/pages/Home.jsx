import React from 'react'
import Hero from '../components/Hero/Hero'
import ServicesMenu from '../components/Servicesmenu/ServicesMenu'
import Reviews from '../components/Reviews/Reviews'
import Products from '../components/Products/Products'
import Intro from '../components/Intro/Intro'
import Specials from '../components/Specials/Specials'
import ParallaxImage from '../components/ParallaxImage/ParallaxImage'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
    <Hero/>
    <ServicesMenu/>
    <Reviews/>
    <Products/>
    <Intro/>
    <Specials/>
    <ParallaxImage/>
    <Footer/>
    </div>
  )
}

export default Home;