import './App.css';
import { moviesData } from './Components/Data/Data';
import { useState } from 'react';
import ListMovies from './Components/ListMovies/ListMovies';
import FilterMovie from './Components/FilterMovie/FilterMovie';
import AddMovie from './Components/AddMovie/AddMovie';




function App() {
  const [movies , setMovies] = useState(moviesData)
  const [inputSearch , setInputSearch]=useState("")
  const add=(newMovie)=>{
    setMovies([...movies,newMovie])
  }

return (
    <div className="App">
    <FilterMovie inputSearch ={inputSearch} setInputSearch ={setInputSearch}/>
    <h1>Movie list</h1> 
    <FilterMovie/>
     <ListMovies movies={movies} inputSearch={inputSearch}/>
     <AddMovie add={add} />
    </div>
  
  );
}

export default App;
