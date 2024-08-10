import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetail(props) {
  const location = useLocation();
  const movie = location.state.movie;
  const { handleAddtoWatchlist,watchlist } = props;

  function doesContain(movieobj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id==movieobj.id){
        return true;
      }
      
    }
    return false;
    
  }
  

  return (
    <div className='text-white flex item-center gap-8 p-11 flex-wrap'>
      <img  className='h[20rem] w-[20rem]' src={movie.Poster} alt="" />

      <div className=''>
      <h1 className='p-3 text-4xl font-bold'>Movie Title : {movie.Title}</h1>
      <ol className=''>
        <li className='p-3 text-xl'>Genre : {movie.Genre}</li>
        <li className='p-3 text-xl'>Rating : {movie.imdbRating}</li>
        <li className='p-3 text-xl'>Released : {movie.Released}</li>
        <li className='p-3 text-xl'>Actors : {movie.Actors}</li>
        <li className='p-3 text-xl'>Writer : {movie.Writer}</li>
        <li className='p-3 text-xl'>Director : {movie.Director}</li>
      </ol>
      {doesContain(movie)?<button onClick={() => handleAddtoWatchlist(movie)} className='bg-gray-500 rounded-lg w-[10rem] h-[3rem] mt-5 hover:cursor-pointer  opacity-50' >Add to Watchlist</button>: <button onClick={() => handleAddtoWatchlist(movie)} className='bg-blue-500 rounded-lg w-[10rem] h-[3rem] mt-5 hover:cursor-pointer'>Add to Watchlist</button>}
      
      </div>
      
    </div>
  )
}

export default MovieDetail;