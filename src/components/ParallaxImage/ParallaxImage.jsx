import { Link } from "react-router-dom";
import "./ParallaxImage.css";
const ParallaxImage = () => {
  return (
    <div>
      <div className="parallax-image-container">
        <p className="parallax-title-text">
          PERSONALIZED TREATMENTS MADE JUST FOR YOU
        </p>
        <p className="parallax-subtitle-text">
          Ready To Fall In Love With Your Skin?
        </p>
            <div className="parallax-button-container">
              <Link to='/services'>
              <button className="parallax-button one">EXPLORE SERVICES</button>
              </Link>
              <Link to='/bookings'>
              <button className="parallax-button two">BOOK AN APPOINTMENT</button> 
              </Link>
            </div>
        
      </div>
    </div>
  );
};

export default ParallaxImage;
