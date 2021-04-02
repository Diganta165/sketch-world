import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderedComponents from '../OrderedComponents/OrderedComponents';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    useEffect(()=> {
        fetch('https://glacial-springs-52300.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    return (
        <div className="container">
            <h1>You have ordered...</h1>
        
        <div className="row">
            
            {
                orders.map( order =><OrderedComponents order={order}></OrderedComponents> )
            }
        </div>
        </div>
    );
};

export default Orders;