import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tour from "../Tour/Tour";
function Home(props){

    return(
        <>
       <Header/>
      
       <Tour dataTour={props.data}/>
       <Footer/>
        </>

    )

}

export default Home;