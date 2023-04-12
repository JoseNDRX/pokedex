import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchByType = ( { getByType } ) => {
  const [ types, setTypes ] = useState( [ ])

  useEffect (() => {
    axios
      .get('https://pokeapi.co/api/v2/type/')
      .then( resp => setTypes( resp.data?.results ) )
      .catch( error => console.error( error ) )
  }, [])
  
  return (
    <div className='bytype'>
      <h3>Search by type</h3>
      <select name="" id="" onChange={ e => getByType( e.target.value ) }>
        <option default value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279">
          All pokemons
        </option>
        {
          types.map( ( type ) => (
            <option key={ type.name } value={ type.url } >
              { type.name.charAt(0).toUpperCase() + type.name.slice(1) }
            </option>
          ))
        }
      </select>      
    </div>
  );
};

export default SearchByType;