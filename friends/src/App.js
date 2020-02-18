import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Link to ="/login">Login</Link>
          </div>

          <Switch>
            <PrivateRoute path='/protected' component={FriendsList} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
