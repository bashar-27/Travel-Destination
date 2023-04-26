import Tour from "../Tours/tour/Tour.js";
import './Tours.css';

function Tours(props){

return(
<Tour dataTour={props.data}/>
)

}

export default Tours;