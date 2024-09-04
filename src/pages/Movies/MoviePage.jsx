import React, { useState } from "react";
import "./MoviePage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Spinner, Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

export default function MoviePage() {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const { data: genreData } = useMovieGenreQuery();

  const handleGenreChange = (genreId) => {
    setSelectedGenres((prevSelectedGenres) => {
      const isGenreSelected = prevSelectedGenres.includes(genreId);

      if (isGenreSelected) {
        return prevSelectedGenres.filter((id) => id !== genreId);
      } else {
        return [...prevSelectedGenres, genreId];
      }
    });
  };

  const [query] = useSearchParams();
  const keyword = query.get("q");

  const handlePageClick = (page) => {
    setPage(page.selected + 1);
  };

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  if (!(data && data.results && data.results.length !== 0)) {
    return <div className="noData">No data available</div>;
  }
  console.log(data);

  return (
    <div>
      <Container>
        <Row>
          {/*필터 */}
          <Col lg={4} xs={12}>
            {genreData?.map((genre) => (
              <div className="checkbox-container" key={genre.id}>
                <input
                  type="checkbox"
                  className="checkbox"
                  id={`genre-${genre.id}`}
                  checked={selectedGenres.includes(genre.id)}
                  onChange={() => handleGenreChange(genre.id)}
                />
                <label className="checkbox-label" htmlFor={`genre-${genre.id}`}>
                  {genre.name}
                </label>
              </div>
            ))}
          </Col>
          {/*영화 카드 */}
          <Col lg={8} xs={12}>
            <Row>
              {data?.results
                .filter((movie) => movie.poster_path)
                .filter((movie) => {
                  return (
                    selectedGenres.length === 0 ||
                    movie.genre_ids.some((genreId) =>
                      selectedGenres.includes(genreId)
                    )
                  );
                })

                .map((movie) => {
                  return (
                    <Col key={movie.id} lg={4} xs={12}>
                      <MovieCard movie={movie} />
                    </Col>
                  );
                })}

              {/* {data?.results
                .filter((movie) =>
                  movie.genre_ids.some((genreId) =>
                    selectedGenres.includes(genreId)
                  )
                )
                .map((movie) => (
                  <Col key={movie.id} lg={4} xs={12}>
                    <MovieCard movie={movie} />
                  </Col>
                ))} */}
            </Row>
          </Col>

          <ReactPaginate
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={10}
            marginPagesDisplayed={2}
            pageCount={data.total_pages}
            previousLabel="previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Row>
      </Container>
    </div>
  );
}
