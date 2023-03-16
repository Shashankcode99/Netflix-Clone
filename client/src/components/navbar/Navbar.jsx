import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

// import LanguageIcon from '@mui/icons-material/Language';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };

  console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
            alt="netflix_logo"
          />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=684&h=456"
            alt="profile_img"
          />

          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="option">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
