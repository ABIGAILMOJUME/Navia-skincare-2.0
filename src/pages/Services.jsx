import React from 'react'
import ServicesParallax from '../components/ServicesParallax/servicesparallax';
import ServicesExperience from '../components/ServicesExperience/servicesexperience';
import Consultations from '../components/Consultations/consultations';
import Specials from '../components/Specials/Specials'
import FAQs from '../components/FAQs/faqs';
import ServicesParallax2 from '../components/ServicesParallax2/servicesparallax2';
import Footer from '../components/Footer/Footer'
import PhotoGrid from '../components/PhotoGrid/photogrid'
const Services = () => {
  return (
    <div>
      <ServicesParallax/>
      <ServicesExperience/>
      <Consultations/>
      <Specials/>
      <FAQs/>
      <ServicesParallax2/>
      <Footer/>
      <PhotoGrid/>
    </div>
  )
}

export default Services;