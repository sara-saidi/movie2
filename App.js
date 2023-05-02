import React, { useState, useEffect } from 'react';

import './App.css';
import MoviesList from './MoviesList';
import Search from './Search';

const App = () => {
   const [KeyWord, setKeyWord] = useState("");
   
	const [movies, setMovies] = useState([        {
            "Id":"1",
            "Title": "Star Wars: Episode IV - A New Hope",
            "Year": "1977",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Id":"2",
            "Title": " Episode V - The Empire Strikes Back",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Id":"3",
            "Title": " Episode VI - Return of the Jedi",
            "Year": "1983",
            "imdbID": "tt0086190",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        }]);
        const search =(text)=>{
          setKeyWord(text)
        }
        
	const addMovies= (movie)=>{ 
    setMovies(movies.concat(movie))
  }
	return (
		<div >
    <h1>MY MOVIES APPLICATION</h1>
    <div className="first">
    <Search search={search} /><br></br>
			<MoviesList addMovies={addMovies} movies={movies.filter(el=> el.Title.toLowerCase().includes(KeyWord.toLowerCase().trim()))}/>
		
      </div>
      </div>
	);
};

export default App;