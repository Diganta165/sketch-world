import React from 'react';
import { useHistory } from 'react-router-dom';

const Sketch = (props) => {
    const {_id,name,price,imageURL} = props.sketch;
    const id = _id;
    // console.log({sketch})
    const history = useHistory();
    const handlePurchase = (sketchId) => {
        history.push(`/checkout/${sketchId}`);
    }
    
    return (
        <div className="col-md-3">
            <img style={{height:'250px'}} src={imageURL} alt="" />
            <h3>Name:{name} Price: ${price} <button onClick ={() => handlePurchase(id)}>Buy</button></h3>

        </div>
    );
};

export default Sketch;

