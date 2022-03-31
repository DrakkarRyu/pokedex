import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ( {pokemonURL} ) => {
    
    const [ pokemon, setPokemon] = useState({}) 

    useEffect (() => {
        axios.get(pokemonURL)
            .then(res => setPokemon(res.data))
    },[ pokemonURL])


    return (
        <li className='pokemonCard'>
            <Link to={`/Pokedex/${pokemon.id}`}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites?.other?.dream_world.front_default ? pokemon.sprites?.other?.dream_world.front_default : pokemon.sprites?.front_default} alt=''/>
            </Link>
        </li>
    );
};

export default PokemonCard;