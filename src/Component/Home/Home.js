import { Navbar } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Tours from "../Tours/Tours";
import Tour from "../Tours/tour/Tour.js";
function Home(props){

    return(
        <>
       <Navbar/>
      
       <Tour dataTour={props.data}/>
       {/* <Footer/> */}
        </>

    )

}

export default Home;