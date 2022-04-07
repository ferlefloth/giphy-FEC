import React from "react";
import { useState, useEffect } from "react";

function SearchBox(){
    const [username,setUsername] =useState('');

    const sendSomething = (event)=>{
        event.preventDefault();
        fetch('https://api.giphy.com/v1/gifs/search?api_key=oy5WoJCYpGcZe3cYmmFvEydLBVSZamUR&q=cat&limit=25&offset=0&rating=g&lang=en')
        .then(res => res.json())
        .then(data =>{
           const allElements = data.data;
           for( let element of allElements){
               // Acá se debería pushear la data
               console.log("los ids son : " + element.id)
           }
        })
    }

    const handleChange = (event)=>{
        setUsername(event.target.value.toLowerCase());

    }

    return(
        <>
            <form onSubmit={sendSomething}>
                <div>
                    <label htmlFor="usernameInput">Searching a gif :D</label>
                    <input 
                        id ="usernameInput" 
                        type="text" 
                        onChange={handleChange} 
                        value={username} 
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default SearchBox;