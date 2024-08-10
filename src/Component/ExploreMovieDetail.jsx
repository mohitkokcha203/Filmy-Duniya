import React from "react";
import { useLocation } from "react-router-dom";

function ExploreMovieDetail({ handleAddtoWatchlist, watchlist }) {
  const location = useLocation();
  const movieDetails = location.state.movieDetails;

  function doesContain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieobj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="text-white flex item-center gap-8 p-11 flex-wrap">
      <img className="h[20rem] w-[20rem]" src={movieDetails.Poster} alt="" />

      <div className="">
        <h1 className="p-3 text-4xl font-bold">
          Movie Title : {movieDetails.Title}
        </h1>
        <ol className="">
          <li className="p-3 text-xl">Released : {movieDetails.Released}</li>
          <li className="p-3 text-xl">Genre : {movieDetails.Genre}</li>
          <li className="p-3 text-xl">Rating : {movieDetails.imdbRating}</li>
          <li className="p-3 text-xl">Popularity : {movieDetails.imdbVotes}</li>

          <li className="p-3 text-xl">Actors : {movieDetails.Actors}</li>

          <li className="p-3 text-xl">Writer : {movieDetails.Writer}</li>
          <li className="p-3 text-xl">Director : {movieDetails.Director}</li>
        </ol>
        {doesContain(movieDetails) ? (
          <button
            onClick={() => handleAddtoWatchlist(movieDetails)}
            className="bg-gray-500 rounded-lg w-[10rem] h-[3rem] mt-5 hover:cursor-pointer  opacity-50"
          >
            Add to Watchlist
          </button>
        ) : (
          <button
            onClick={() => handleAddtoWatchlist(movieDetails)}
            className="bg-blue-500 rounded-lg w-[10rem] h-[3rem] mt-5 hover:cursor-pointer"
          >
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
}

export default ExploreMovieDetail;
