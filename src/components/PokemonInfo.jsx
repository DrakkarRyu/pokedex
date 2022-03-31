import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonInfo = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [id])

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other?.dream_world.front_default ? pokemon.sprites?.other?.dream_world.front_default : pokemon.sprites?.front_default} alt=''/>
            <p>Type: {pokemon.types?.[0]?.type.name}, {pokemon.types?.[1]?.type.name}</p>
            <p>Height: {(pokemon.height/0.10).toFixed(2)} cm</p>
            <p>Weight: {(pokemon.weight*0.10).toFixed(2)} kg</p>
            <p>Abilities: {pokemon.abilities?.[0]?.ability.name}, {pokemon.abilities?.[1]?.ability.name}</p>
        </div>
    );
};

export default PokemonInfo; <h1> Info</h1>