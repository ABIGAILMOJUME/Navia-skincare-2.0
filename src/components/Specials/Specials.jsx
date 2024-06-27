import "./Specials.css";
import specials from "../../assets/specials.jpg";
import packages from "../../assets/packages2.jpg";
import { PiArrowRightThin } from "react-icons/pi";

const Specials = () => {
  return (
    <div className="specials-overall-container">
      <p className="special-title-text">
        PURCHASE OUR CURRENT SESSION PACKAGE DEALS TO SAVE MONEY!
      </p>
      <p className="special-subtitle-text">SPECIALS AND PACKAGES</p>

      <div className="overall-image-container">
        <div className="special-image-container">
          <div className="promo-div">GET 50% OFF!</div>
          <p className="promo-paragraph">Buy 3 Facials, Get The 4th Free</p>
          <p className="description-paragraph">
            Write a short introduction about your service right here and its
            benefits. Everyone needs a friend. Friends are the most valuable
            things.
          </p>
          <p className="validity-paragraph">VALID UNTIL NOVEMBER 30TH</p>
          <img src={specials} alt="specials" className="special-image" />
        </div>
        <div className="special-image-container">
        <div className="promo-div">1 MONTH FREE!</div>
          <p className="promo-paragraph">Save On Spray Tan Membership</p>
          <p className="description-paragraph">
          Write a short introduction about your service right here and its benefits. Everyone needs a friend. Friends are the most valuable things.
          </p>
          <p className="validity-paragraph">VALID UNTIL DECEMBER 2ND</p>
          <img src={packages} alt="specials" className="special-image" />
        </div>
      </div>

        <div className="specials-button-container">
        <button className="specials-button">BOOK AN APPOINTMENT<PiArrowRightThin /></button>
        </div>
           
    </div>
  );
};

export default Specials;
