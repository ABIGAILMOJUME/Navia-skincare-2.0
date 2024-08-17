import './faqs.css'
import sheetmask from '../../assets/sheetmask.jpg'
import { PiArrowCircleRightThin } from "react-icons/pi";
import { PiArrowRightThin } from "react-icons/pi";
import { Link } from 'react-router-dom';

const FAQs = () => {
    return ( 
        <div className='FAQ-main-container'>
                <div className='FAQ-image-container'>
                    <img src={sheetmask} alt="sheetmask" className='FAQ-image'/>
                </div>
                <div className='FAQ-text-container'>
                    <h1 className='FAQ-title'>EXPLORE FAQs</h1>
                    <h3 className='FAQ-h3'>CAN I HAVE ANY TREATMENTS WHILE PREGNANT?</h3>
                    <p className='FAQ-para'>Write your answers here. Embark on a rollercoaster of treatments that defy the laws of gravity. Our anti-gravity facials will have your skin floating like a cosmic balloon, and our time-traveling peels might just reveal your past life as a space pirate. We believe in unicorns, and we believe in your skin's magical journey.</p>
                    <h3 className='FAQ-h3'>am i allowed to bring my children?</h3>
                    <p className='FAQ-para'>Write your answers here. Embark on a rollercoaster of treatments that defy the laws of gravity. Our anti-gravity facials will have your skin floating like a cosmic balloon, and our time-traveling peels might just reveal your past life as a space pirate. We believe in unicorns, and we believe in your skin's magical journey.</p>
                    <div className='FAQ-btn-container'>
                        <Link to='/bookings'>
                        <button className='FAQ-btn'>BOOK AN APPOINTMENT <span className='FAQ-btn-icon'><PiArrowRightThin/></span></button>
                        </Link>
                  <h3 className='FAQ-btn-h3'>View More <span className='FAQ-btn-h3-icon'><PiArrowCircleRightThin /></span></h3>
                </div>
                </div>
               
        </div>
     );
}
 
export default FAQs; 