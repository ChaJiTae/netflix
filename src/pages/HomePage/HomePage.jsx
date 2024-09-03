import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpComingMovieSlide from "./components/UpComingMovieSlide/UpComingMovieSlide";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpComingMovieSlide />
    </div>
  );
}
