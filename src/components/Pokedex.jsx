import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
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
                        <li key={pokemon.id}>
                            <Link to={`/Pokedex/${pokemon.id}`}>
                                {pokemon.name}
                                <img src={pokemon.url} alt = '' />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokedex; <h1>Pokedex</h1>