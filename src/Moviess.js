 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Error from './Components/Error'
 const Moviess = () => {
   return (
     <div>
       <Routes>
       <Route exact path='/' element={<App/>}/>
       <Route exact path='/*' element={<Error/>}/>
       </Routes>
     </div>
   )
 }
 
 export default Moviess
 