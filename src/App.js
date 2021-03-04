import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Characters from './components/characters/characters'
import Character from './components/characters/character'
import Login from './components/login/login'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/characters">
            <Characters/>
          </Route>
          <Route path="/character/:id">
            <Character/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
