// src/components/PokemonList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [favoritos, setFavoritos] = useState<any[]>([]);
  console.log(favoritos)

  const buscarPokemones = async () => {
    // Llamada inicial a la API para obtener la lista de Pokémon
    // Puedes ajustar la URL de la API según tus necesidades
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      const results = await response.data.results;
      // Llenar la lista de Pokémon con datos básicos
      let updatedPokemonList:any = [];
      for (let item of results) {
          const responseDetalle = await axios.get(item.url);
          const dataDetalle = await responseDetalle.data;
          const pokemon = {
                id: dataDetalle.id,
                name: item.name,
                url: item.url,
                imageUrl: dataDetalle.sprites.other.home.front_default,
                attack: dataDetalle.stats[1].base_stat,
                defense: dataDetalle.stats[2].base_stat,
                hp: dataDetalle.stats[0].base_stat,
                type: dataDetalle.types[0].type.name
              }
          updatedPokemonList.push(pokemon);
      }
      setPokemonList(updatedPokemonList);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  }
  
  useEffect(() => {
    buscarPokemones();
  }, []);

  const handleToggleFavorite = (index: number) => {
    console.log(`Yo te elijo! ${index}`)
    let lsFavoritos = localStorage.getItem("favoritos")
    console.log(lsFavoritos)
    let lsf:any[] = [];
    if(lsFavoritos !== null){
      lsf = lsFavoritos.split(',');
    }
    let newFavoritos:any[] = [...lsf, index]
    setFavoritos(newFavoritos)
    console.log(newFavoritos)
    localStorage.setItem(`favoritos`, newFavoritos.toString())
  };

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemonData={pokemon}
          onToggleFavorite={() => handleToggleFavorite(index)}
        />
      ))}
    </div>
  );
};

export default PokemonList;
