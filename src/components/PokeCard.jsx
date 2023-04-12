import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'

const PokeCard = ( { url }) => {
  const [ pokemon, setPokemon ] = useState ({ })
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(url)
      .then( resp => setPokemon( resp.data ) )
      .catch ( error => console.error( error ) )
  }, [])
 
  return (
    <div onClick={ () => navigate( `/pokedex/${pokemon.id}` ) } >
      { pokemon.name }
      <img width='120px' src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
      
    </div>
  );
};

export default PokeCard;