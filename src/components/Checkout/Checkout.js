import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const {id} =useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    console.log(id);
    const [sketches, setSketches] = useState([]);
    
    useEffect(() => {
        fetch('https://glacial-springs-52300.herokuapp.com/sketches')
        .then(res => res.json())
        .then(data => setSketches(data))
        
    },[])
    console.log('fetch kora data db theke',sketches)


    let sketch = sketches.find(({_id})=> _id === id);

    console.log('sketch',sketch)
    
    const email = loggedInUser.email;
    const userName = loggedInUser.name;
    const checkoutEventHandler =() =>{
        
        if(sketch){
            const orderDetails = {email,userName,name:sketch.name,price: sketch.price,imageURL: sketch.imageURL,orderTime : new Date() }
        
        
        console.log(orderDetails)
        
        fetch('https://glacial-springs-52300.herokuapp.com/addOrder',{
            method: 'POST',
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('order placed successfully');
            }
        })
    }
}

    return (
        <div>
            <h1>Checkout</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Sketch Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    {sketch &&<td>{sketch.name}</td>}
                    <td>1</td>
                    {sketch &&<td>${sketch.price}</td>}
                    </tr>
                </tbody>
            </Table>
            
            <button type="button" onClick={checkoutEventHandler} >CheckOut</button>
        </div>
    );
};

export default Checkout;