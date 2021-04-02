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
        <div>
            <h1>{}Order Here</h1>
            {
                orders.map( order =><OrderedComponents order={order}></OrderedComponents> )
            }
        </div>
    );
};

export default Orders;