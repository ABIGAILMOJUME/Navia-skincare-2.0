import "./ServicesMenu.css";
import afro from "../../assets/afro woman.jpg";
import { AiOutlinePlus } from "react-icons/ai";

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
      <span >facial treatments </span>
      <AiOutlinePlus className="icon"/>
      </div>
        
    
      <div className="span">
      <span >Chemical peels </span>
      <AiOutlinePlus className="icon"/>
      </div>
      
      
      <div className="last span">
      <span >body treatments </span>
      <AiOutlinePlus className="icon"/>
      </div>
     
      
      </div>
      
    </div>
  );
};

export default ServicesMenu;
