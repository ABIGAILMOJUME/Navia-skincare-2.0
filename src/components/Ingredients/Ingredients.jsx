import './Ingredients.css'
import ingredients from "../../assets/Reviewimage.jpg";
import { FaCheck } from "react-icons/fa6";

const Ingredients = () => {
    return ( 
        <div className='ingredients-main-container'>
            <div className='ingredients-img-container'>
                <img src={ingredients} alt="Ingredients" className='ingredients-img' />
            </div>
            <div className='ingredients-text-container'>
                <h1 className='ingredients-h1-text'>Infused With Only The Best Ingredients.</h1>
                <p className='ingredients-p-text'>I only carry brands that we know are safe for sensitive & dry skin. Write about your products right here, or how you carefully selected these products for your visitors: </p>
                <h3 className='ingredients-h3-text'><span><FaCheck className='h3-text-icon'/></span>CRUELTY-FREE & VEGAN</h3>
                <h3 className='ingredients-h3-text'><span><FaCheck  className='h3-text-icon' /></span>FOR SENSITIVE DRY SKIN</h3>
                <h3 className='ingredients-h3-text'><span><FaCheck  className='h3-text-icon'/></span>GREAT FOR FINE LINES</h3>
            </div>
        </div>
     );
}
 
export default Ingredients;