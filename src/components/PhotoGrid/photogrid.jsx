import './photogrid.css'
import imageone from '../../assets/pinkgloss.jpg'
import imagetwo from '../../assets/intro.jpg'
import imagethree from '../../assets/Reviewimage.jpg'
import imagefour from '../../assets/sheetmask.jpg'
import imagefive from '../../assets/smiling.jpg'

const PhotoGrid = () => {
    return ( 
        
    <div>
        <div className='photogrid-image-main-container'>
        <div className='photogrid-image-container'>
        <img src={imageone} alt="img-1" className='photogrid-image'/>
        </div>
         <div className='photogrid-image-container'>
         <img src={imagetwo} alt="img-2" className='photogrid-image'/>
        </div>
         <div className='photogrid-image-container'>
         <img src={imagethree} alt="img-3" className='photogrid-image'/>
        </div>
         <div className='photogrid-image-container'>
         <img src={imagefour} alt="img-4" className='photogrid-image'/>
        </div>
         <div className='photogrid-image-container-five'>
         <img src={imagefive} alt="img-5" className='photogrid-image-five'/>
        </div>
    </div> 
   
    </div>
    );
}
 
export default PhotoGrid;