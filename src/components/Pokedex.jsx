import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126`)
            .then(res => setPokemons(res.data.results))
    }, [])
    console.log(pokemons)

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {userName} these are the follow pokemons...</p>
            <ul>
                {
                    pokemons.map(pokemon => (
                        <PokemonCard pokemonURL={pokemon.url} key={pokemon.url}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokedex; <h1>Pokedex</h1>