import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import moviesDetails1 from '../moviedata/movieDetails1'



function Movies(movies) {
  let pageSize = 15;

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(pageSize);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesDetails1.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center p-8 text-white">
        Trending Movies
      </h1>
      <div className="gap-8 flex flex-wrap justify-around">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={moviesDetails1.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Movies;
