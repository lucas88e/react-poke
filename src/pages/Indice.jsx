import React, { useEffect, useState } from 'react'
import axios from "axios"
import PokeTarjeta from '../Components/PokeTarjeta';
import{Input,InputGroupText,InputGroup} from "reactstrap"
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome CSS

 const Indice = () => {
  const [pokemon, setPokemon] = useState([]);
  const [allPokemons,setAllPokemons] = useState([])
  const [listado,setListado] = useState([])
  const [filtro,setFiltro] = useState("")
  const [offset,setOffset] = useState(0)
  const [limit,setLimit] = useState(20)


  useEffect(()=>{
    getPokemon(offset)
    getAllPokemons()
  },[])

  const getPokemon = async (o) => {
    let response;
    try {
    
     response= await axios
        .get(
          'https://pokeapi.co/api/v2/pokemon?limit='+limit+'&offset='+o
        )
        .then((response) => {
          setPokemon((response.data.results))
          setListado((response.data.results))
        });
    } catch (error) {
      console.log(error);
    }
  };
  const reloadPage = () => {
    window.location.reload();
  };

  const getAllPokemons = async () => {
    let response;
    try {
    
     response= await axios
        .get(
          'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
        )
        .then((response) => {
          setAllPokemons((response.data.results))
        });
    } catch (error) {
alert("Error")    }
  };
  const buscar = async(e)=>{
    
      if(e.keyCode ==13) // Presionar enter boton nº 13
        {
      if(filtro.trim()!=""){
        setListado([]);
        setTimeout( ()=>{
          const pokemonsFiltrados = (allPokemons.filter(elemento=>elemento.name.toString().includes(filtro)))
           //Filtrar por el nombre
          if(pokemonsFiltrados.length>0){ //Si existe el pokemon
            setListado(pokemonsFiltrados)
            return elemento
          }
          else{alert("Error el pokemon no existe pincha en volver a buscar")}
        },100)

      }
    }else if( filtro.trim()==''){
      setListado([]);
      setTimeout(()=>{
        setListado(pokemon)
      },100)
    } 
 
  }
  
  const handleChange =(e)=>{
      setFiltro(e.target.value)
    buscar(e.target.value)
  
 }
  
  return (<div> 
    <InputGroup> 
    <InputGroupText><i class="fas fa-search"></i></InputGroupText>
    <Input value={filtro} onChange={handleChange} onKeyUpCapture={buscar} placeholder='Buscar pokemon'/></InputGroup>
    {listado.map((pok,index)=><PokeTarjeta poke= {pok} key={index}/>)}

<button onClick={reloadPage}>Vovler a buscar </button>

  
</div>
  
  )
}
export default Indice