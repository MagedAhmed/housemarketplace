import { useNavigate, useLocation } from "react-router-dom";
import { FaCompass, FaTag, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <FaCompass style={{ width: "36px", height: "36px" }} />
            <p>Explore</p>
          </li>
          <li className="navbarListItem">
            <FaTag style={{ width: "36px", height: "36px" }} />
            <p>Offers</p>
          </li>
          <li className="navbarListItem">
            <FaUser style={{ width: "36px", height: "36px" }} />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
