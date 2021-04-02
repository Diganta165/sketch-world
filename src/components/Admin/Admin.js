import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);
    

    const onSubmit = data => { //sketch & info adding in the db
        const sketchData ={
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://glacial-springs-52300.herokuapp.com/admin`
        
        fetch(url,{
            method: 'POST',
            headers: { 
                'content-type' : 'application/json'
            },
            body: JSON.stringify(sketchData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '13f12b2988b5478db4d7b2d32b917910');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="container">
            <h1>Admin's Panel</h1>

            <section>
            <form onSubmit={handleSubmit(onSubmit)}>

            <input name="name" defaultValue="Sketch Name" ref={register} />
            <br/>
            <input name="price" placeholder="Price" defaultValue="Price" type="number" ref={register} />
            <br/>
            <input name="exampleRequired" type="file" onChange = {handleImageUpload} />
            <br/>
            
            <input type="submit" />
            </form>
            </section>

        </div>
    );
};

export default Admin;