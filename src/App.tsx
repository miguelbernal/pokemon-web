// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          {/* Agregar rutas para otras vistas (lista de favoritos, etc.) */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
