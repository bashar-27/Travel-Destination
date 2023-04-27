import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './TourDetails.css';

import { useState } from 'react';

function TourDetails(props) {
  let param = useParams();
  console.log(param);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='det'>
      {props.data
        .filter((item) => item.id === param.id)
        .map((item) => (
          <div id="Details">
            <img src={item.image}/>
            <h2>{item.name}</h2>
            {showMore ? item.info : item.info.substring(0, 250)}
            <Button className='btn' onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        ))}
    </div>
  );
}

export default TourDetails;