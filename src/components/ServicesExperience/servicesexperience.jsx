import './servicesexperience.css'
import stamp from '../../assets/download (1).svg'
import experience from '../../assets/servicesexperience.jpg'

const ServicesExperience = () => {
    return (
        <div className='experience-container'>
        <div className='experience-main-container'>
              <div className="experience-image-container">
                <img src={experience} alt="jessie" className='experience-image' />
            </div>
            <div className='experience-stamp-container'>
            <img src={stamp} alt="stamp" className='experience-stamp'/>
            </div>
            <div className='intro-text-container'>
                <p className='experience-title-text'>a portland SKINCARE EXPERT who AIMS FOR <br/>FOR A TRULY customized experience</p>
                <p className='experience-subtitle-text'>the <u>Experience</u></p>
                <p className='experience-description-text'>Write an introduction of your business here and what the experience <br/>will be like for them. Everyone needs a friend. Friends are the most <br/>valuable things in the world. When things happen - enjoy them. <br/>They're little gifts. This is probably the greatest thing to happen in <br/>my life - to be able to share this with you.</p>
                <p className='experience-description-text-2'>Everyone needs a friend. Friends are the most valuable things in the <br/> world. When things happen - enjoy them. This is probably the <br/>greatest thing to happen in my life.</p>
                </div>
        </div>
        </div>
        
      );
}
 
export default ServicesExperience;