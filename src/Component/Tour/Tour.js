
import './Tour.css';
function Tour(props){

return(
    <>
    <div id="my-Tour"> 
        {props.dataTour.map((item)=>{ 
            return (<div id='Tours'>
                <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
            </div>)
        }
        )}
         </div>
    </>
)

}

export default Tour;