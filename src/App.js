import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import LeftScreen from './Components/LeftScreen';
import RightScreen from './Components/RightScreen';


function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <div className='Parent'>
         <LeftScreen movies={movies} setMovie={setMovie}/>
         <RightScreen movie={movie}/>
    </div>
  )
}

export default App