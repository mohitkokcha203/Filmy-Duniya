import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ExploreMovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = async () => {
    const url = `https://omdbapi.com/?i=${movie.imdbID}&apikey=54b966e3`;
    try {
      const response = await axios.get(url);
      const movieDetails = response.data;
      navigate('/exploremoviedetail', { state: { movieDetails } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className='h-[45vh] w-[140px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 cursor-pointer flex items-end'
      style={{ backgroundImage: `url(${movie.Poster})` }}
      onClick={handleClick}
    >
      <div className='text-white  text-xl bg-gray-900/60 p-0.5 w-full text-center '>
        {movie.Title}
      </div>
    </div>
  );
}

export default ExploreMovieCard;