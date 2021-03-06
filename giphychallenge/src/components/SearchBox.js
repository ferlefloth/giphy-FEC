import React, { Component } from "react";
import { useState, useEffect } from "react";
import ImageList from './ImageList';
function SearchBox({info}){
    const [username,setUsername] =useState('');

    const sendSomething = (event)=>{ 
       event.preventDefault();
       const baseUrl='https://api.giphy.com/v1/gifs/search?' 
       const api_key= 'oy5WoJCYpGcZe3cYmmFvEydLBVSZamUR'
        fetch(`${baseUrl}api_key=${api_key}&q=${username}&limit=25&offset=0&lang=en`)
        .then(res => res.json())
        .then(data =>{
           const allElements = data.data;
           let allUrls = [];
           for( let element of allElements){
               allUrls.push(element.images.downsized_medium);
           }
           info(allUrls)
           return allUrls;
        })
    }
    const handleChange = (evento)=>{
        setUsername(evento.target.value.toLowerCase());
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