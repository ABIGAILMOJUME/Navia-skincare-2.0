import "./announcementbar.css";
import { Link } from "react-router-dom";
const AnnouncementBar = () => {
  return (
    <div className="announcement-div">
      <a href="/" className="announcement-a">
      <Link to='/services'>
      <p className="announcement-p">
          NEW HYDRAFACIAL TREATMENT! BOOK ONLINE TODAY.
        </p>
      </Link>
      </a>
    </div>
  );
};

export default AnnouncementBar;
