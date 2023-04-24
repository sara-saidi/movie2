import React from 'react';
import ReactStars from "react-rating-stars-component";
const MovieCard = ({movie}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <div>
    <div className="movie_card" id="bright">
    <div className="info_section">
      <div className="movie_header">
        <img
          className="locandina"
          src={movie.Poster}
        />
        <h1>{movie.Title}</h1>
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
        <h4>2017, David Ayer</h4>
        <span className="minutes">117 min</span>
        <p className="type">Action, Crime, Fantasy</p>
      </div>
      <div className="movie_desc">
        <p className="text">
          Set in a world where fantasy creatures live side by side with humans. A
          human cop is forced to work with an Orc to find a weapon everyone is
          prepared to kill for.
        </p>
      </div>
      <div className="movie_social">
        <ul>
          <li>
            <i className="material-icons">share</i>
          </li>
          <li>
            <i className="material-icons"></i>
          </li>
          <li>
            <i className="material-icons">chat_bubble</i>
          </li>
        </ul>
      </div>
    </div>
    <div className="blur_back bright_back" />
  </div>
  
    </div>
  );
}

export default MovieCard;
