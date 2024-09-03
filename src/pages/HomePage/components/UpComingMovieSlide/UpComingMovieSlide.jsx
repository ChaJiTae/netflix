import React from "react";
import { useUpComingMoviesQuery } from "../../../../hooks/useUpComingMovies";
import { Alert } from "react-bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

export default function PopularMovieSlide() {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="UpComing Movie"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
}
