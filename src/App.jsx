import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import PokemonInfo from './components/PokemonInfo';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path= "/" element = { <Login /> } />
          <Route element = {<ProtectedRoutes />}>
            <Route path= '/Pokedex' element = { <Pokedex/>}/>
            <Route path= '/Pokedex/:id' element = { <PokemonInfo/> }/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
