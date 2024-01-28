// src/components/PokemonList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    // Llamada inicial a la API para obtener la lista de Pokémon
    // Puedes ajustar la URL de la API según tus necesidades
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => {
        const results = response.data.results;
        // Llenar la lista de Pokémon con datos básicos
        let updatedPokemonList:any = [];
        for (let item of results) {
          axios.get(item.url)
            .then(response => {
              const data = response.data;
              const pokemon = {
                id: data.id,
                name: item.name,
                url: item.url,
                imageUrl: data.sprites.other.home.front_default,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                hp: data.stats[0].base_stat,
                type: data.types[0].type.name
              }
              updatedPokemonList.push(pokemon);
              setPokemonList(updatedPokemonList);
            })
            .catch(error => {
              console.error('Error fetching Pokemon data only:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
      });
  }, []);

  const handleToggleFavorite = (index: number) => {
    console.log(`Yo te elijo! ${index}`)
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
