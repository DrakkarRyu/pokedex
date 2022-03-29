import React from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {

    const userName = useSelector ( state => state.userName);

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Welcome {userName} those are the follow pokemons...</p>
        </div>
    );
};

export default Pokedex;<h1>Pokedex</h1>