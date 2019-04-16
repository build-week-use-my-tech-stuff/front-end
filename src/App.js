import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchingItems, logout } from './actions';
import Login from './components/Login';
import Register from './components/Register';
// import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchingItems();
  }

  logout = event => {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <p>Use-My-Tech-Stuff</p>
            <div className = 'navigation'>
              <Link to = '/'>Dashboard</Link>
              <Link to = '/login'>Login</Link>
              <Link to = '/register'>Register</Link>
              <Link to = '/protected'>Account</Link>
              <button className = 'logout' onClick = {this.logout}>Logout</button>
            </div>
          </header>
          <Route 
            exact path = '/login'
            component = {Login}
          />
          <Route 
            exact path = '/register'
            component = {Register}
          />
          <Route 
            exact path = '/'
            component = {Dashboard}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    tech: state.tech,
  }
}

export default connect(mapStateToProps, { fetchingItems, logout })(App);
