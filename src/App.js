
import './App.css';
import Footer from './Component/Footer/Footer';

import Home from './Component/Home/Home';
import TourDetails from './Component/TourDetails/TourDetails';
import dataJson from './Component/Data/db.json';
import { Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import { useState } from 'react';

function App() {
 
  return (
    <div className="App">
      <Header className="App-header"/>
      <Routes>
  
        <Route path='/' element={<Home data ={dataJson}/>}/>
        <Route path="city/:id"   element={<TourDetails  data ={dataJson}/>}/> 
        

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
