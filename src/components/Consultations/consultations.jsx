import { Link } from "react-router-dom";
import "./consultations.css";

const Consultations = () => {
  return (
    <>
      <div className="service-pricing-menu-container">
        <h1 className="service-pricing-menu-h1">
          Service <u>pricing</u> menu
        </h1>
        <div className="services-boxes-container">
          <Link to="/services">
            <h3 className="services-box">skin consultations</h3>
          </Link>
          <Link to="/services">
            <h3 className="services-box">facial treatments</h3>
          </Link>
          <Link to="/services">
            <h3 className="services-box">chemical peels</h3>
          </Link>
          <Link to="/services">
            <h3 className="services-box">body treatments</h3>
          </Link>
        </div>
        <div className="sevices-text-container">
            <h3 className="services-h3-text">CUSTOM FACIAL TREATMENTS</h3>
            <p className="services-para-text">Write an introduction of this service type, and why this is the type of treatment or service they might need over the others. Everyone needs a friend. Friends are the most valuable things in the world. When things happen - enjoy them. They're little gifts. </p>
        </div>
      </div>
    </>
  );
};

export default Consultations;
