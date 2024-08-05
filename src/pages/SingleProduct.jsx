import Recommendations from "../components/Recommendation/Recommendation";
import SingleProducthero from "../components/SingleProducthero/singleproducthero";
import Footer from "../components/Footer/Footer";
import Photogrid from "../components/PhotoGrid/photogrid";
const SingleProduct = () => {
    return ( 
        <div>
           <SingleProducthero/> 
           <Recommendations/>
           <Footer/>
           <Photogrid/>
        </div>
     );
}
 
export default SingleProduct;