import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

export default function MovieCard({ movie }) {
  const { data: genres } = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if (!genres) return [];
    const genresNameList = genreIdList.map((id) => {
      const genreObj = genres.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genresNameList;
  };
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
        <div className="genreSet">
          {showGenre(movie.genre_ids).map((genre, index) => (
            <Badge bg="danger" key={index} className="me-1">
              {genre}
            </Badge>
          ))}
        </div>
        <div>
          <div>평점: {movie.vote_average.toFixed(2)}</div>
          <div>인기도: {movie.popularity.toFixed(0)}</div>
          <div>{movie.adult ? "19세 이상" : "19세 미만"}</div>
        </div>
      </div>
    </div>
  );
}
