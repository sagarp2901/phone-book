import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import Directory from './components/Directory/Directory.lazy';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/directory" />
          </Route>
          <Route path="/directory">
            <Directory />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
