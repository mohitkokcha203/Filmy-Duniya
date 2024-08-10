import React from 'react'
import Logo from '../assets/logo-image.jpg'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='flex justify-between' style={{background:"black"}} >
    <div className='flex flex-wrap   space-x-8 items-center pl-3 py-3 ' >
        <img src="https://cdn.vectorstock.com/i/1000v/66/66/blue-film-icon-vector-3876666.avif" alt="" className='w-[40px] h-[40px] rounded-full'/>

        <Link to="/" className=' text-xl font-bold  p-2' id='heading'>Movies</Link>
        <Link to="/watchlist" className='text-xl font-bold  p-2' id='heading'>WatchList</Link>
        <Link to="/exploremovies" className=' text-xl font-bold  p-2' id='heading'>Explore Movies</Link>
        
        

    </div>
    <div className='flex flex-wrap   space-x-5 items-center pr-5 py-3 justify-end '>
        <Link to="/login" className='  text-xl font-bold  p-2 ' id='heading'>Login</Link>
        <Link to="/signup" className=' text-xl font-bold  p-2' id='heading'>SignUp</Link>
        </div>
    </div>
  )
}

export default Navbar