import './inquirieshero.css'
import serum from '../../assets/facialcream.jpg'

const InquiriesHero = () => {
    return ( 
        <div className='inquiries-main-container'>
            <div className='inquiries-text-container'>
                 <h3 className='inquiries-h3-text'>YOUR INQUIRY HAS BEEN SUBMITTED</h3>
                 <h1 className='inquiries-h1-text'>thank You For <br/>Your <u>Message!</u></h1>
                 <p className='inquiries-para-text'>We're so excited to meet you & see how we can help achieve <br /> your skincare goals. We'll get back to you within a few business days. </p>
            </div>
            <div className='inquiries-image-container'>
                <img src={serum} alt="inquiries" className='inquiries-image'/>
            </div>
        </div>
     );
}
 
export default InquiriesHero;