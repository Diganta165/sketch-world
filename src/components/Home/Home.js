import React, { useEffect, useState } from 'react';
import Sketch from '../Sketch/Sketch';

const Home = () => {
    const [sketches, setSketches] = useState([]);
    
    useEffect(() => {
        fetch('https://glacial-springs-52300.herokuapp.com/sketches')
        .then(res => res.json())
        .then(data => setSketches(data))
    },[])

    return (
        <div className ="row">
            {
                sketches.map(sketch => <Sketch sketch={sketch}></Sketch>)
            }
        </div>
    );
};

export default Home;