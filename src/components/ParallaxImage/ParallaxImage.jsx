import "./ParallaxImage.css";
const ParallaxImage = () => {
  return (
    <div>
      <div className="parallax-image-container">
        <p className="parallax-title-text">
          PERSONALIZED TREATMENTS MADE JUST FOR YOU
        </p>
        <p className="parallax-subtitle-text">
          Ready To Fall In Love With Your Skin?
        </p>
            <div className="parallax-button-container">
          <button className="parallax-button one">EXPLORE SERVICES</button>
          <button className="parallax-button two">BOOK AN APPOINTMENT</button>    
            </div>
        
      </div>
    </div>
  );
};

export default ParallaxImage;
