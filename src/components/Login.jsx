import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [ userName, setUserName ] = useState ("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e =>{
        e.preventDefault();
        dispatch({ type: "GET_USERNAME", payload: userName });
        setUserName("");
        navigate("/Pokedex");
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input 
                type = "text" 
                value = {userName} 
                onChange = { e => setUserName(e.target.value)} 
                required/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login; 