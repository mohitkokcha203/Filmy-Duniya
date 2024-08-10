import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Movies from "./Component/Movies";
import WatchList from "./Component/WatchList";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Component/Banner";
import MovieDetail from "./Component/MovieDetail";
import './App.css';
import Exploremovies from "./Component/Exploremovies";
import ExploreMovieDetail from "./Component/ExploreMovieDetail";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  

  const handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("Movieapp",JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };
  const handleRemovetoWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie)=>{
      return movie.id!=movieObj.id
    });
    
    setWatchlist(filteredWatchlist);
    localStorage.setItem("Movieapp",JSON.stringify(filteredWatchlist));
    
  };


  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('Movieapp')
    if(!moviesFromLocalStorage){
      return
    }
    
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  },[])

  return (
    <div className="Main-body">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route path="/moviedetail" element={<MovieDetail handleAddtoWatchlist={handleAddtoWatchlist} watchlist={watchlist}/>} />
          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemovetoWatchlist={handleRemovetoWatchlist} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/exploremovies" element={<Exploremovies />} />
          <Route path="/exploremoviedetail" element={<ExploreMovieDetail handleAddtoWatchlist={handleAddtoWatchlist} watchlist={watchlist}/>} />
          
        </Routes>
        <p className="text-white">&#169; Mohit Kumar Kokcha</p>
      </BrowserRouter>
    </div>
  );
}

export default App;