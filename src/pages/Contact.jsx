import React from 'react'
import ContactUs from '../components/ContactUs/contactus';
import ContactForm from '../components/ContactForm/contactform';
import Contactgrid from '../components/ContactGrid/contacttgrid';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer'
import PhotoGrid from '../components/PhotoGrid/photogrid'
const Contact = () => {
  return (
    <div>
      <ContactUs/>
      <ContactForm/>
      <Contactgrid/>
      <Reviews/>
      <Footer/>
      <PhotoGrid/>
    </div>
  )
}

export default Contact;