import React, { useRef } from 'react';
import ReactStars from "react-rating-stars-component";
import MovieCard from './MovieCard'
import {Modal,Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const MoviesList = ({movies,addMovies}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    const [show, setShow] = useState(false);
    const [newMovie, setnewMovie] = useState({
        
        "Title": "",
        
        "Poster":""
    });

    const p=useRef()
    const p2=useRef()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => addMovies(newMovie);
  return (
    <div>
    <button onClick={handleShow}>Add new movie</button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Movie add</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Movie title</Form.Label>
      <Form.Control type="email" placeholder="Enter title" Ref={p} onChange={()=>{setnewMovie({Title:p.current.value()})}}/>
    
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Movie image</Form.Label>
      <Form.Control type="text" placeholder="image" Ref={p2} onChange={()=>{setnewMovie({Poste:p2.current.value()})}}/>
     Rate : <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    </Form.Group>
   
  </Form>
    
    
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClick}>
        Add
      </Button>
    </Modal.Footer>
  </Modal>

      {movies.map(el =>  <MovieCard movie={el}/>)}
    </div>
  );
}

export default MoviesList;
