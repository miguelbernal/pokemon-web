// src/components/FavoritoCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './FavoritoCard.css'

interface FavoritoCardProps {
  pokemonData: any; // Datos del Pokemon
  onToggleFavorite: () => void; // Manejar la acción de agregar/eliminar favorito
}

function handleEliminar(){
  console.log('eliminar')
}

const FavoritoCard: React.FC<FavoritoCardProps> = ({ pokemonData, onToggleFavorite }) => {
  const { name, imageUrl, type } = pokemonData;
  const cardType = `card${type}`;

  return (
    <div className={'card-favorito ' + cardType}>
      <img className='pokemon-imagen-favorito' src={imageUrl} alt={name}/>
      <div className='pokemon-nombre-favorito'>{name}</div>
      <FontAwesomeIcon className='eliminar' icon={faTrash} onClick={handleEliminar}/>
    </div>
  );
};

export default FavoritoCard;
