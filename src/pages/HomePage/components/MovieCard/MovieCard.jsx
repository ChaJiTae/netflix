import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1 className="movieCardTitle">{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">{id}</Badge>
        ))}
        <div>
          <div>{movie.vote_average.toFixed(2)}</div>
          <div>{movie.popularity.toFixed(0)}</div>
          <div>{movie.adult ? "19세 이상" : "19세 미만"}</div>
        </div>
      </div>
    </div>
  );
}
