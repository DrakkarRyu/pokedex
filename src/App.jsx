import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path= "/" element={ <Login /> } />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
