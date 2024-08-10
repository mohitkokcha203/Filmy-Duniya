import React, { useEffect, useState } from "react";

function WatchList({ watchlist,setWatchlist,handleRemovetoWatchlist }) {
  const [search, setSearch] = useState("");
  const [genre,setgenre]= useState(['All Genres']);
  const [currGenre,setCurrGenre] = useState("All Genres")

  function handlechange(e) {
    setSearch(e.target.value);
  }

  function handlefilter(genre){
    setCurrGenre(genre)
  }

  function sortIncrease(){
    let sortIncreaseing = watchlist.sort((movieA,movieB)=>{
      return movieA.imdbRating - movieB.imdbRating
    })
    setWatchlist([...sortIncreaseing])

  }

  function sortDecrease(){
    let sortdecreaseing = watchlist.sort((movieA,movieB)=>{
      return movieB.imdbRating - movieA.imdbRating
    })
    setWatchlist([...sortdecreaseing])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return movieObj.Genre
    })
    temp = new Set(temp)
    setgenre(["All Genres",...temp])
  },[watchlist])





  return (
    <>
      <div className="text-white flex justify-center flex-wrap m-4 gap-3">
        {genre.map((genre)=>{
          return <div onClick={()=>handlefilter(genre)} className={currGenre==genre?"flex justify-center items-center h-[3rem] w-[8rem] rounded-xl bg-blue-400 font-bold hover:cursor-pointer":"flex justify-center items-center h-[3rem] w-[8rem] rounded-xl bg-gray-400/60 font-bold hover:cursor-pointer"}>
          {genre}
        </div>
        })}
        
       
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          value={search}
          onChange={handlechange}
          className="h-[3rem] w-[18rem] bg-gray-200 p-4 outline-none  "
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-100 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Title</th>
              <th className="flex justify-center gap-2">
                <div onClick={sortIncrease}><i class="fa-solid fa-arrow-up"></i></div>
                <div>Rating</div>
                <div onClick={sortDecrease}><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Released</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj)=>{      //this filter methid is used for geners based filtering  functionality
              if(currGenre=="All Genres"){
                return true
              }
              else{
                return movieObj.Genre == currGenre;
              }
            })
              .filter((movieObj) => {            //this filter methid is used for searching based filtering functionality
                return (movieObj.Title?.toLowerCase().includes(search.toLowerCase()));
              })
              .map((movieObj) => {             //this map function is used to render the detail of movies in watchlist  component
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img className="h-[6rem] w-[10rem]" src={movieObj.Poster} />
                      <div className="mx-10">{movieObj.Title}</div>
                    </td>
                    <td>{movieObj.imdbRating}</td>
                    <td>{movieObj.Released}</td>
                    <td>{movieObj.Genre}</td>
                    <td onClick={()=>handleRemovetoWatchlist(movieObj)} className="text-red-800 hover:scale-110 hover:font-bold duration-300 cursor-pointer ">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
