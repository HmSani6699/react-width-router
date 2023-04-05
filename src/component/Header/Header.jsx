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
      <Link to='/posts'>Posts</Link>
      <Link to='/albums'>Albums</Link>
      <Link to='/todos'>Todos</Link>
    </nav>
  );
};

export default Header;
