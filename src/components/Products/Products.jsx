import "./Products.css";
import faceserum from "../../assets/facialcream.jpg";
import handcream from "../../assets/handcream.jpg";
import lotion from "../../assets/lotion.jpg";
import { PiArrowRightThin } from "react-icons/pi";
const Products = () => {
  return (
    <div className="products-container">

      <p className="products-title-text">SHOP <u>SKINCARE</u> PRODUCTS</p>
      <p className="description-text">
        Write about your shop or affiliate products right here. Everyone needs a
        friend. Friends are the most valuable things in the world. When things
        happen - enjoy them. They're little gifts.
      </p>

      <div className="images-container">
        <div className="image-container">
        <img src={faceserum} alt="faceserum" className="image" 
        />
        <p className="image-paragraph">MX FACE SERUM</p>
        </div>
        <div className="image-container">
        <img src={lotion} alt="lotion" className="image"/>
        <p className="image-paragraph">MX BODY LOTION</p>
        </div>
        <div className="image-container ">
        <img src={handcream} alt="handcream" className="image"/>
        <p className="image-paragraph">MX BODY SCRUB</p>
        </div>
      </div>

      <div className="button-container">
            <button className="products-button">shop all products  <PiArrowRightThin /></button>
           
          </div>
    </div>
  );
};

export default Products;
