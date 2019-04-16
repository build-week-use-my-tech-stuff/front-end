import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchingItems, logout } from './actions';
import Login from './components/Login';
import Register from './components/Register';
// import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import UserAccount from './components/UserAccount';
import SignedIn from './components/navlinks/SignedIn';
import SignedOut from './components/navlinks/SignedOut';
import { AppHeader } from './components/StyledComponents';

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
          <AppHeader className="header">
            <p>Use-My-Tech-Stuff</p>
            {this.props.isLoggedIn ? <SignedIn logout = {this.logout}/> : <SignedOut /> }
          </AppHeader>
          <Route 
            path = '/login'
            component = {Login}
          />
          <Route 
            path = '/register'
            component = {Register}
          />
          <Route 
            exact path = '/'
            component = {Dashboard}
          />
          <Route 
            path = '/profile'
            component = {UserAccount}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    tech: state.tech,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { fetchingItems, logout })(App);
