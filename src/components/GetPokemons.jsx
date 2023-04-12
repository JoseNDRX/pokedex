import React, { useState } from 'react';
import PokeCard from '../components/PokeCard'
import SearchByType from '../components/SearchByType'
import axios from 'axios';
import Pagination from '../components/Pagination'

const GetPokemons = ( { pokemons, setPokemons }) => {
  const [page, setPage] = useState(1)
  const perPage = 20
  const lastIndex = perPage * page
  
  const getByType = (url) => {
    setPage(1)
     axios
      .get(url)
      .then( resp => setPokemons( resp.data ))
      .catch ( error => console.error ( error ))
  }

  let pokemonsRoute
  let countRoute
  const route = () => {
    if(pokemons?.results){
        pokemonsRoute = pokemons?.results
        countRoute = pokemons?.count
    } else {
        pokemonsRoute = pokemons.pokemon
        countRoute = pokemons.pokemon?.length
    }
    }
    route()

    const totalPages = Math.ceil( countRoute / perPage);
    const pokemonsToShow = pokemonsRoute?.slice(lastIndex - perPage, lastIndex)
    const iterationArray = []
    const iteration = () => {
        for (let i = 1; i <= totalPages; i++) {
            iterationArray.push(i)
        }
    }
    iteration();

    let access
    const selectaccess = () => {
        if (totalPages > 10) {
        if (page > totalPages - 5) {
            access = iterationArray.slice(totalPages - 10, totalPages)
        } else if (page > 5) {
            access = iterationArray.slice(page - 5, page + 5)
        } else {
            access = iterationArray.slice(0, 10)
        }} else {
            access = iterationArray.slice(0, totalPages)
        }
    }
    selectaccess();
  
  return (
    <div>
      <SearchByType
        getByType = { getByType }
      />

      { pokemonsToShow?.map((pokemon) => (
        <PokeCard 
          url={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
          key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
        /> 
      ) ) }

      {
        access.map((num) => (
          <Pagination num={num} key={num} setPage={setPage}/>
        ) )
      }
    </div>
  );
};

export default GetPokemons;