import "./ServicesMenu.css";
import afro from "../../assets/afro woman.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";


const ServicesMenu = () => {
  return (
    <div className="services-menu-container">
      <div className="column-1">
        <span className="vertical-text">Our services menu</span>
        <div className="services-image-container">
          <img src={afro} alt="afro" className="services-image" />
        </div>
      </div>

      <div className="column-2">
      <h4>LET'S ENHANCE YOUR NATURAL BEAUTY</h4>
      
       <div className=" first span">
        <Link to='/services'>
        <span >facial treatments </span>
        </Link>
      <AiOutlinePlus className="icon"/>
      </div>
        
    
      <div className="span">
        <Link to='/services'>
        <span >Chemical peels </span>
        </Link>
      <AiOutlinePlus className="icon"/>
      </div>
      
      
      <div className="last span">
      <Link to='/services'>
      <span >body treatments </span>
        </Link>
      <AiOutlinePlus className="icon"/>
      </div>
     
      
      </div>
      
    </div>
  );
};

export default ServicesMenu;
