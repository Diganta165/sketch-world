import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Sketch from '../Sketch/Sketch';
import 'bootstrap/dist/css/bootstrap.css'

const Home = () => {
    const [sketches, setSketches] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://glacial-springs-52300.herokuapp.com/sketches')
        .then(res => res.json())
        .then(data => {
            setSketches(data)
            setLoading(false);
        })
    },[])

    return (
        <div className="container">
        <div className ="row">
            {
                loading ? <Spinner className="text-center" animation="border" />
                : sketches.map(sketch => <Sketch key={sketch._id} sketch={sketch}></Sketch>)
            }
        </div>
        </div>
    );
};

export default Home;