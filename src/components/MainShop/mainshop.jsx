import "./mainshop.css";
import lotion from "../../assets/lotion.jpg";
import deodorant from "../../assets/le deodorant.jpg";
import misolo from "../../assets/misolo.jpg";
import mascarilla from "../../assets/mascarilla.jpg";
import tubecream from "../../assets/Tubecream.jpg";
import yours from "../../assets/yours.jpg";
import { Link } from "react-router-dom";

const MainShop = () => {
  return (
    <div className="mainshop-container">
      <h3 className="mainshop-title">Shop All Skincare</h3>
      <div className="mainshop-images-main-container">
        <div className="mainshop-image-container-first">
            <Link to='/singleproduct'>
            <img src={lotion} alt="mainshop-img" className="mainshop-image" />
            <h3 className="mainshop-h3-text">product name <span>$40</span></h3>
            </Link>
        </div>
        <div className="mainshop-image-container">
            <Link to='/singleproduct'>
            <img src={deodorant} alt="mainshop-img" className="mainshop-image" />
            <h3 className="mainshop-h3-text">product name <span>$40</span></h3>
            </Link>
        </div>
        <div className="mainshop-image-container">
        <Link to='/singleproduct'>
        <img src={misolo} alt="mainshop-img" className="mainshop-image" />
        <h3 className="mainshop-h3-text">product name <span>$40</span></h3>
            </Link>
        </div>
        <div className="mainshop-image-container-lower">
        <Link to='/singleproduct'>
        <img src={mascarilla} alt="mainshop-img" className='mainshop-image' />
        <h3 className="mainshop-h3-text">product name <span>$40</span></h3>
            </Link>
        </div>
        <div className="mainshop-image-container-lower">
        <Link to='/singleproduct'>
        <img src={tubecream} alt="mainshop-img" className='mainshop-image' />
        <h3 className="mainshop-h3-text">product name <span>$40</span></h3>
            </Link>
        </div>
        <div className="mainshop-image-container-lower">
        <Link to='/singleproduct'>
        <img src={yours} alt="mainshop-img" className='mainshop-image' />
        <h3 className="mainshop-h3-text">product name <span>$40</span></h3>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default MainShop;
