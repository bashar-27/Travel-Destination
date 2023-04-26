import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Tour.css";
import {Link, useParams} from "react-router-dom";
import Home from "../../Home/Home";
import { Route } from "react-router-dom";
import  TourDetails  from "../../TourDetails/TourDetails";

function Tour(props) {
   




  return (
    <div id="my-Tour">
      {props.dataTour.map((item) => {
      
        return (
            <Link to={`city/${item.id}`}  >
          <div id="Tours" key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
                      
           <Button variant="primary"  id={item.id}>More Details</Button>
          
          </div>
          </Link>
        );
      })}
    </div>
  );

    }
    export default Tour;


//     let[getInfo,setInfo] = useState("No Info Click To Get It")
    
//   let routDetails = (x) => {
//     props.dataTour.map((item)=>{
//         if(item.id === x){
//             setInfo(item.info)
//         }
//     })
//     console.log(getInfo);
    
    // <Route path='/contact' element={<Home />}/>
    // return <><TourDetails /></>
    // <Route path="/city/:id"   element={<TourDetails />}/> 
//   return <Route path="../TourDetails/TourDetails.js" element={<TourDetails />} />;
