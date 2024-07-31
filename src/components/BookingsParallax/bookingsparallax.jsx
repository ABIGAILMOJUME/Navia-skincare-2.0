import './bookingsparallax.css'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
const BookingsParallax = () => {
    return ( 
        <div>
            <div className='bookings-parallax-image-container'>
            <p className="bookings-parallax-title-text">
            now accepting new clients for consultations
        </p>
        <p className="bookings-parallax-subtitle-text">
        BOOK YOUR APPOINTMENT ONLINE
        </p>
        <MdOutlineArrowDropDownCircle className='bookings-parallax-icon' />
            </div>
        </div>
     );
}
 
export default BookingsParallax;