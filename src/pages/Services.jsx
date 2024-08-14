import React from 'react'
import ServicesParallax from '../components/ServicesParallax/servicesparallax';
import ServicesExperience from '../components/ServicesExperience/servicesexperience';
import Consultations from '../components/Consultations/consultations';

const Services = () => {
  return (
    <div>
      <ServicesParallax/>
      <ServicesExperience/>
      <Consultations/>
    </div>
  )
}

export default Services;