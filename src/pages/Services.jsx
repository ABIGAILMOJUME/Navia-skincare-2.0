import React from 'react'
import ServicesParallax from '../components/ServicesParallax/servicesparallax';
import ServicesExperience from '../components/ServicesExperience/servicesexperience';
import Consultations from '../components/Consultations/consultations';
import Specials from '../components/Specials/Specials'
import FAQs from '../components/FAQs/faqs';

const Services = () => {
  return (
    <div>
      <ServicesParallax/>
      <ServicesExperience/>
      <Consultations/>
      <Specials/>
      <FAQs/>
    </div>
  )
}

export default Services;