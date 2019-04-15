import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchingItems } from '../actions';
// import Login from './components/Login';
// import Register from './components/Register';
// import PrivateRoute from './components/PrivateRoute';
// import ItemList from './components/ItemList';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchingItems();
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>Use-My-Tech-Stuff</p>
            <Link to = '/'>Home</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/register'>Register</Link>
            <Link to = '/protected'>Protected</Link>
            <button>Sign Out</button>
          </header>
          <Route 
            path = '/login'
            component = {Login}
          />
          <Route 
            path = '/register'
            component = {Register}
          />
          <PrivateRoute 
            exact path = '/protected'
            component = {ItemList}
          />
        </div>
      </Router>
    );
  }
}

// function mapStateToProps({ rootReducer }) {
//   return (

//   )
// }

export default App;
