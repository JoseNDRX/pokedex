import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import SearchByType from '../components/SearchByType';
import GetPokemons from '../components/GetPokemons'
import Pagination from '../components/Pagination';
import Sugestions from '../components/Sugestions';


const Pokedex = () => {

  const userName = useSelector( state => state.userName )
  const navigate = useNavigate()
  const [ pokemons, setPokemons ] = useState([ ])
  const [ searchPokemon, setSearchPokemon ] = useState("")
  const [ suggestions, setSuggestions ] = useState([])

  useEffect(() => {
    getAllPokemons();
  }, [] )

  const getAllPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
      .then( resp => setPokemons( resp.data ) )
      .catch( error => console.error( error ))
  }

  useEffect(() => {
    getAllPokemons()
    let preview
    if(searchPokemon != ""){
        preview = pokemons.results?.filter( pokemon =>
          pokemon.name.startsWith( searchPokemon ) );
          setSuggestions(preview?.map( ( poke ) => poke.name ) );
      }
    }, [ searchPokemon ])

  const initialValues= () => {
    setSuggestions([])
    setSearch("")
  }
  
  return (
    <div className='pokedex'>
      <div className='welcome'>
        <button onClick={ () => navigate(-1)}>Return</button>
        <h1>Pokedex</h1>
        <p>Welcome <span>{userName}</span>, here you can find your favorite pokemon!</p>
        <div className='search__container'>
          <input
            placeholder='Search by name...'
            type="text"
            value={ searchPokemon }
            onChange={ ( e => setSearchPokemon( e.target.value.toLowerCase() ) ) }
          />
          <button onClick={ () => navigate(`${ searchPokemon }`)}>
            <i className='bx bx-search bx-sm'></i>Find
          </button>
          { searchPokemon != "" &&
            <Sugestions
              suggestions={suggestions}
              setSearchPokemon={setSearchPokemon}
            />
          }
        </div>
        <GetPokemons
          pokemons = { pokemons }
          setPokemons={ setPokemons }
        />
      </div>
    </div>
  );
};

export default Pokedex;