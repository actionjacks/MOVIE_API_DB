import React, { forwardRef } from "react";
import "../style/VideoCard.css";
import TextTruncate from "react-text-truncate";

const VideoCard = forwardRef(({ movie }, ref) => {
  const base_url = `http://image.tmdb.org/t/p/original/`;
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText=" (...)"
        text={movie.overview}
      />
      <div className="videoCard__stats">
        <h2>{movie.title || movie.orginal_name}</h2>
        <p>
          {movie.release_date || movie.first_air_date}
          <br />
          <span>votes {movie.vote_count}</span>
        </p>
      </div>
    </div>
  );
});

export default VideoCard;
