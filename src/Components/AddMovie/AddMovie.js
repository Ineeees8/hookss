import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';


const AddMovie = (Add) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle]=useState("")

  const [description,setDescription]=useState("")

  const [rate , setRate]=useState(0)
  
  const [posterUrl , setPosterUrl]=useState("")

  const [trailer, setTrailer] =useState("")

  const handleTitle= (e)=>{
    setTitle(e.target.value)
  }

  const handleDescription= (e)=>{
    setDescription(e.target.value)
  }
  const handleRate= (e)=>{
    setRate(e.target.value)
  }
  const handlePosterUrl= (e)=>{
    setPosterUrl(e.target.value)
  }
  const handleTrailer= (e)=>{
    setTrailer(e.target.value)
  }
  const handleAdd =() =>{
    let newMovie={title,description,trailer,posterUrl,rate}
    Add(newMovie)
    setShow(false)
  }

  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
       Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e) =>handleTitle(e)} value={title} />

        <Form.Label>posterUrl</Form.Label>
        <Form.Control type="url" placeholder="posterUrl" onChange={(e) =>handlePosterUrl(e)} value={posterUrl} />
        
        <Form.Label>Trailer</Form.Label>
        <Form.Control type="url" placeholder="Trailer"  onChange={(e) =>handleTrailer(e)} value={trailer}/>
        
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e) => handleDescription (e)} value={description}/>

        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Rate" onChange={(e) =>handleRate (e)} value={rate} />
        
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default AddMovie
