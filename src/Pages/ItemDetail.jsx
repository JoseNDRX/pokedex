import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetail = () => {

  const userName = useSelector(state => state.userName)
  const {id} = useParams()
  const [ pokemon, setPokemon ] = useState ({ })
  const navigate = useNavigate()
  
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then( resp => setPokemon( resp.data ) )
      .catch ( error => console.error( error ) )
  }, [])
  
  return (
    <div>
      <h1>{ pokemon.name }</h1>
      
      <img width='120px' src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
      <button onClick={() => navigate(-1)}>Regresar</button>
    </div>
  );
};

export default ItemDetail;