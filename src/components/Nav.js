import React from "react";
import "../style/Nav.css";
import requests from "../requests";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        na topie
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        najwyzej oceniane
      </h2>
      <h2>akcja</h2>
      <h2>komedja</h2>
      <h2>horror</h2>
      <h2>romans</h2>
      <h2>zagadka</h2>
      <h2>sajensfikszon</h2>
      <h2>wester</h2>
      <h2>bajki</h2>
      <h2>filmy</h2>
    </div>
  );
}

export default Nav;
