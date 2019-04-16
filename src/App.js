import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <p>Use-My-Tech-Stuff</p>
            <div className = 'navigation'>
              <Link to = '/'>Home</Link>
              <Link to = '/login'>Login</Link>
              <Link to = '/register'>Register</Link>
              <Link to = '/protected'>Account</Link>
              <button className = 'logout'>Logout</button>
            </div>
          </header>
          <Route 
            path = '/login'
            component = {Login}
          />
          <Route 
            path = '/register'
            component = {Register}
          />
          {/* <PrivateRoute 
            exact path = '/protected'
            component = {ItemList}
          /> */}
          <Route 
            path = '/'
            component = {Dashboard}
          />
        </div>
      </Router>
    );
  }
}

export default App;
