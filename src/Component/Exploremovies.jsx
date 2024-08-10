// ExploreMovies.jsx
import React, { useState } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import ExploreMovieCard from './ExploreMovieCard';

function ExploreMovies() {
  const url = "https://omdbapi.com/?s=";
  const Key = "54b966e3";

  const [title, setTitle] = useState(''); // State to store the search title
  const [searchResults, setSearchResults] = useState([]); // State to store the search results

  const handleSubmit = (e) => {
    setTitle(e.target.value); // Update the title state when the input value changes
  }

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`${url}${title}&apikey=${Key}`) // Make a GET request to the API with the search title and API key
      .then(response => {
        setSearchResults(response.data.Search); // Update the searchResults state with the API response
        console.log(response.data); // Log the API response to the console
      })
      .catch(error => {
        console.error(error); // Log any errors to the console
      });
  }

  return (
    <form className='grid justify-center grid-wrap m-10'>
      <input type="text" placeholder='Search Movies' onChange={handleSubmit} value={title} className='h-[3rem] w-[30rem] outline-none p-4 rounded-lg' />
      <div className='flex justify-center m-5'>
        <button onClick={handleSearch} className='h-[3rem] w-[10rem] bg-blue-500 rounded-xl'>Search</button>
      </div>
      {
        searchResults.length > 0 && (
          <div className='grid grid-cols-3 gap-4'>
            {searchResults.map((movie) => (
              <ExploreMovieCard  movie={movie} />
            ))}
          </div>
        )
      }
    </form>
  )
}

export default ExploreMovies;