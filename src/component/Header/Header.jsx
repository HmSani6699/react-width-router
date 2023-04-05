import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Aboute</Link>
      <Link to="/contact">Contact us</Link>
      <Link to="/friends">Friends</Link>
    </nav>
  );
};

export default Header;
