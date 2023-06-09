import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./ListMovies.css"

const ListMovies = ({movies , inputSearch}) => {
    
  return (
    <div className='Cards'>
       {movies
        .filter(movie=>movie.title.toUpperCase().includes(inputSearch.toUpperCase()))
        .map ( movie=> 
      <MovieCard movie={movie} key={movie.id}/>
  )}
  
    </div>
  )
}

export default ListMovies ;
