import "./ShopProducts.css";
import faceserum from "../../assets/facialcream.jpg";
import handcream from "../../assets/handcream.jpg";
import lotion from "../../assets/lotion.jpg";
import { PiArrowRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const ShopProducts = () => {
  return (
    <div className="ShopProduct-container">
      <h3 className="ShopProduct-sub-text">SHOP OUR RECOMMENDED SKINCARE BRANDS</h3>
      <h3 className="ShopProduct-title-text">Elevate Your Look with Our <u>Result-Driven</u> Products</h3>

      <div className="ShopProduct-images-main-container">
        <div className="ShopProduct-image-container">
          <Link to='/singleproduct'>
          <img src={faceserum} alt="faceserum" className="ShopProduct-image" />
          <p className="ShopProduct-image-paragraph">MX FACE SERUM</p>
          </Link>
        </div>
        <div className="ShopProduct-image-container">
          <Link to='/singleproduct'>
          <img src={lotion} alt="lotion" className="ShopProduct-image" />
          <p className="ShopProduct-image-paragraph">MX BODY LOTION</p>
          </Link>
        </div>
        <div className="ShopProduct-image-container">
          <Link to='/singleproduct'>
          <img src={handcream} alt="handcream" className="ShopProduct-image" />
          <p className="ShopProduct-image-paragraph">MX BODY SCRUB</p>
          </Link>
        </div>
      </div>

      <div className="ShopProduct-button-container">
        <button className="ShopProduct-button">
          shop all products <PiArrowRightThin />
        </button>
      </div>
    </div>
  );
};

export default ShopProducts;
