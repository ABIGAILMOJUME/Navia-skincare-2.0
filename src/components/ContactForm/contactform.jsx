import "./contactform.css";
import { PiArrowRightThin } from "react-icons/pi";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="inquiry-form-container">
        <p className="contactform-para">please fill out the form below or email us at info@domainname.com</p>
        <h1 className="contactform-h1">INQUIRY FORM</h1>
        <form className="inquiry-form">
            <div className="first-input-container">
            <input type="text" placeholder="FULL NAME*" className="first-input" />
            <input type="tel" placeholder="PHONE NUMBER*" className="first-input"/>
            </div>
          <input type="email" placeholder="EMAIL ADDRESS*" className="other-inputs"/>
          <input type="text" placeholder="SERVICE INTERESTED IN*" className="other-inputs" />
          <textarea placeholder="WRITE YOUR MESSAGE*" className="text-area" />
          <div className="contactform-btn-container">
          <button className="contactform-btn" type="submit">SUBMIT YOUR INQUIRY<span className="contactform-btn-icon"><PiArrowRightThin/></span> </button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
