import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const MovieCard = ({movie}) => {
  return (
    <div>
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={movie.posterUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
       {movie.despcription}
      </Card.Text>
      <ReactStars
      value={movie.rate}
      edit={false}
      size={24}
      activeColor="#ffd700"
    />,
      <Card.Text> {movie.rate}</Card.Text>
      <Button href={movie.trailer} target='blank'>Trailer</Button>
    </Card.Body>
  </Card>

   
    </div> 
  )
}

export default MovieCard
