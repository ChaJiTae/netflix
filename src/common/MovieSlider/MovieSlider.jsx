import React from "react";
import "./MovieSlider.style.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MovieSlider({ title, movies, responsive }) {
  return (
    <div>
      <h3 className="MoviesTitle">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
      ;
    </div>
  );
}
