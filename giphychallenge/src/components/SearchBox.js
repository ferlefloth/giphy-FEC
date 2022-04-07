import React from "react";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { useState, useEffect } from "react";

function SearchBox(){
    const [username,setUsername] =useState('');

    const sendSomething = (event)=>{ //el event es el username
       event.preventDefault();
       const baseUrl='https://api.giphy.com/v1/gifs/search?' 
       const api_key= 'oy5WoJCYpGcZe3cYmmFvEydLBVSZamUR'
        fetch(`${baseUrl}api_key=${api_key}&q=${event}&limit=25&offset=0&rating=g&lang=en`)
        .then(res => res.json())
        .then(data =>{
           const allElements = data.data;
           for( let element of allElements){
               // Acá se debería pushear la data
               //NUEVO CAMBIOS
               console.log("los ids son : " + JSON.stringify(element))
           }
        })
    }

    const handleChange = (event)=>{
        console.log("el event : " + event.target.value)
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