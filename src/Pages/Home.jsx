import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserName } from '../store/slices/userName.slice'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [ name, setName ] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToPokedex = () => {
    dispatch( getUserName ( name ) );
    navigate('/pokedex')
  }


  return (
    <div>

      <h1>Hello Trainer!</h1>
      <p>Give me your name to start</p>
      <input type="text" value={ name } onChange={ e => setName( e.target.value ) } />
      <button onClick={ () => goToPokedex( ) }>Start</button>

    </div>
  );
};

export default Home;