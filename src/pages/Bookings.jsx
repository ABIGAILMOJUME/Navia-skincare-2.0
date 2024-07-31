import BookingPolicies from "../components/BookingPolicies/boookingpolicies";
import BookingsForm from "../components/BookingsForm/bookingsform";
import BookingsParallax from "../components/BookingsParallax/bookingsparallax";
import Footer from "../components/Footer/Footer";
import Photogrid from "../components/PhotoGrid/photogrid";

const Bookings = () => {
  return (
    <div>
      <BookingsParallax />
      <BookingPolicies />
      <BookingsForm />
      <Footer />
      <Photogrid />
    </div>
  );
};

export default Bookings;
