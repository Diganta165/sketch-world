import React from 'react';
import { Card } from 'react-bootstrap';

const OrderedComponents = (props) => {
    
    let id= props.order._id
    const {name,price,imageURL, orderTime} = props.order;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                        <b>Price:</b> ${price} <br/> <b>Purchased Time:</b> {orderTime}
                </Card.Text>
                
            </Card.Body>
            </Card>
        </div>
    );
};

export default OrderedComponents;