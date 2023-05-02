import React, { useState } from 'react';
import {Modal,Button,Form} from 'react-bootstrap'
const Add = ( {show,handleClose,addMovies}) => {
    const handleChange =(e)=>{
setnewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    const [newMovie,setnewMovie]=useState({
        "Id":"2",
            "Title": "",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": ""
    })
  return (
    <div>
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Add a new movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     


    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Movie Name</Form.Label>
      <Form.Control type="text" placeholder="Enter movie name" onChange={handleChange} name="Title"/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Movie image</Form.Label>
      <Form.Control type="text" placeholder="movie url" onChange={handleChange} name="Poster"/>
    </Form.Group>
   
  </Form>


    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary"  onClick={()=>{addMovies(newMovie);handleClose()}}>Add</Button>
    </Modal.Footer>
  </Modal>
    </div>
  );
}

export default Add;
