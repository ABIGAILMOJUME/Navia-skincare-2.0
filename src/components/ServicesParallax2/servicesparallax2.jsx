import './servicesparallax2.css'
import { Link } from 'react-router-dom';
import { PiArrowRightThin } from "react-icons/pi";

const ServicesParallax2 = () => {
    return (  
        <div className="servicesparallax2-image-container">
        <p className="servicesparallax2-title-text">
        SHOP FROM OUR RECOMMENDED SKINCARE BRANDS
        </p>
        <p className="servicesparallax2-subtitle-text">
        Prefer to curate your own skincare routine?
        </p>
            <div className="servicesparallax2-button-container">
              <Link to='/shop'>
              <button className="servicesparallax2-button one">SHOP OUR PRODUCTS<span className='servicesparallax2-button-icon'><PiArrowRightThin/></span></button>
              </Link>
            </div>
        
      </div>
    );
}
 
export default ServicesParallax2;