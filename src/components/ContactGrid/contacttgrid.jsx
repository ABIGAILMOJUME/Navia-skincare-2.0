import "./contactgrid.css";
import imageone from "../../assets/parallax2.jpg";
import imagetwo from "../../assets/specials.jpg";
import imagethree from "../../assets/lotion.jpg";
import imagefour from "../../assets/packages2.jpg";
import imagefive from "../../assets/afro woman.jpg";
import { PiArrowRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Contactgrid = () => {
  return (
    <div className="contact-grid-container">
      <div className="contactgrid-secondary-container">
        <h1 className="contactgrid-heading">Explore Our Services</h1>
        <Link to='/services'>
        <button className="contact-grid-btn">view all services <span className="contactgrid-icon"><PiArrowRightThin/></span></button>
        </Link>
      </div>
      <div className="contact-grid-images">
        <div className="contactgrid-image-container">
          <img src={imageone} alt="img-1" className="contactgrid-image" />
          <h3 className="contact-image-name">consults</h3>
        </div>
        <div className="contactgrid-image-container">
          <img src={imagetwo} alt="img-2" className="contactgrid-image" />
          <h3 className="contact-image-name">facials</h3>
        </div>
        <div className="contactgrid-image-container">
          <img src={imagethree} alt="img-3" className="contactgrid-image" />
          <h3 className="contact-image-name">peels</h3>
        </div>
        <div className="contactgrid-image-container">
          <img src={imagefour} alt="img-4" className="contactgrid-image" />
          <h3 className="contact-image-name">body</h3>
        </div>
        <div className="contactgrid-image-container-five">
          <img src={imagefive} alt="img-5" className="contactgrid-image-five" />
          <h3 className="contact-image-name">fillers</h3>
        </div>
      </div>
      <div className="contact-grid-btn-2-container">
      <Link to='/services'>
      <button className="contact-grid-btn-2">view all services <span className="contactgrid-icon-2"><PiArrowRightThin/></span></button>
        </Link>
      </div>
    </div>
  );
};

export default Contactgrid;
