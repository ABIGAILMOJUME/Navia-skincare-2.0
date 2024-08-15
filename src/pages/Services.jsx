import React from 'react'
import ServicesParallax from '../components/ServicesParallax/servicesparallax';
import ServicesExperience from '../components/ServicesExperience/servicesexperience';
import Consultations from '../components/Consultations/consultations';
import Specials from '../components/Specials/Specials'

const Services = () => {
  return (
    <div>
      <ServicesParallax/>
      <ServicesExperience/>
      <Consultations/>
      <Specials />
    </div>
  )
}

export default Services;