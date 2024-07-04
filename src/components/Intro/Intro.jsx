import './Intro.css'
import jessie from '../../assets/intro.jpg'
import stamp from '../../assets/download (1).svg'
import { PiArrowRightThin } from "react-icons/pi";

const Intro = () => {
    return ( 
    <div className='intro-general-container'>
            <div className='intro-text-container'>
                <p className='intro-title-text'>Hi There, <u>I'm Jessie!</u></p>
                <p className='intro-subtitle-text'>PORTLAND SKINCARE + FACIAL EXPERT</p>
                <p className='intro-description-text'>Write a short introduction about yourself here. Everyone needs a friend. Friends are the most valuable things in the world. When things happen - enjoy them. They're little gifts. This is probably the greatest thing to happen in my life - to be able to share this with you. Everyone needs a friend. Friends are the most valuable things in the world.</p>
                <div className='intro-button-container'>
                <button className='intro-button'> GET TO KNOW ME <PiArrowRightThin/></button>
                </div>
            </div>
            <div className="intro-image-container">
                <img src={jessie} alt="jessie" className='intro-image' />
            </div>
            <div className='intro-stamp-container'>
            <img src={stamp} alt="stamp" className='intro-stamp'/>
            </div>
    </div> 
    );
}
 
export default Intro;