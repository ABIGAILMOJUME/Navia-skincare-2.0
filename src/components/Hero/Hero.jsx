import hero from "../../assets/heroimage.jpg";
import { PiArrowRightThin } from "react-icons/pi";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="first-column">
          <p className="p1">PERSONALIZED TREATMENTS MADE JUST FOR YOU</p>
          <p className="p2">
            Elevate Your Beauty, <i className="p2-italics">Naturally</i>
          </p>
          <p className="p3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore
            repudiandae voluptatibus incidunt tempora eius architecto totam
            aliquid vel doloremque, assumenda fugit corporis aliquam officiis
            repellat dolore. Beatae, doloribus expedita?
          </p>
          <div className="btn-div">
            <Link to='/services'>
            <button className="hero-btn">Explore our services <span className="hero-icon"><PiArrowRightThin/></span></button>
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={hero} alt="hero" className="hero-img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
