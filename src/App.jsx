import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Pokedex from './Pages/Pokedex'
import ItemDetail from './Pages/ItemDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import './App.css'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route
          path='/'
          element={<Home />} />
          <Route element={ <ProtectedRoutes /> } >
            <Route
              path='/pokedex'
              element={<Pokedex />}
            />
            <Route
              path='/pokedex/:id'
              element={<ItemDetail />}
            />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
