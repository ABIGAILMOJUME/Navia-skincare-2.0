
import './contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className='contact-parallax-image'>
            <div className='contact-text-container'>
            <p className="Contact-question">HAVE ANY QUESTIONS OR CONCERNS?</p>
            </div>
            <div className='contact-text-container-2'>
            <h2 className='contact-heading'>Contact Us</h2>
            </div>
           
            <div className="appointment-info">
          <h3 className='appointment-heading'>By Appointment Only</h3>
          <p className='appointment-para-italics' ><i>32 Yorkville Ave, Portland Oregon, 152942</i></p>
          <p className='appointment-para'>Tuesday-Friday: 10am to 8pm</p>
          <p className='appointment-para'>Saturday: 10am to 5pm</p>
          <p className='appointment-para'>Sunday & Monday: Closed</p>
        </div>
      </div>
      {/* for small screens only */}
      <div className="appointment-info-two ">
          <h3 className='appointment-heading-two'>By Appointment Only</h3>
          <p className='appointment-para-italics-two'><i>32 Yorkville Ave, Portland Oregon, 152942</i></p>
          <p className='appointment-para-two'>Tuesday-Friday: 10am to 8pm</p>
          <p className='appointment-para-two'>Saturday: 10am to 5pm</p>
          <p className='appointment-para-two'>Sunday & Monday: Closed</p>
        </div>
    </div>
  );
};

export default ContactUs;