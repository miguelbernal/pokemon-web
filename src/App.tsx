// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import FavoritoList from './components/FavoritoList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          {/* Agregar rutas para otras vistas (lista de favoritos, etc.) */}
          <Route path="/favoritos" element={<FavoritoList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
