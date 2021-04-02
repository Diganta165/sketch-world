import React from 'react';
import { Card } from 'react-bootstrap';

const OrderedComponents = (props) => {
    console.log(props.order)
    let id= props.order._id
    const {email,userName,name,price,imageURL} = props.order;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                        {price}
                </Card.Text>
                
            </Card.Body>
            </Card>
        </div>
    );
};

export default OrderedComponents;