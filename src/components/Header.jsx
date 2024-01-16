import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../assets/logo.jpg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Avatar src={img}  sx={{ width: 250, height: 70 }}  variant="square"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-3">
              <Link className="nav-link fw-bolder fs-2" aria-current="page" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item mx-3">
              <Link className="nav-link fw-bolder fs-2" to="profile">
                About
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
