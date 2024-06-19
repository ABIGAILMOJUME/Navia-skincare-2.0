import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/naviaskin (1).svg";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-cont">
          <Link to="/">
            <img src={logo} alt="NAVIASKINCARE" className="logo" />
          </Link>
        </div>

        <ul>
          <li className="li">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="li">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="li">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="li">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <Link to="/services">
          <button className="nav-btn">BOOK ONLINE</button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
