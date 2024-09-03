import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  );
}
