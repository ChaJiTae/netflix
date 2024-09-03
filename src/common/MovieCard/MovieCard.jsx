import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

const genreMap = {
  28: "액션",
  12: "모험",
  16: "애니메이션",
  35: "코미디",
  80: "범죄",
  99: "다큐멘터리",
  18: "드라마",
  10751: "가족",
  14: "판타지",
  36: "역사",
  27: "공포",
  10402: "음악",
  9648: "미스터리",
  10749: "로맨스",
  878: "SF",
  10770: "TV 영화",
  53: "스릴러",
  10752: "전쟁",
  37: "서부",
};

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
        <div className="genreSet">
          {movie.genre_ids.map((id) => (
            <Badge key={id} bg="danger">
              {genreMap[id] || "알 수 없음"}
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
