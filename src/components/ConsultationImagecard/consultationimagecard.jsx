import "./consultationimagecard.css";
import { PiArrowRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const ConsultationImagecard = ({ title, image }) => {
  return (
    <div className=" p-6 md:col-span-2 consultation-image-main-container">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="consulation-header-and-list-overall-container">
          <div className="consulation-header-and-list-container">
            <h2 className="text-2xl font-bold mb-2 consultation-img-heading">
              {title}
            </h2>
            <ul className="flex-col">
              <li className="consultation-li">30 Mins</li>
              <li className="consultation-li">$150.00</li>
            </ul>
          </div>
          <p className="my-5 consultation-para-text">
            Write a short introduction about your service right here and its
            benefits. Everyone needs a friend. Friends are the most valuable
            things in the world. We're where unicorns harmonize with facial
            unicorns, and our expert.
          </p>
          <h3 className="consultation-h3-text mb-2">TREATMENT BENEFITS</h3>
          <p className="my-5 consultation-para-text">
            Write a short introduction the benefits of this service. Everyone
            needs a friend. Friends are the most valuable things.
          </p>
          <div className="consultation-btn-container">
            <Link to="/bookings">
              <button className="consultation-btn">
                book now
                <span className="consultation-btn-icon">
                  <PiArrowRightThin />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block consultation-image">
          <img
            src={image}
            alt="consultation-card-pic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationImagecard;
