import './servicesparallax.css'
import { PiArrowRightThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
const ServicesParallax = () => {
    return ( 
        <>
         <div className='services-parallaximage-container'>
                <h2 className='services-parallax-title-text'>Results-Driven <br />skincare Services </h2>
                <h3 className='services-parallax-subtitle-text'>personalized treatments made just for You</h3>
                <p className='services-parallax-para-text'>Write an introduction of your services right here. Everyone needs a <br />
                    friend. Friends are the most valuable things in the world.</p>
                <div className='services-parallax-btn-container'>
                    <Link to='/bookings'>
                    <button className='services-parallax-btn'>book an appointment <span className='services-parallax-icon'><PiArrowRightThin/></span></button>
                    </Link>
                </div>
        </div>

        <div className='services-parallax-div-2'>
        <h2 className='services-parallax-title-text-2'>Results-Driven skincare Services </h2>
                <h3 className='services-parallax-subtitle-text-2'>personalized treatments <br />made just for You</h3>
                <p className='services-parallax-para-text-2'>Write an introduction of your services right here. Everyone needs a 
                    friend. Friends are the most valuable things in the world.</p>
                <div className='services-parallax-btn-container-2'>
                <Link to='/bookings'>
                <button className='services-parallax-btn-2'>book an appointment <span className='services-parallax-icon'><PiArrowRightThin/></span></button>
                    </Link>
                </div>
        </div>
        </>
       
     );
}
 
export default ServicesParallax;