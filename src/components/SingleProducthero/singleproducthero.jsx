import "./singleproducthero.css";
import sheetmask from "../../assets/sheetmask.jpg";
import { PiArrowRightThin } from "react-icons/pi";

const SingleProducthero = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row single-product-secondary">
        <div className="md:w-full mb-4 md:mb-0 single-product-image-container">
          <img
            src={sheetmask}
            alt="Vitamin C Serum"
            className="w-full single-product-image"
          />
        </div>

        <div className=" single-product-text-container">
          <h1 className="vitamin-c-text mb-2">Vitamin C Serum</h1>
          <p className="skinbetter-text my-4">SKINBETTER SCIENCE</p>
          <p className="mb-4 vitamin-description">
            Write a product description for them to know what the benefits of
            your product are. You can bend rivers. But when I get home, the only
            thing I have power over is the garbage. Paint anything you want on
            the canvas. Create your own world. Let's put some happy trees and
            bushes back in here.{" "}
          </p>

          <div className=" p-3 mb-4 fine-lines-container">
            <p className="flex items-center fine-lines-text">
              <svg
                className="w-6 h-6 mr-2 fine-lines-icon"
                fill="rgba(234, 219, 219, 1)"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              GREAT FOR FINE LINES
            </p>
          </div>
          <div className="sp-price-container">
            <p className=" singleproduct-btn-price ">
              $40
            </p>
            <button className="text-black px-4 py-2 rounded singleproduct-btn">
              ADD TO CART <span className="singlepdt-icon"><PiArrowRightThin/></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProducthero;
