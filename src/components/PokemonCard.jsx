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
        <li key={pokemon.id}>
            <Link to={`/Pokedex/${pokemon.id}`}>
                {pokemon.name}
                <img src={pokemon.sprites?.front_default} alt=''/>
                <p>Type: {pokemon.types?.[0].type.name}</p>
                <p>SubType: {pokemon.types?.[1]?.type.name}</p>
            </Link>
        </li>
    );
};

export default PokemonCard;