import review from "../../assets/Reviewimage.jpg";
import { LiaStarSolid } from "react-icons/lia";
import { PiArrowRightThin } from "react-icons/pi";
import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="general-container">
        <div className="reviews-image-container">
          <img src={review} alt="hero" className="reviews-img" />
        </div>

        <div className="reviews-container">
          <p className="title-text">"My Skin Has Been Glowing Ever Since!"</p>
          <p className="testimonial-text">
            "Write your testimonials right here. Everyone needs a friend.
            Friends are the most valuable things in the world. When things
            happen - enjoy them. They're little gifts. This is probably the
            greatest thing to happen in my life - to be able to share this with
            you. Everyone needs a friend. Friends are the most valuable things
            in the world. When things happen - enjoy them."
          </p>
          <p className="client-name-text">SARAH / FACIAL CLIENT</p>
          <div className="star-container">
            <LiaStarSolid className="star" />
            <LiaStarSolid className="star" />
            <LiaStarSolid className="star" />
            <LiaStarSolid className="star" />
            <LiaStarSolid className="star" />
          </div>
          <p className="next-review-text">Next review  <PiArrowRightThin /> </p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
