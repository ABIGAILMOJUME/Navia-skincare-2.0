import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="explore-visit-container">
        <div className="explore-container">
          <h3 className="explore-heading">Explore</h3>
          <div className="ul-container">
            <ul>
                <Link to='/'> <li>HOME</li></Link>
                <Link to='/about'> <li>ABOUT</li></Link>
                <Link to='/services'> <li>SERVICES</li></Link>
            </ul>
            <ul>
              <Link to='/shop'> <li>SHOP</li></Link>
              <Link to='/'> <li>BLOG</li></Link>
              <Link to='/contact'> <li>CONTACT</li></Link>
            </ul>
          </div>
          <button className="explore-button">BOOK ONLINE</button>
        </div>
        <div className="visit-container">
          <h2 className="explore-heading">Visit Us</h2>
          <p className="explore-para italics"><i>32 Yorkville Ave, Portland Oregon, 152942</i></p>
          <p className="explore-para">Tuesday-Friday: 10am to 8pm</p>
          <p className="explore-para">Saturday: 10am to 5pm</p>
          <p className="explore-para">Sunday & Monday: Closed</p>
          <div className="visit-container-button">
            <button className="explore-button">BOOK ONLINE</button>
          </div>
        </div>
      </div>
            <div className="ten-off-container">
                <div className="ten-off-heading-div">
                <h2 className="ten-off-heading">GET 10% OFF YOUR FIRST APPOINTMENT</h2>
                </div>
            <h6 className="join-mail">Join our email list for updates, exclusive discounts and more!</h6>
            <div className="ten-off-button-container">
                <button className="ten-off-button-1">EMAIL ADDRESS</button>
                <button className="ten-off-button-2">SIGN UP</button>
            </div>
            </div>
    </div>
  );
};

export default Footer;
