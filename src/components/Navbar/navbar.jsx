import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './navbar.css'
import logo from '../../assets/naviaskin.png'


const NavBar = () => {
    return ( 

        <>
        <div className="navbar">
        <Link to="/" className="logo"><img src={logo} alt="NAVIASKINCARE" /></Link>

            
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

            <Link to ="/services">
            <button className="nav-btn">
               <p className="nav-btnp">BOOK ONLINE</p> 
            </button>
            </Link> 
            
            </div>
        </>
     );
}
 
export default NavBar;