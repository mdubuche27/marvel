import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';
import Characters from './components/characters/characters'
import Character from './components/characters/character'
import Login from './components/login/login'
import PrivateRoute from './components/utils/privatroutes'
import PublicRoute from './components/utils/publicroute'
import Favorite from './components/characters/favorite'

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
            <li>
              <Link to="/characters/favorite">Favoris</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <PrivateRoute exact path="/characters">
            <Characters/>
          </PrivateRoute>
          <PrivateRoute path="/characters/favorite">
            <Favorite/>
          </PrivateRoute>
          <PrivateRoute path="/character/:id">
            <Character/>
          </PrivateRoute>
          <PublicRoute path="/">
            <Login/>
          </PublicRoute>
          <Redirect path="/">
            <Login/>
          </Redirect>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
