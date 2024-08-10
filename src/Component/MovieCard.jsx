import React from 'react';
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { Poster, Title, Released, imdbRating, Genre, Director, Writer, Actors } = movie;
  return (
    <Link to="/moviedetail" state={{ movie }}>
    <div className='h-[45vh] w-[140px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 cursor-pointer flex items-end' style={{ backgroundImage: `url(${Poster})` }}>
      <div className='text-white  text-xl bg-gray-900/60 p-0.5 w-full text-center '>
        {Title}
      </div>
    </div>
    </Link>
  )
}

export default MovieCard;