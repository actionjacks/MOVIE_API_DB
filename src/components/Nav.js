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
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        akcja
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedyMovis)}>
        komedja
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        horror
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        romans
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>zagadka</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>
        science fiction
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWester)}>wester</h2>
      <h2
        onClick={() => setSelectedOption(requests.fetchTfetchAnimationopRated)}
      >
        bajki
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTV)}>seriale</h2>
    </div>
  );
}

export default Nav;
