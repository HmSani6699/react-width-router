import React from "react";
import "./Albume.css";
import { Link } from "react-router-dom";

const Albume = ({ albume }) => {
  const { id, title } = albume;
  return (
    <div className="albume-container">
      <h5>ID: {id}</h5>
      <h3>{title}</h3>
      <Link to={`/albume/${id}`}>Albume Details</Link>
    </div>
  );
};

export default Albume;
