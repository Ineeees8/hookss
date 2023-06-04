import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Moviess from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Moviess/>
    
  </React.StrictMode>
  </BrowserRouter>
);


