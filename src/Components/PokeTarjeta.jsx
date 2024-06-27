import axios from "axios";
import React from 'react'
import {useState,useEffect} from  "react"



function PokeTarjeta (params) {
    const [pokemon, setPokemon] = useState([]);
    const [imagen, setImagen] = useState("");
    
    useEffect(()=>{
      getPokemon()
    },[])

    const getPokemon = async () => {
      try{
        const liga = params.poke.url; //Props para traer todos los pokemon
        axios.get(liga).then(async(response)=>{
          const respuesta = response.data
          setPokemon(respuesta)
          if(respuesta.sprites.other.dream_world.front_default != null){ //Elegir una foto si no existe la siguiente
           setImagen(respuesta.sprites.other.dream_world.front_default ) 
          }
          else{
            setImagen(respuesta.sprites.other["official-artwork"].front_default ) 

          }
        })
      }
      catch{
        alert("ERROR")
      }
    }

    return (<div>
    <p> ID: {pokemon.id}</p>
     <p> Nombre: {pokemon.name}</p>
     <img src={imagen}></img>
     <p>Peso:{pokemon.height} PokeKilos</p>

    </div>
    
    );


}
export default PokeTarjeta