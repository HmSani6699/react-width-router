import React from "react";
import { useLoaderData } from "react-router-dom";
import Albume from "../Albume/Albume";
import './Albums.css'

const Albums = () => {
  const albums = useLoaderData();
  return (
    <div>
      <h2>Tis is albums container: {albums.length}</h2>
      <div className="albums-container">
        {albums.map((albume) => (
          <Albume key={albume.id} albume={albume}></Albume>
        ))}
      </div>
    </div>
  );
};

export default Albums;
