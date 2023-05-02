import React,{useState} from 'react'
import MovieCard from './MovieCard'
import Add from './Add'
import 'bootstrap/dist/css/bootstrap.min.css';
const MoviesList = ({movies,addMovies}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <button onClick={handleShow}>Add Movie</button>
    <Add addMovies={addMovies} show={show} handleClose={handleClose}/>
      {movies.map(el => <MovieCard movie={el}/>)}
    </div>
  )
}

export default MoviesList
