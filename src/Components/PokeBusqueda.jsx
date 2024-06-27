import axios from "axios";
import {React,useEffect,useState} from 'react'

// export const pokemons = () => {
//   return (
//     <div>pokemons</div>
//   )
// }


function PokeBusqueda
 () {
    const [pokemon, setPokemon] = useState([]);
    const [busqueda, setBusqueda] = useState("");
  
    //   const newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    // const newPokemonData = newPokemon.data.species
    // const myNewPokemon = [...newPokemonData]
    // setPokemon(myNewPokemon)
  const handleChange =(e)=>{
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }
  const filtrar=(terminoBusqueda)=>{
    try{
    const resultadosBusqueda = pokemon.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
  
    })
    setPokemon(resultadosBusqueda)}
    catch{
      alert("pokemon no encontrado")
    }
  }
    const getPokemon = async () => {
      try {
      
        await axios
          .get(
            "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
          )
          .then((response) => {
            setPokemon((response.data.results))
          });
      } catch (error) {
        console.log(error);
      }
    };
  useEffect(()=>{
    getPokemon()
  },[])
    return (<div>
      {pokemon.map((item,index)=><div key={index}>
  {item.name}
  </div>)}
  <button onClick={getPokemon}>Mostrar</button>
  
  <form onSubmit={()=>filtrar(pokemon)}>
    <label htmlFor="pokemon">
      Nombre de pokemon
    </label>
    <p>
     
      <input
        type="search"
        id="search"
        name="search"
        value={busqueda}
        onChange={handleChange
        }
        placeholder="busca tu pokemon"
      />
      <button type="submit"> Buscar</button>
    </p>
  </form>
  
  </div>
    
    );


}
export default PokeBusqueda
