import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import PrivateRoute from './components/PrivateRoute';
// import ItemList from './components/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Use-My-Tech-Stuff</p>
          <Link>Home</Link>
          <Link>Login</Link>
          <Link>Register</Link>
          <button>Sign Out</button>
        </header>
      </div>
    );
  }
}

export default App;
