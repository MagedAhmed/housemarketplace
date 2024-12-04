import { useNavigate, useLocation } from "react-router-dom";
import { FaCompass, FaTag, FaUser } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function isActive(route) {
    return location.pathname === route ? "#2c2c2c" : "#8f8f8f";
  }

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <FaCompass
              color={isActive("/")}
              style={{ width: "30px", height: "30px" }}
            />
            <p>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <FaTag
              color={isActive("/offers")}
              style={{ width: "30px", height: "30px" }}
            />
            <p>Offers</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <FaUser
              color={isActive("/profile")}
              style={{ width: "30px", height: "30px" }}
            />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
