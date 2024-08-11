import './Navbar.css'
import React, { useState } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import ExploreMovieCard from './ExploreMovieCard';

function ExploreMovies() {
  const url = "https://omdbapi.com/?s=";
  const Key = "54b966e3";

  const [title, setTitle] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 
  const [error, setError] = useState(null); 

  const handleSubmit = (e) => {
    setTitle(e.target.value); // Update the title state when the input value changes
  }

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`${url}${title}&apikey=${Key}`) 
      .then(response => {
        if (response.data.Response === 'True') {
          setSearchResults(response.data.Search); // Update the searchResults state with the API response
          setError(null);                       // Clear the error message
        } else {
          setSearchResults([]);                     // Clear the search results
          setError('Please,Enter Correct Movie Name'); // Set the error message
        }
      })
      .catch(error => {
        console.error(error); 
        setError('An error occurred while searching for movies');
      });
  }

  return (
    <form className='grid justify-center grid-wrap m-10'>
      <h1 className='text-white flex justify-center text-4xl pb-8 font-bold ' id='heading'>Explore Movies</h1>
      <input type="text" placeholder='Search Movies' onChange={handleSubmit} value={title} className='h-[3rem] w-[30rem] outline-none p-4 rounded-lg flex justify-center' />
      <div className='flex justify-center m-5'>
        <button onClick={handleSearch} className='h-[3rem] w-[10rem] bg-blue-500 rounded-xl'>Search</button>
      </div>
      {
        error ? (
          <p className='text-red-500 text-center font-semibold text-4xl'>{error}</p>
        ) :
          <div className='grid grid-cols-3 gap-4'>
            {searchResults.map((movie) => (
              <ExploreMovieCard  movie={movie} />
            ))}
          </div>
        
      }
    </form>
  )
}

export default ExploreMovies;
