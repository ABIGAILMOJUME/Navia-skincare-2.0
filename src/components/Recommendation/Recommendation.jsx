import SingleProductcard from '../../components/SingleProductcard/singleproductcard'
import serum from '../../assets/facialcream.jpg'
import misolo from '../../assets/misolo.jpg'
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Recommendation.css'
const Recommendations = () => {
    return (  
    <>
     <div className=" recommendation-main-container">
        <div className="recommendation-text-container md:mr-4 md:pt-5">
          <p className="recommendation-main-text uppercase mb-4">CRAVING MORE GOODNESS?</p>
          <h2 className="recommendation-sub-text mb-8 md:mb-0">
            <span className="md:hidden">You May Also Like These</span>
            <span className="hidden md:inline">
              You May<br />
              Also Like<br />
              These
            </span>
          </h2>
        </div>
        <div className="flex recommendation-image-container">
          <SingleProductcard
            image={serum}
            name="PAPAYA MASK"
            price="40"
          />
          <SingleProductcard
            image={misolo}
            name="HAND LOTION"
            price="52"
          />
        </div>
      </div>
      
    <div className='recommendation-last-div'>
        <Link to='/shop'>
        <p className='flex rec-p'><span className="recommendations-icon"><BsArrowLeft/></span> BACK TO PRODUCTS</p>
        </Link>
        </div>
    </>
     
    );
}
 
export default Recommendations;