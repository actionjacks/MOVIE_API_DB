import React from "react";
import "../style/Nav.css";
import requests from "../requests";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>TOP</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Najwyżej oceniane
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Akcja
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedyMovis)}>
        Komedia
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romans
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Thriller</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>
        Science fiction
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWester)}>Western</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Bajki</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTV)}>Seriale</h2>
    </div>
  );
}

export default Nav;
