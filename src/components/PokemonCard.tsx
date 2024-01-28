// src/components/PokemonCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './PokemonCard.css'

interface PokemonCardProps {
  pokemonData: any; // Datos del Pokemon
  onToggleFavorite: () => void; // Manejar la acción de agregar/eliminar favorito
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonData, onToggleFavorite }) => {
  const { id, name, imageUrl, attack, defense, hp, type } = pokemonData;
  const cardType = `card${type}`;

  function handleAnterior(){
    window.scrollBy({
      top: -window.innerHeight,
      behavior: 'smooth'
    })
  }

  function handleSiguiente(){
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className={'card ' + cardType}>
      <FontAwesomeIcon className='page' icon={faAngleUp} onClick={handleAnterior} />
      <div className='mis-favoritos' onClick={() => onToggleFavorite()}><span className='mis-favoritos-texto'>Mis favoritos</span> <FontAwesomeIcon className='favoritos' icon={faHeart} /></div>
      <div className='pokemon-numero'>Pokemon nro {id}</div>
      <h3 className='pokemon-nombre'>{name}</h3>
      <div className='text-center'>
        <img className='pokemon-imagen' src={imageUrl} alt={name}/>
      </div>
      <div className='pokemon-datos'>
        <div className={'dato11 ' + cardType}>Attack</div>
        <div className='dato12'>{attack}</div>
        <div className={'dato21 ' + cardType}>Defense</div>
        <div className='dato22'>{defense}</div>
        <div className={'dato31 ' + cardType}>HP</div>
        <div className='dato32'>{hp}</div>
        <div className='dato4'>Type: {type}</div>
        <button className='boton-yo-te-elijo' onClick={onToggleFavorite}>Yo te elijo!</button>
      </div>
      <FontAwesomeIcon className='page' icon={faAngleDown} onClick={handleSiguiente}/>
      
    </div>
  );
};

export default PokemonCard;
