import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [types, setTypes]=useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126`)
            .then(res => setPokemons(res.data.results))
        axios.get(`https://pokeapi.co/api/v2/type`)
            .then(res => setTypes(res.data.results))
    }, [])

    const submit = e =>{
        e.preventDefault();
        navigate(`/Pokedex/${pokemonName}`);
    }

    const handleType = e => {
        axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon))
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {userName} these are the follow pokemons...</p>
            <div className='select'>
                <select onChange={handleType}>
                    <option value=''>Filter by pokemon type</option>
                    {
                        types.map(type=>(
                            <option key={type.url} value={type.url}>{type.name}</option>
                        ))
                    }
                </select>
            </div>
            <form className='input-container' onSubmit={submit}>
                <label htmlFor='pokemon-name'>Search by name</label>
                <input type='text' id='pokemon-name' value={pokemonName} onChange={ e => setPokemonName(e.target.value)} required/>
                <button>Search</button>
            </form>
            <ul>
                {
                    pokemons.map(pokemon => (
                        <PokemonCard pokemonURL={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokedex; <h1>Pokedex</h1>